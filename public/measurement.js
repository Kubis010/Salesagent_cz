/* Shared consent-gated measurement. Keep identical in the three site repositories. */
(function () {
  "use strict";
  if (window.SalesMeasurement) return;
  var host = location.hostname;
  var isApp = host === "app.salesbot.cz";
  var isAgent = host === "salesagent.cz" || host === "www.salesagent.cz";
  var authPage = isApp && location.pathname === "/auth";
  var id = isAgent ? "G-442V6JSVVN" : (isApp && !authPage ? "G-7PCGMS0PZF" : "G-ZLTQNYJ28G");
  var area = isApp ? "app" : "website";
  var domain = /(^|\.)salesbot\.cz$/.test(host) ? "salesbot.cz" : (/^(www\.)?salesagent\.cz$/.test(host) ? "salesagent.cz" : "");
  var cookieName = "sr_first_touch_v1";
  var lifetime = 90 * 24 * 60 * 60;
  var initialUrl = new URL(location.href);
  var initialReferrer = document.referrer;
  var active = false;
  var initialized = false;
  var pendingSignup = null;
  var timer;

  function safeToken(value) {
    if (value === "(direct)" || value === "(none)") return value;
    return typeof value === "string" && /^[a-z0-9][a-z0-9_.:/-]{0,99}$/i.test(value)
      && !/\d{8,}|[a-f0-9]{24,}/i.test(value) ? value : "";
  }
  function safePath(path) {
    if (isApp) return path === "/auth" ? "/auth" : "/app";
    return typeof path === "string" && /^\/[a-z0-9_/-]{0,180}$/i.test(path)
      && !/\d{8,}|[a-f0-9]{24,}/i.test(path) ? path : "/";
  }
  function readCookie(name) {
    var match = document.cookie.split("; ").find(function (s) { return s.startsWith(name + "="); });
    try { return match ? JSON.parse(decodeURIComponent(match.slice(name.length + 1))) : null; } catch (_) { return null; }
  }
  function consent() {
    try {
      var state = window.CookieScript && window.CookieScript.instance && window.CookieScript.instance.currentState();
      if (state && Array.isArray(state.categories)) return state.categories.includes("performance");
    } catch (_) {}
    var stored = readCookie("CookieScriptConsent");
    var categories = stored && stored.categories;
    if (typeof categories === "string") {
      try { categories = JSON.parse(categories); } catch (_) { categories = []; }
    }
    return Array.isArray(categories) && categories.includes("performance");
  }
  function attributes(age) {
    return "; Path=/; Max-Age=" + age + "; SameSite=Lax" + (domain ? "; Domain=" + domain : "") + (location.protocol === "https:" ? "; Secure" : "");
  }
  function valid(data) {
    if (!data || data.v !== 1 || data.consent !== true || !Number.isFinite(Date.parse(data.captured_at))
      || Date.parse(data.captured_at) > Date.now() || Date.now() - Date.parse(data.captured_at) > lifetime * 1000) return null;
    var clean = { v: 1, consent: true, captured_at: data.captured_at };
    clean.landing_page = typeof data.landing_page === "string" && /^\/[a-z0-9_/-]{0,180}$/i.test(data.landing_page)
      && !/\d{8,}|[a-f0-9]{24,}/i.test(data.landing_page) ? data.landing_page : "/";
    ["first_source", "first_medium", "first_campaign", "utm_source", "utm_medium", "utm_campaign", "referrer"].forEach(function (key) {
      clean[key] = safeToken(data[key]);
    });
    return clean;
  }
  function capture() {
    var ref = "";
    try { ref = new URL(initialReferrer).hostname.toLowerCase(); } catch (_) {}
    var internal = ref === host || (domain && (ref === domain || ref.endsWith("." + domain)));
    var utmSource = safeToken(initialUrl.searchParams.get("utm_source"));
    var utmMedium = safeToken(initialUrl.searchParams.get("utm_medium"));
    var utmCampaign = safeToken(initialUrl.searchParams.get("utm_campaign"));
    // Existing marketing CTA UTM must not replace the real first touch.
    if (isApp && utmSource === "salesbot.cz") utmSource = utmMedium = utmCampaign = "";
    var ai = /^(claude\.ai|chatgpt\.com|chat\.openai\.com|gemini\.google\.com|perplexity\.ai|www\.perplexity\.ai)$/.test(ref);
    var organic = /(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com|search\.yahoo\.com)$/.test(ref);
    return {
      v: 1, consent: true, captured_at: new Date().toISOString(), landing_page: safePath(initialUrl.pathname),
      referrer: internal ? "" : safeToken(ref),
      first_source: utmSource || (internal || !ref ? "(direct)" : safeToken(ref)),
      first_medium: utmSource ? (utmMedium || "referral") : (ai ? "ai-assistant" : (organic ? "organic" : (internal || !ref ? "(none)" : "referral"))),
      first_campaign: utmCampaign, utm_source: utmSource, utm_medium: utmMedium, utm_campaign: utmCampaign
    };
  }
  function get() {
    if (!consent()) return null;
    return valid(readCookie(cookieName));
  }
  function attributionParams() {
    var data = get();
    return data ? {
      landing_page: data.landing_page, first_source: data.first_source,
      first_medium: data.first_medium, first_campaign: data.first_campaign
    } : {};
  }
  function track(name, params) {
    if (!active || !consent() || !["sign_up", "generate_lead", "contact_click"].includes(name)) return false;
    var clean = Object.assign({ site_area: area }, attributionParams());
    ["method", "form_id", "lang", "link_type"].forEach(function (key) {
      var value = safeToken(params && params[key]); if (value) clean[key] = value;
    });
    window.gtag("event", name, clean);
    return true;
  }
  function signup(key) {
    if (!key || !consent()) return false;
    if (!active) { pendingSignup = key; refresh(); return false; }
    var storageKey = "sr_signup_" + key;
    try { if (sessionStorage.getItem(storageKey)) return false; } catch (_) {}
    var sent = track("sign_up", { method: "email" });
    if (sent) { try { sessionStorage.setItem(storageKey, "1"); } catch (_) {} }
    return sent;
  }
  function refresh(event) {
    if (!consent()) {
      var storedConsent = readCookie("CookieScriptConsent");
      var revoked = active || (storedConsent && ["accept", "reject"].includes(storedConsent.action))
        || (event && /CookieScript(Reject|Save|Accept)/.test(event.type));
      if (active) {
        active = false;
        window["ga-disable-" + id] = true;
        window.gtag("consent", "update", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      }
      // Deletion is allowed on withdrawal; no attribution cookie is created beforehand.
      if (revoked && readCookie(cookieName)) document.cookie = cookieName + "=" + attributes(0);
      if (revoked) document.cookie.split("; ").forEach(function (entry) {
        var name = entry.split("=")[0];
        if (/^_ga($|_)/.test(name)) {
          document.cookie = name + "=" + attributes(0);
          document.cookie = name + "=; Path=/; Max-Age=0; SameSite=Lax";
        }
      });
      return;
    }
    if (!get()) document.cookie = cookieName + "=" + encodeURIComponent(JSON.stringify(capture())) + attributes(lifetime);
    if (active) return;
    active = true;
    window["ga-disable-" + id] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "update", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    if (!initialized) {
      initialized = true;
      var config = {
        site_area: area, cookie_domain: domain || "auto", allow_google_signals: false,
        allow_ad_personalization_signals: false, page_location: location.origin + safePath(location.pathname),
        page_referrer: initialReferrer ? (function () { try { return new URL(initialReferrer).origin; } catch (_) { return ""; } })() : ""
      };
      var first = get();
      if (authPage && first) {
        config.campaign_source = first.first_source;
        config.campaign_medium = first.first_medium;
        config.campaign_name = first.first_campaign;
      }
      window.gtag("js", new Date());
      window.gtag("config", id, config);
      var script = document.createElement("script");
      script.async = true; script.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
      document.head.appendChild(script);
    }
    if (pendingSignup) { var key = pendingSignup; pendingSignup = null; signup(key); }
  }
  window.SalesMeasurement = { get: get, track: track, signup: signup, refresh: refresh };
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  ["CookieScriptLoaded", "CookieScriptAccept", "CookieScriptAcceptAll", "CookieScriptReject", "CookieScriptSave"].forEach(function (event) {
    window.addEventListener(event, refresh);
    document.addEventListener(event, refresh);
  });
  document.addEventListener("click", function (event) {
    var target = event.target instanceof Element ? event.target.closest("a[href]") : null;
    if (!target) return;
    var href = target.getAttribute("href") || "";
    var type = href.startsWith("tel:") ? "phone" : (href.startsWith("mailto:") ? "email" : (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href) ? "whatsapp" : ""));
    if (type) track("contact_click", { link_type: type });
  });
  refresh();
  timer = window.setInterval(refresh, 1500);
  window.addEventListener("pagehide", function () { clearInterval(timer); });
})();
