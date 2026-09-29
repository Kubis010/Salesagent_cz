import type { Translations } from './cs'

export const en: Translations = {
  nav: {
    home: 'Home',
    pricing: 'Pricing',
    salesRepCz: 'How it works',
    czechEntry: 'Czech Market Entry',
    about: 'About',
    contact: 'Contact',
    bookCall: 'Free consultation',
  },
  hero: {
    badge: 'Czech market entry · external sales representation',
    headline: 'We start your sales\nin the Czech Republic.',
    subheadline:
      'Entering the Czech or Slovak market without an office or a local hire? We act as your outsourced sales team: we find the right companies, reach decision-makers by email and LinkedIn in your name, run the follow-ups and book qualified meetings straight into your calendar. Fixed-price trial, no Czech entity needed.',
    cta: 'Free consultation',
    ctaSub: 'or see how it works',
    pipelineLabel: 'Your Czech sales, running',
    statsToday: 'reached today',
    statsReplies: 'replies',
  },
  pipelineDemo: {
    emailFragment: 'Hi Jan — saw you focus on...',
    channelLabels: { search: 'Research', email: 'Email', linkedin: 'LinkedIn', reply: 'Reply' },
    steps: [
      { label: 'Company found', detail: 'Novak Components s.r.o.', channel: 'search', typing: false },
      { label: 'Data enriched', detail: 'Contact · industry · website', channel: 'search', typing: false },
      { label: 'Personal email written', detail: '', channel: 'email', typing: true },
      { label: 'Email sent', detail: 'Delivered · not a template', channel: 'email', typing: false },
      { label: 'Decision-maker on LinkedIn', detail: 'Jan Novak, CEO', channel: 'linkedin', typing: false },
      { label: 'Profile visited', detail: 'Profile viewed', channel: 'linkedin', typing: false },
      { label: 'Connection request sent', detail: 'Personal note attached', channel: 'linkedin', typing: false },
      { label: 'Message 1 sent', detail: 'After connection accepted', channel: 'linkedin', typing: false },
      { label: 'Follow-up sent', detail: '4 days later', channel: 'linkedin', typing: false },
      { label: 'Reply received', detail: 'Wants a meeting', channel: 'reply', typing: false },
    ],
  },
  howItWorks: {
    title: 'How your Czech market entry works',
    subtitle:
      'No office, no local hire, no long contract. We run the prospecting and outreach in the Czech Republic and Slovakia; your team only takes the meetings that land in the calendar.',
    steps: [
      {
        number: '01',
        title: 'We define your Czech target market',
        body: 'Together we set the ideal customer profile, segments and message. We build a verified target list of Czech and Slovak companies from public registries (ARES), maps and websites — no bought databases.',
      },
      {
        number: '02',
        title: 'We reach decision-makers in your name',
        body: 'Personalised email and LinkedIn outreach in Czech, Slovak or English, with follow-ups. You keep your brand and every relationship; we do the prospecting.',
      },
      {
        number: '03',
        title: 'We qualify replies and book meetings',
        body: 'Every reply is handled and qualified. Interested decision-makers land as first meetings in your calendar — you see real demand before you commit to an entity or a hire.',
      },
      {
        number: '04',
        title: 'Trial review, then scale or stop',
        body: 'After the 2–3 month trial we review replies, meetings and objections together. If the numbers justify it, we continue monthly; if not, you leave with the report and the learnings.',
      },
    ],
  },
  forWhom: {
    title: 'Who this is for',
    items: [
      {
        title: 'Foreign B2B companies entering the Czech Republic or Slovakia',
        body: 'You want to test Czech demand before opening an entity or hiring locally. We become your external sales team and bring first meetings within weeks.',
      },
      {
        title: 'Exporters and manufacturers selling into CZ/SK',
        body: 'You have a product and no local sales presence. We build the pipeline in the local language, in your name, without a full sales department.',
      },
      {
        title: 'SaaS and service companies expanding into Central Europe',
        body: 'You need Czech and Slovak decision-makers reached systematically. We prospect and book the meetings; your team closes.',
      },
    ],
  },
  references: {
    title: 'Client results',
    subtitle:
      'The numbers below are real replies — companies that responded and wanted to talk further. Not email opens.',
    items: [
      {
        client: 'Whistlelink',
        sector: 'Whistleblowing SaaS · Sweden',
        value: '37',
        result: 'qualified leads over a 2-month trial',
      },
      {
        client: 'Bierbauer & Söhne',
        sector: 'Agricultural machinery · Germany',
        value: '∞',
        result: 'ongoing lead generation across CZ and SK',
      },
      {
        client: 'SavvyLockers',
        sector: 'Smart lockers · B2B',
        value: '5+',
        result: 'serious enquiries in one month',
      },
    ],
    note: 'Specific references and recommendations available on request.',
  },
  services: {
    title: 'What we do for your Czech market entry',
    subtitle:
      'One external sales team across the whole funnel — from finding companies to a booked first meeting with a Czech decision-maker.',
    automation: {
      badge: 'Outsourced sales representation',
      title: 'We are your sales team in the Czech Republic',
      body: 'We research Czech and Slovak companies in your segment, contact decision-makers by personalised email and LinkedIn, run the follow-ups, qualify interest and book meetings into your calendar — all in your name.',
      examples: [
        { label: 'Target list built from public sources (ARES, maps, web)', icon: 'ai' },
        { label: 'Decision-makers, emails and LinkedIn profiles enriched', icon: 'enrich' },
        { label: 'Email + LinkedIn outreach in Czech, Slovak or English', icon: 'flow' },
        { label: 'Interactive live demo built around your product', icon: 'chart' },
        { label: 'Qualified first meetings booked into your calendar', icon: 'connect' },
        { label: 'End-of-trial report with a continuation recommendation', icon: 'alert' },
      ],
      cta: 'Book a consultation',
    },
    agency: {
      badge: 'No entity, no local hire',
      title: 'Validate the market before you invest',
      body: 'Hiring a local rep costs €4,000–8,000 per month with a 3–6 month ramp. With outsourced representation you get selling activity in weeks and evidence of real demand before opening an office or an s.r.o.',
      examples: [
        { label: 'Runs through your existing company — no Czech entity needed', icon: 'connect' },
        { label: 'Fixed-price 2–3 month trial, no long-term lock-in', icon: 'flow' },
        { label: 'Czech, Slovak and English outreach, GDPR-compliant', icon: 'enrich' },
        { label: 'Extend monthly if it works, leave with the report if not', icon: 'chart' },
      ],
      cta: 'Book a consultation',
    },
  },
  founder: {
    label: 'Who is behind it',
    name: 'Petr Kubicek',
    role: 'Founder, Sales Robots s.r.o.',
    body: 'Over 20 years in B2B sales, including years in senior and leadership roles. We run outsourced sales for foreign companies entering the Czech and Slovak markets on our own outreach infrastructure. I do not resell someone else\'s tool — I run the prospecting for you so that first meetings land in your calendar.',
    credentials: [
      { value: '20+', label: 'years in B2B sales' },
      { value: 'Ing.', label: 'Prague Univ. of Economics' },
      { value: 'CZ + SK', label: 'markets we cover' },
    ],
  },
  salesRobots: {
    label: 'Sister service',
    text: 'Want to reach visitors who come to your site on their own? That is what',
    link: 'Sales Robots',
    suffix: 'does — on-site chat and widgets that turn a visit into an enquiry.',
  },
  cta: {
    title: 'Let\'s talk about your Czech market entry.',
    subtitle:
      'On a no-strings consultation we go through your product, your target customers and how a fixed-price trial in the Czech Republic would look.',
    primary: 'Free consultation',
    secondary: 'Send an email',
  },
  pricing: {
    title: 'External Sales Representation in the Czech Republic',
    subtitle:
      'Planning a Czech market entry? Test demand with an external sales team. Start with a fixed 2–3 month trial from €1,900 per month, then extend the representation if the results justify it.',
    setup: {
      label: '2–3 month Czech market entry trial',
      description:
        'For your Czech market entry, we build the target list, contact decision-makers by personalised email and LinkedIn, handle follow-ups, qualify replies and book first meetings. At the end of the trial, we review the results and agree whether to extend the representation or change the approach.',
    },
    tiers: [
      {
        name: 'Czech market entry trial',
        monthlyLabel: 'per month · 2–3 month initial term',
        price: 'from €1,900',
        priceNote: 'Start here',
        features: [
          'Target list built around your ideal customer profile',
          'Personalised email and LinkedIn outreach in your name',
          'Follow-ups, reply handling and qualification',
          'Qualified first meetings booked into your calendar',
          'End-of-trial report and continuation recommendation',
        ],
        cta: 'Book a consultation',
        highlight: true,
      },
      {
        name: 'Ongoing representation',
        monthlyLabel: 'monthly after the trial',
        price: 'from €1,900',
        priceNote: 'If it works',
        features: [
          'Continued outreach and pipeline development',
          'Ongoing optimisation by segment and message',
          'Meeting preparation and commercial follow-up',
          'Monthly reporting and next-step planning',
        ],
        cta: 'Book a consultation',
        highlight: false,
      },
      {
        name: 'Multi-market / custom',
        monthlyLabel: 'individual quote',
        price: 'custom',
        priceNote: 'Larger projects',
        features: [
          'Multi-language, multi-market campaigns',
          'Deeper ERP and internal-system integration',
          'Custom development (aidevs)',
          'Tailored live product demo',
          'Czech Republic plus Slovakia, Poland or other markets',
        ],
        cta: 'Book a consultation',
        highlight: false,
      },
    ],
    faq: [
      {
        q: 'What does the 2–3 month trial include?',
        a: 'We define your ideal customer profile, build a target list, contact relevant decision-makers by personalised email and LinkedIn, run follow-ups, qualify replies and book first meetings into your calendar.',
      },
      {
        q: 'Why start with a 2–3 month trial?',
        a: 'The trial gives enough time to test targeting, messaging and real buyer response without committing to a long-term local hire or office. We use the evidence to recommend the next phase.',
      },
      {
        q: 'Can you support our Czech market entry?',
        a: 'Yes. We act as your external sales team in the Czech Republic, helping you test the market, reach relevant decision-makers and validate demand before opening a local office or hiring a permanent team.',
      },
      {
        q: 'What happens after the trial?',
        a: 'We review qualified replies, meetings, objections and pipeline quality together. If the results justify continuation, we extend the representation on a monthly basis and agree the next targets. If not, you leave with the learnings and report.',
      },
      {
        q: 'Do we need a Czech entity or local hire?',
        a: 'No. We can run the initial sales representation through your existing company and book meetings with Czech decision-makers without you opening an office or hiring a local salesperson first.',
      },
      {
        q: 'How much does the trial cost?',
        a: 'The initial trial starts at €1,900 per month for 2–3 months. The final scope depends on your segment, language, number of prospects and channels; we confirm it before starting.',
      },
      {
        q: 'Is the outreach GDPR-compliant?',
        a: 'Yes. We reach business contacts on the basis of legitimate interest, and every message includes an opt-out. We build the system to respect that.',
      },
      {
        q: 'Do I need my own sales team?',
        a: 'Not necessarily. We run the prospecting and outreach and book the meetings; you only need someone to take them and negotiate — your existing team, a distributor or a partner. No local hire is required.',
      },
    ],
  },
  about: {
    title: 'What we do behind the scenes',
    subtitle:
      'We describe exactly what happens in your name in the Czech market, from finding companies to a booked meeting.',
    sections: [
      {
        title: 'Finding Czech and Slovak companies',
        body: 'We search company registries (ARES), maps and other public sources based on your brief. No bought databases or stale lists — the data is generated in real time.',
      },
      {
        title: 'Data enrichment and website analysis',
        body: 'For each company we add the industry, decision-makers and contacts, and read its website. That builds the context for outreach that speaks specifically to that company.',
      },
      {
        title: 'Email and LinkedIn outreach',
        body: 'We write and send the message, and in parallel reach the decision-maker on LinkedIn with a personal note and follow-ups — in Czech, Slovak or English, in your name.',
      },
      {
        title: 'Qualified meetings in your calendar',
        body: 'Replies are handled and qualified by us. Interested decision-makers are booked as first meetings, and you see what the market actually says before investing further.',
      },
    ],
    notSaas: {
      title: 'A sales team, not another tool',
      body: 'You are not buying an app you have to operate. We run the prospecting and outreach for you on a fixed-price trial — you take the meetings.',
    },
    team: {
      title: 'Behind SalesAgent.cz: Sales Robots s.r.o.',
      body: 'We are a Prague-based company running outsourced B2B sales for foreign and Czech companies. We stand on our own outreach infrastructure — LinkedIn automation (salesbot), live demo (salesrobots) and custom development (aidevs).',
    },
  },
  contact: {
    title: "Let's talk.",
    subtitle:
      'Set aside thirty minutes. We go through your product and target customers and show how a fixed-price trial in the Czech Republic would work.',
    calendly: 'Pick a time',
    or: 'or write directly',
    form: {
      name: 'Full name',
      company: 'Company',
      email: 'Work email',
      message: 'What you are solving / who you want to reach',
      submit: 'Send',
      success: 'Message sent. I will get back to you within 24 hours.',
      error: 'Something went wrong. Please try again.',
    },
    info: {
      company: 'Sales Robots s.r.o.',
      ico: 'Company no.: 09586563',
      address: 'Generala Sisky 2082/26, Prague - Modrany',
      email: 'info@salesagent.cz',
    },
  },
  footer: {
    tagline: 'Outsourced sales for your Czech market entry.',
    links: {
      howItWorks: 'How it works',
      pricing: 'Pricing',
      contact: 'Contact',
      register: 'Czech Business Register',
      privacy: 'Privacy Policy',
    },
    company: 'Sales Robots s.r.o., Company no. 09586563',
    address: 'Generala Sisky 2082/26, Prague - Modrany',
    rights: 'All rights reserved.',
  },
  register: {
    title: 'How to find a company in the Czech Business Register (ARES)',
    description:
      'Guide to searching companies in ARES and the Czech Commercial Register — verify company numbers, get extracts, find contact details.',
  },
}
