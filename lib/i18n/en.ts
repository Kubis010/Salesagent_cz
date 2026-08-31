import type { Translations } from './cs'

export const en: Translations = {
  nav: {
    home: 'Home',
    pricing: 'Pricing',
    salesRepCz: 'Sales rep for Czech',
    about: 'About',
    contact: 'Contact',
    bookCall: 'Book a call',
  },
  hero: {
    badge: 'Czech market entry',
    headline: 'Your local sales partner\nfor entering the Czech market.',
    subheadline:
      'We research Czech companies, run B2B outreach, and book first meetings — so you enter the Czech market without hiring a local rep or opening an office.',
    cta: 'Book a no-strings call',
    ctaSub: 'or see how it works',
    pipelineLabel: 'Your Czech sales running',
    statsToday: 'Czech companies reached',
    statsReplies: 'meetings booked',
  },
  pipelineDemo: {
    emailFragment: 'Hi Jan — saw you supply Czech retail chains...',
    channelLabels: { search: 'Research', email: 'Email', linkedin: 'LinkedIn', reply: 'Meeting' },
    steps: [
      { label: 'Czech segment researched', detail: 'Manufacturing · 50–200 employees', channel: 'search', typing: false },
      { label: 'Company website read', detail: 'Novak Components s.r.o.', channel: 'search', typing: false },
      { label: 'Personal email written', detail: '', channel: 'email', typing: true },
      { label: 'Email sent to CEO', detail: 'Delivered · not a template', channel: 'email', typing: false },
      { label: 'Decision-maker on LinkedIn', detail: 'Jan Novak, CEO', channel: 'linkedin', typing: false },
      { label: 'Connection request sent', detail: 'Personal note attached', channel: 'linkedin', typing: false },
      { label: 'Follow-up message sent', detail: '4 days after connection', channel: 'linkedin', typing: false },
      { label: 'Meeting booked', detail: '30-min call in your calendar', channel: 'reply', typing: false },
    ],
  },
  howItWorks: {
    title: 'How your Czech sales representation works',
    subtitle:
      'You get a dedicated sales effort in the Czech market — without hiring, without an office. We do the prospecting, outreach and follow-up. You show up to meetings.',
    steps: [
      {
        number: '01',
        title: 'We define your Czech target segment',
        body: 'Together we build your ideal Czech customer profile — industry, company size, region, decision-maker role. We source companies directly from the Czech business register (ARES) and the web. No bought databases, no stale lists.',
      },
      {
        number: '02',
        title: 'We read every company\'s website',
        body: 'Before contacting anyone, we visit and read each company\'s website to understand what they actually do. This is what makes the outreach feel personal — we know their business before we reach out.',
      },
      {
        number: '03',
        title: 'We write a personal message for each company',
        body: 'Every email is written specifically for that company. Not a template with a name dropped in — a message that references what we found on their website. Czech decision-makers can tell the difference, and they respond to it.',
      },
      {
        number: '04',
        title: 'We run email and LinkedIn — you get the meetings',
        body: 'We send the email, find the decision-maker on LinkedIn, send a connection request with a personal note, and follow up. When a company is ready to talk, the meeting lands directly in your calendar.',
      },
    ],
  },
  forWhom: {
    title: 'Who this is for',
    items: [
      {
        title: 'International companies entering Czech Republic',
        body: 'You want to sell in the Czech market but do not want to hire locally or open an entity yet. We act as your local sales presence — reaching Czech companies on your behalf from day one.',
      },
      {
        title: 'Companies testing Czech demand before committing',
        body: 'Before you hire a Czech rep or set up a local entity, validate that the market wants what you sell. We run a 30–90 day market test with real outreach — you get data, not assumptions.',
      },
      {
        title: 'Teams that want meetings, not another tool',
        body: 'You do not need more software to manage. You need a qualified first meeting in your calendar with a Czech decision-maker. That is what we deliver.',
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
    title: 'More than outreach',
    subtitle:
      'We build the sales infrastructure — from first contact to closed deal. Custom, not off-the-shelf.',
    automation: {
      badge: 'Custom development',
      title: 'Custom sales automation',
      body: 'We design and build systems that fit your exact processes. We automate repetitive steps, connect tools and data, and build dashboards your leadership actually reads.',
      examples: [
        { label: 'CRM connected to LinkedIn and email tooling', icon: 'connect' },
        { label: 'Automatic contact enrichment from public sources', icon: 'enrich' },
        { label: 'Automated qualification of inbound leads and CRM routing', icon: 'ai' },
        { label: 'Follow-up sequences with conditional logic', icon: 'flow' },
        { label: 'Sales dashboards and real-time reporting', icon: 'chart' },
        { label: 'Notifications and escalations based on opportunity activity', icon: 'alert' },
      ],
      cta: 'Discuss automation',
    },
    agency: {
      badge: 'Outsourcing',
      title: 'External sales agency',
      body: 'We take on sales activities as your external sales department — from the first touch to handing prepared opportunities to your team.',
      examples: [
        { label: 'Full management of the outbound process', icon: 'flow' },
        { label: 'Preparation and handling of first sales calls', icon: 'connect' },
        { label: 'Handing qualified opportunities directly into your CRM', icon: 'enrich' },
        { label: 'Ongoing results reporting and optimisation', icon: 'chart' },
      ],
      cta: 'Book a call',
    },
  },
  founder: {
    label: 'Who is behind it',
    name: 'Petr Kubicek',
    role: 'Founder, Sales Robots s.r.o.',
    body: 'Fifteen years in B2B sales and marketing, including years in senior and leadership roles. I build the outreach system on my own infrastructure — I run a service I stand behind, not a resold tool.',
    credentials: [
      { value: '15+', label: 'years in B2B sales' },
      { value: 'Ing.', label: 'Prague Univ. of Economics' },
      { value: '48 h', label: 'to first outreach' },
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
      'On a 30-minute call we will go through your product, your target Czech segment, and show you exactly what the first outreach wave would look like.',
    primary: 'Book a call',
    secondary: 'Send an email',
  },
  pricing: {
    title: 'Sales Representation Pricing',
    subtitle:
      'Dedicated B2B sales effort in the Czech market — without hiring, without an office. Start within one week.',
    setup: {
      label: 'No long-term commitment',
      description:
        'Most clients start with a 30–90 day market test to validate demand before scaling. Month-to-month, cancel anytime. No setup fee on full-time engagements.',
    },
    tiers: [
      {
        name: 'Part-time',
        monthlyLabel: 'per month (excl. VAT)',
        price: 'from €2,800',
        priceNote: 'Market test',
        features: [
          '½ time dedicated sales effort',
          '150–250 companies researched & contacted / month',
          'Email + LinkedIn outreach',
          'Personalised messaging per company',
          'Weekly pipeline report',
          'Start within 1 week',
        ],
        cta: 'Book a call',
        highlight: false,
      },
      {
        name: 'Full-time',
        monthlyLabel: 'per month (excl. VAT)',
        price: 'from €5,000',
        priceNote: 'Most popular',
        features: [
          'Full dedicated sales effort',
          '300–500 companies researched & contacted / month',
          'Email + LinkedIn + warm follow-up sequences',
          'Dedicated sales manager',
          'Weekly pipeline review call',
          'CRM integration & handover',
          'Start within 1 week — no hiring needed',
        ],
        cta: 'Book a call',
        highlight: true,
      },
    ],
    faq: [
      {
        q: 'How quickly can we start?',
        a: 'Within one week. There is no hiring process, no probation period, no office to set up. We onboard, define your ideal customer and launch the first outreach in days.',
      },
      {
        q: 'What is included in the monthly fee?',
        a: 'Company research, personalised outreach (email + LinkedIn), follow-up sequences, weekly reporting, and a dedicated point of contact. No hidden costs — what you see is what you pay.',
      },
      {
        q: 'Is there a long-term contract?',
        a: 'No. We work month-to-month with no annual lock-in. Most clients start with a 30–90 day market test to validate demand, then decide whether to continue or scale.',
      },
      {
        q: 'What is the difference between part-time and full-time?',
        a: 'Volume and pace. Part-time suits testing one market segment or running a pilot alongside your existing sales. Full-time is for serious Czech market entry where speed matters.',
      },
      {
        q: 'Do I need a local entity or office?',
        a: 'No. We act as your local sales presence in the Czech Republic. You get meetings booked into your calendar — no entity, no local hire, no office required.',
      },
    ],
  },
  about: {
    title: 'What happens behind the scenes',
    subtitle:
      'We do not want to show off the tech. We describe exactly what the service does, so you know what you are paying for.',
    sections: [
      {
        title: 'Finding companies',
        body: 'The system searches maps, company registries and other public sources based on your brief. No bought databases or stale contact lists.',
      },
      {
        title: 'Reading the company website',
        body: 'Before an email is written, the system downloads and reads each company website. The result is a summary of what they do and what to build the outreach on.',
      },
      {
        title: 'Writing a personal message',
        body: 'Based on the website analysis, a message is written that speaks specifically to that company. Not "Dear Sir/Madam" but "I noticed you focus on...".',
      },
      {
        title: 'LinkedIn and follow-up',
        body: 'Alongside the email, the system sends a LinkedIn connection request with a personal note and follows up politely after a set interval.',
      },
    ],
    notSaas: {
      title: 'It is not a tool to rent',
      body: 'You are not buying access to an app you have to operate yourself. It is a service — we set it up, launch it and keep tuning it for you. You pay for results, not another login.',
    },
    team: {
      title: 'Behind the service: Sales Robots s.r.o.',
      body: 'We are a Czech company building automated sales systems. SalesAgent.cz is our service for actively reaching companies. Sales Robots (salesrobots.cz) handles the opposite direction — visitors who come to your site on their own.',
    },
  },
  contact: {
    title: 'Lets talk.',
    subtitle:
      'Set aside thirty minutes. We will go through your market and field and show what the outreach would look like for you specifically.',
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
    tagline: 'Actively reaching companies, as a service.',
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
