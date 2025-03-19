export const menuData = [
  { label: "Home", href: "/" },
  {
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
          { label: "50% Welcome Bonus", href: "https://www.leoprime.com/50bonus" },
          { label: "Demo Contest", href: "https://www.leoprime.com/contest" }
        ]
      }
    ]
  },
  {
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
  {
    label: "Platform",
    href: "#",
    children: [
      {
        heading: "Desktop",
        submenu: [
          { label: "Meta Trader 4", href: "/trading-platform" }
        ]
      },
      {
        heading: "Mobile",
        submenu: [
          { label: "Meta Trader 4 Mobile", href: "#" },
          { label: "Leo All-in-One App", href: "#" }
        ]
      }
    ]
  },
  {
    label: "Tools",
    href: "#",
    children: [
      {
        heading: "Trading Tools",
        submenu: [
          { label: "Technical Analysis", href: "/technical-analysis" },
          { label: "Economic Calendar", href: "/economic-calendar" },
          { label: "Forex Calculator", href: "/forex-calculator" },
          { label: "Client Sentiment", href: "/client-sentiment" },
          { label: "VPS Hosting", href: "/vps-hosting" }
        ]
      }
    ]
  },
  {
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
          { label: "Legal Documents", href: "#" }
        ]
      }
    ]
  },
  { label: "Partner", href: "/introducing-broker" }
];
