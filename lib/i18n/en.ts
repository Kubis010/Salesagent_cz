import type { Translations } from './cs'

export const en: Translations = {
  nav: {
    howItWorks: 'How it works',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
    bookCall: 'Book a call',
  },
  hero: {
    badge: 'AI sales agent',
    headline: 'AI sales agent\nthat sells for you.',
    subheadline:
      'We automate B2B contact prospecting and delegate cold emailing to AI. The system reads each company website and sends personalised cold emails and LinkedIn messages. Only the ones who show real interest reach you.',
    cta: 'Book a no-strings call',
    ctaSub: 'or see how it works',
    pipelineLabel: 'System running live',
    statsToday: 'reached today',
    statsReplies: 'replies',
  },
  pipelineDemo: {
    emailFragment: 'Hi — I noticed you focus on...',
    channelLabels: { search: 'Search', email: 'Email', linkedin: 'LinkedIn', reply: 'Reply' },
    steps: [
      { label: 'Company found', detail: 'Novak Construction Ltd.', channel: 'search', typing: false },
      { label: 'Website analysed', detail: 'AI content analysis', channel: 'search', typing: false },
      { label: 'Email written', detail: '', channel: 'email', typing: true },
      { label: 'Email sent', detail: 'Delivered', channel: 'email', typing: false },
      { label: 'Contact found on LinkedIn', detail: 'Jan Novak, managing director', channel: 'linkedin', typing: false },
      { label: 'Profile visited', detail: 'Profile viewed', channel: 'linkedin', typing: false },
      { label: 'Invitation sent', detail: 'Connection request', channel: 'linkedin', typing: false },
      { label: 'Message 1 sent', detail: 'After connection accepted', channel: 'linkedin', typing: false },
      { label: 'Message 2 sent', detail: 'Follow-up after 4 days', channel: 'linkedin', typing: false },
      { label: 'Reply received', detail: 'Interested in a call', channel: 'reply', typing: false },
    ],
  },
  howItWorks: {
    title: 'How it works in practice',
    subtitle:
      'You are not hiring software. You are hiring a complete B2B process that finds companies, reads their websites and generates meetings on autopilot.',
    steps: [
      {
        number: '01',
        title: 'Precise targeting, no databases',
        body: 'Together we define your ideal customer (industry, size, region). Our system then actively searches registries and the web to find exact matches. No stale bought databases — fresh, relevant contacts in real time.',
      },
      {
        number: '02',
        title: 'AI analysis of every website',
        body: 'Before we contact anyone, our AI visits and reads the company website to understand exactly what they do. This gives us the context for a fully personalised message — one a regular sales rep would spend tens of minutes writing.',
      },
      {
        number: '03',
        title: 'Hyper-personalised outreach',
        body: 'For each decision-maker we generate a unique email. Not a template with a name dropped in — the message directly references what we found on their website. It feels natural, avoids spam filters and generates far more replies.',
      },
      {
        number: '04',
        title: 'LinkedIn and email on autopilot',
        body: 'The system sends emails and in parallel finds contacts on LinkedIn, sends a connection request with a personal note, and follows up politely after a few days. You only step in when a company replies and wants a meeting.',
      },
    ],
  },
  forWhom: {
    title: 'Who it fits',
    items: [
      {
        title: 'Companies without their own rep',
        body: 'You need to reach new companies regularly but hiring a full-time salesperson does not make sense yet. This starts the outreach without recruiting.',
      },
      {
        title: 'Companies entering the Czech and Slovak market',
        body: 'We write in the language and context of the local market. No agency, no months of ramp-up.',
      },
      {
        title: 'Teams that want time to close',
        body: 'Your reps should focus on meetings and deals. Finding companies and the first touch — leave that to us.',
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
        { label: 'AI qualification of inbound leads and CRM routing', icon: 'ai' },
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
    title: 'Lets get specific.',
    subtitle:
      'On a 30-minute call we will go through your market and show what the outreach would look like in your field.',
    primary: 'Book a call',
    secondary: 'Send an email',
  },
  pricing: {
    title: 'Pricing',
    subtitle:
      'A one-time campaign setup plus a monthly running fee. The exact figure depends on scope and industry — which is why we set it on a call.',
    setup: {
      label: 'One-time setup',
      description:
        'The upfront work: defining your ideal customer, connecting tools, first message copy and the technical setup of the whole campaign.',
    },
    tiers: [
      {
        name: 'Start',
        monthlyLabel: 'per month (excl. VAT)',
        price: 'from €149',
        priceNote: 'Get in touch',
        features: [
          'Up to 200 companies reached / month',
          'Email outreach',
          'Monthly results overview',
          'Reply notifications',
        ],
        cta: 'Book a call',
        highlight: false,
      },
      {
        name: 'Grow',
        monthlyLabel: 'per month (excl. VAT)',
        price: 'from €239',
        priceNote: 'Includes LinkedIn automation',
        features: [
          'Up to 500 companies reached / month',
          'Email and LinkedIn outreach',
          'Testing of multiple message versions',
          'Weekly results overview',
          'Priority support',
        ],
        cta: 'Book a call',
        highlight: true,
      },
      {
        name: 'Scale',
        monthlyLabel: 'per month (excl. VAT)',
        price: 'from €449',
        priceNote: 'Everything included',
        features: [
          'No cap on companies',
          'Multiple outreach channels',
          'Your own segmentation',
          'A dedicated contact with us',
          'Integration with your CRM',
        ],
        cta: 'Book a call',
        highlight: false,
      },
    ],
    faq: [
      {
        q: 'How quickly can we start?',
        a: 'After we agree and complete setup (about two working days), the first messages go out within 48 hours.',
      },
      {
        q: 'What do those emails look like?',
        a: 'For each company the system reads its website and writes a message based on what it actually does. Not a template with a name dropped in.',
      },
      {
        q: 'Is it GDPR compliant?',
        a: 'We reach business contacts on the basis of legitimate interest. Every message includes an opt-out.',
      },
      {
        q: 'What exactly do I get?',
        a: 'An overview with numbers (delivery, opens, replies) and a list of companies that showed interest — to your inbox or straight into your CRM.',
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
