import type { Translations } from './cs'

export const en: Translations = {
  nav: {
    home: 'Home',
    pricing: 'Pricing',
    salesRepCz: 'How we build it',
    czechEntry: 'Czech Market Entry',
    about: 'About',
    contact: 'Contact',
    bookCall: 'Free consultation',
  },
  hero: {
    badge: 'Custom AI sales system',
    headline: 'An AI sales system\nyou actually own.',
    subheadline:
      'We build you a complete outbound machine — scraper → data enrichment → LinkedIn & email → live demo → CRM. In 1–3 weeks it is built, running and yours. Not a tool you rent, not an agency you depend on. We hand over the keys and the know-how to your team.',
    cta: 'Free consultation',
    ctaSub: 'or see how the system works',
    pipelineLabel: 'Your system running',
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
    title: 'How we build your system',
    subtitle:
      'You are not renting an app or hiring an agency on retainer. In 1–3 weeks we build an outbound machine wired into your tools — and hand you the keys.',
    steps: [
      {
        number: '01',
        title: 'Consultation',
        body: 'We go through your sales, your ideal customer and your goals. We map what the system would look like for you specifically — which channels, what data, where it connects (CRM, ERP). No strings, no charge.',
      },
      {
        number: '02',
        title: 'Design',
        body: 'We design the whole pipeline: data sources and scraping, contact enrichment, email and LinkedIn sequences, a live product demo, and the connection to your systems. You know exactly what you are getting.',
      },
      {
        number: '03',
        title: 'Build',
        body: 'We build the system on our infrastructure and on your accounts. Scrapers, enrichment, outreach sequences, reporting — all wired into one running machine.',
      },
      {
        number: '04',
        title: 'Test & hand over',
        body: 'We tune deliverability, copy and conversion on real traffic. Then we hand over the keys and train your team. The system and the data are yours — the know-how stays in-house, not with an agency.',
      },
    ],
  },
  forWhom: {
    title: 'Who we build it for',
    items: [
      {
        title: 'B2B SaaS and service companies (5–50 people)',
        body: 'You run outbound or want to start, but you do not want to depend on an agency forever. We build you your own machine that scales with you.',
      },
      {
        title: 'Manufacturers and B2B firms',
        body: 'You have a product but no systematic way to reach new customers. We give you a pipeline your own team runs — without hiring a whole sales department.',
      },
      {
        title: 'Teams that want to own the pipeline',
        body: 'You do not want to pay forever for access or send your know-how out of house. The system, the data and the process stay with you.',
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
        client: 'Bierbauer & Sohne',
        sector: 'Agricultural machinery · Germany',
        value: '∞',
        result: 'ongoing lead generation across CZ and SK',
      },
    ],
    note: 'Specific references and recommendations available on request.',
  },
  services: {
    title: 'What we build for you',
    subtitle:
      'Not one tool for one step. An integrated system across the whole funnel — from data to meeting, wired into your CRM and ERP.',
    automation: {
      badge: 'Complete pipeline',
      title: 'The whole outbound machine, wired and running',
      body: 'We do not hand you another isolated tool. We build an integrated system that finds companies, enriches the data, reaches out over email and LinkedIn, offers a live demo, and passes qualified opportunities into your CRM.',
      examples: [
        { label: 'Scrapers and company sourcing from public data (registries, maps, web)', icon: 'ai' },
        { label: 'Contact enrichment — industry, decision-makers, emails, LinkedIn', icon: 'enrich' },
        { label: 'Email + LinkedIn outreach with personalisation and follow-ups', icon: 'flow' },
        { label: 'Live product demo — interactive, not a static deck', icon: 'chart' },
        { label: 'Connection to your CRM / ERP and qualified-opportunity handover', icon: 'connect' },
        { label: 'Reports and dashboards your leadership actually reads', icon: 'alert' },
      ],
      cta: 'Book a consultation',
    },
    agency: {
      badge: 'Ownership & handover',
      title: 'We hand over the keys — the system is yours',
      body: 'Unlike an agency, we hand you the whole machine. We train your team, leave documentation, and the system and data stay with you. We can run and optimise it for you, but you never have to depend on anyone.',
      examples: [
        { label: 'Training your team to operate the system', icon: 'connect' },
        { label: 'Documentation and access handover — it is all yours', icon: 'enrich' },
        { label: 'Optional monthly support, operation and optimisation', icon: 'flow' },
        { label: 'Connects to our sister products (salesbot, live demo, custom dev)', icon: 'chart' },
      ],
      cta: 'Book a consultation',
    },
  },
  founder: {
    label: 'Who is behind it',
    name: 'Petr Kubicek',
    role: 'Founder, Sales Robots s.r.o.',
    body: 'Fifteen years in B2B sales and marketing, including years in senior and leadership roles. We build sales systems on our own infrastructure — scrapers, LinkedIn automation, live demo and custom development. I do not resell someone else\'s tool; I build a system and hand it to you.',
    credentials: [
      { value: '15+', label: 'years in B2B sales' },
      { value: 'Ing.', label: 'Prague Univ. of Economics' },
      { value: '1–3 weeks', label: 'to a running system' },
    ],
  },
  salesRobots: {
    label: 'Sister service',
    text: 'Want to reach visitors who come to your site on their own? That is what',
    link: 'Sales Robots',
    suffix: 'does — on-site chat and widgets that turn a visit into an enquiry.',
  },
  cta: {
    title: 'Let\'s talk about what your system would look like.',
    subtitle:
      'On a no-strings consultation we go through your sales and your automation options — and show you what your own outbound machine could look like.',
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
        a: 'Not necessarily. One person operates the system — replying to responses and booking meetings. We build it so your team can run it even with minimal sales headcount.',
      },
    ],
  },
  about: {
    title: 'What the system does behind the scenes',
    subtitle:
      'We do not want to show off the tech. We describe exactly what the system does, so you know what you are getting into your ownership.',
    sections: [
      {
        title: 'Finding and scraping companies',
        body: 'The system searches maps, company registries (ARES) and other public sources based on your brief. No bought databases or stale lists — the data is generated in real time.',
      },
      {
        title: 'Data enrichment and website analysis',
        body: 'For each company the system adds the industry, decision-makers and contacts, and reads its website. That builds the context for personalised outreach a rep would spend tens of minutes on.',
      },
      {
        title: 'Email and LinkedIn outreach',
        body: 'The system writes a message that speaks specifically to that company, sends the email, and in parallel sends a LinkedIn connection request with a personal note and a follow-up.',
      },
      {
        title: 'Demo, CRM and handover',
        body: 'Interested companies are offered an interactive live demo, and qualified opportunities are passed into your CRM. Then we hand the whole system over to you — data and access included.',
      },
    ],
    notSaas: {
      title: 'Build once, own it for good',
      body: 'You are not buying access to an app you have to keep paying for. We build you a system tailored to your sales and hand it over — it runs on your accounts and data. You pay for the build, not an endless rental.',
    },
    team: {
      title: 'Behind the system: Sales Robots s.r.o.',
      body: 'We are a Czech company building AI sales systems. We stand on our own infrastructure — scrapers, LinkedIn automation (salesbot), live demo (salesrobots) and custom development (aidevs). SalesAgent.cz assembles these components into a system you own.',
    },
  },
  contact: {
    title: "Let's talk.",
    subtitle:
      'Set aside thirty minutes. We go through your sales and your automation options and show what your own system could look like.',
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
    tagline: 'AI sales systems you own.',
    links: {
      howItWorks: 'How we build it',
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
