import type { Translations } from './cs'

export const en: Translations = {
  nav: {
    home: 'Home',
    pricing: 'Pricing',
    salesRepCz: 'How we build it',
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
    title: 'What it costs',
    subtitle:
      'System build from €400 as a one-off. The exact figure depends on scope and integrations — we confirm it on a no-strings consultation. Operation and support are optional.',
    setup: {
      label: 'Build once, own it for good',
      description:
        'You pay to have the system built, not to rent it forever. After handover it runs on your own accounts and data. Monthly operation and support are available if you want them — but not required.',
    },
    tiers: [
      {
        name: 'AI sales system',
        monthlyLabel: 'one-off, for the build',
        price: 'from €400',
        priceNote: 'Flagship offer',
        features: [
          'Complete pipeline: scraper → enrichment → email → LinkedIn → CRM',
          'Personalised outreach and follow-up sequences',
          'Connection to one of your tools (CRM or email)',
          'Tuned on real traffic',
          'Key handover and team training',
        ],
        cta: 'Book a consultation',
        highlight: true,
      },
      {
        name: 'Operation & support',
        monthlyLabel: 'optional, monthly',
        price: 'scope-based',
        priceNote: 'Optional',
        features: [
          'We run the system for you',
          'Copy, targeting and deliverability optimisation',
          'Expansion into new channels and segments',
          'Priority support',
        ],
        cta: 'Book a consultation',
        highlight: false,
      },
      {
        name: 'Enterprise / custom',
        monthlyLabel: 'individual quote',
        price: 'custom',
        priceNote: 'Larger projects',
        features: [
          'Multi-language, multi-market campaigns',
          'Deeper ERP and internal-system integration',
          'Custom development (aidevs)',
          'Tailored live product demo',
          'Dedicated point of contact',
        ],
        cta: 'Book a consultation',
        highlight: false,
      },
    ],
    faq: [
      {
        q: 'What does "a system you own" actually mean?',
        a: 'We build the whole outbound machine and hand it over — it runs on your accounts and data, and you get documentation and training. Unlike an agency, you are not dependent on someone doing the work for you. The know-how and the process stay with you.',
      },
      {
        q: 'How long does it take to build?',
        a: 'Usually 1–3 weeks depending on scope and integrations. The process has four steps: consultation, design, build, and testing with handover.',
      },
      {
        q: 'What does "from €400" mean?',
        a: 'It is a one-off price for building the system. The final figure depends on the scope of the pipeline and how many tools we connect to. You get an exact quote after a no-strings consultation.',
      },
      {
        q: 'Do I have to pay anything monthly?',
        a: 'No. The core model is a one-off build and handover. Monthly operation, support and optimisation are optional — for when you want us to run and tune the system for you.',
      },
      {
        q: 'How is this different from an agency or tools like Apollo and Waalaxy?',
        a: 'An agency does the work for you, and when you stop you have nothing. Point tools (Apollo, Waalaxy, HubSpot) each solve just one step of the funnel. We build an integrated system across the whole funnel and hand it to you to own.',
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
    title: 'Lets talk.',
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
