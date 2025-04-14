// export const menuData = [
//   { label: "Home", href: "/" },
//   {
//     label: "Trading",
//     href: "#",
//     children: [
//       {
//         heading: "Accounts",
//         submenu: [
//           { label: "Cent Account", href: "/cent-account" },
//           { label: "Classic Account", href: "/classic-account" },
//           { label: "Pro Account", href: "/pro-account" },
//           { label: "ECN Account", href: "/ecn-account" },
//           { label: "Demo Account", href: "/demo-account" }
//         ]
//       },
//       {
//         heading: "Conditions",
//         submenu: [
//           { label: "Margin & Leverage Rules", href: "/margin-leverage-rules" },
//           { label: "Deposit & Withdrawals", href: "/deposit-and-withdraw" }
//         ]
//       },
//       {
//         heading: "Promotions",
//         submenu: [
//           { label: "50% Welcome Bonus", href: "#" },
//         ]
//       }
//     ]
//   },
//   {
//     label: "Markets",
//     href: "#",
//     children: [
//       {
//         heading: "Trading Instruments",
//         submenu: [
//           { label: "Forex", href: "/trading-instrument-forex" },
//           { label: "Spot Metals", href: "/trading-instruments-spot-metal" },
//           { label: "Stocks", href: "/trading-instruments-stocks" },
//           { label: "Indices", href: "/trading-instruments-indices" },
//           { label: "Crypto", href: "/trading-instruments-cryptocurrencies" },
//           { label: "Energies", href: "/trading-instruments-energies" }
//         ]
//       }
//     ]
//   },
//   {
//     label: "Platform",
//     href: "#",
//     children: [
//       {
//         heading: "Desktop",
//         submenu: [
//           { label: "Meta Trader 4", href: "/trading-platform" },
//           { label: "MT4 Mobile", href: "/trading-platform" },
//         ]
//       },
//     ]
//   },
//   {
//     label: "Tools",
//     href: "#",
//     children: [
//       {
//         heading: "Trading Tools",
//         submenu: [
//           { label: "Technical Analysis", href: "https://analysis.leoprime.com/" },
//           { label: "Economic Calendar", href: "/economic-calendar" },
//           { label: "Forex Calculator", href: "/forex-calculator" },
//           { label: "Client Sentiment", href: "/client-sentiment" },
//         ]
//       }
//     ]
//   },
//   {
//     label: "Company",
//     href: "#",
//     children: [
//       {
//         heading: "About",
//         submenu: [
//           { label: "About Us", href: "/about-us" },
//           { label: "Why Leoprime", href: "/why-leoprime" },
//           { label: "Company News", href: "https://news.leoprime.com/" },
//           { label: "Contact Us", href: "/contact-us" }
//         ]
//       },
//       {
//         heading: "Corporate",
//         submenu: [
//           { label: "Safety of Funds", href: "#" },
//           { label: "Legal Documents", href: "/legal-doc" }
//         ]
//       }
//     ]
//   },
//   { label: "Partner", href: "/introducing-broker" }
// ];

export const menuData = {
  home: {
    label: "Home",
    href: "/"
  },
  trading: {
    label: "Trading",
    href: "#",
    children: [
      {
        heading: "Accounts",
        submenu: [
          { label: "Cent Account", href: "/cent-account" },
          { label: "Classic Account", href: "/classic-account" },
          { label: "Pro Account", href: "/pro-account" },
          { label: "ECN Account", href: "/ecn-account" },
          { label: "Demo Account", href: "/demo-account" }
        ]
      },
      {
        heading: "Conditions",
        submenu: [
          { label: "Margin & Leverage Rules", href: "/margin-leverage-rules" },
          { label: "Deposit & Withdrawals", href: "/deposit-and-withdraw" }
        ]
      },
      {
        heading: "Promotions",
        submenu: [
          { label: "50% Welcome Bonus", href: "#" }
        ]
      }
    ]
  },
  markets: {
    label: "Markets",
    href: "#",
    children: [
      {
        heading: "Trading Instruments",
        submenu: [
          { label: "Forex", href: "/trading-instrument-forex" },
          { label: "Spot Metals", href: "/trading-instruments-spot-metal" },
          { label: "Stocks", href: "/trading-instruments-stocks" },
          { label: "Indices", href: "/trading-instruments-indices" },
          { label: "Crypto", href: "/trading-instruments-cryptocurrencies" },
          { label: "Energies", href: "/trading-instruments-energies" }
        ]
      }
    ]
  },
  platform: {
    label: "Platform",
    href: "#",
    children: [
      {
        heading: "Desktop",
        submenu: [
          { label: "Meta Trader 4", href: "/trading-platform" },
          { label: "MT4 Mobile", href: "/trading-platform" }
        ]
      }
    ]
  },
  tools: {
    label: "Tools",
    href: "#",
    children: [
      {
        heading: "Trading Tools",
        submenu: [
          { label: "Technical Analysis", href: "https://analysis.leoprime.com/" },
          { label: "Economic Calendar", href: "/economic-calendar" },
          { label: "Forex Calculator", href: "/forex-calculator" },
          { label: "Client Sentiment", href: "/client-sentiment" }
        ]
      }
    ]
  },
  company: {
    label: "Company",
    href: "#",
    children: [
      {
        heading: "About",
        submenu: [
          { label: "About Us", href: "/about-us" },
          { label: "Why Leoprime", href: "/why-leoprime" },
          { label: "Company News", href: "https://news.leoprime.com/" },
          { label: "Contact Us", href: "/contact-us" }
        ]
      },
      {
        heading: "Corporate",
        submenu: [
          { label: "Safety of Funds", href: "#" },
          { label: "Legal Documents", href: "/legal-doc" }
        ]
      }
    ]
  },
  partner: {
    label: "Partner",
    href: "/introducing-broker"
  }
};

export const headerConfig = {
  logo: {
    imageSrc: "/logo.svg",
    text: "leoprime",
    link: "/",
  },
  authLinks: {
    signIn: {
      label: "Sign in",
      href: "https://www.leoprime.com/user/",
    },
    register: {
      label: "Register",
      href: "https://www.leoprime.com/register",
    },
  },
  appPromo: {
    text: "Trade anywhere, anytime from our mobile app",
    links: [
      {
        href: "https://www.leoprime.com/register",
        imageSrc: "https://site-assets.plasmic.app/94759ca717a1bc5ed407e20bac348d07.svg",
        alt: "App Store",
      },
      {
        href: "https://www.leoprime.com/register",
        imageSrc: "https://site-assets.plasmic.app/af1036e1db328cb0ff9b70b5dc8df44c.svg",
        alt: "Google Play",
      },
    ],
  },
  contactSection: [
    {
      label: "Contact",
      href: "tel:+971(0)44470023",
      icon: "/arrow-up-right-03.svg",
    },
    {
      label: "Mail Id",
      href: "mailto:support@leoprime.com",
      icon: "/arrow-up-right-03.svg",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/leoprimefx/",
      icon: "/arrow-up-right-03.svg",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/LeoPrimeFx",
      icon: "/arrow-up-right-03.svg",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/LeoPrimeForexBrokers/",
      icon: "/arrow-up-right-03.svg",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/leo-prime",
      icon: "/arrow-up-right-03.svg",
    },
  ],
};

