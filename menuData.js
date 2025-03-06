export const menuData = [
  { label: "Home", href: "/" },
  {
    label: "Trading",
    href: "#",
    children: [
      {
        heading: "Accounts",
        submenu: [
          { label: "Cent Account", href: "https://www.leoprime.com/cent-account" },
          { label: "Classic Account", href: "/classic-account" },
          { label: "Pro Account", href: "https://www.leoprime.com/pro-account" },
          { label: "ECN Account", href: "https://www.leoprime.com/ecn-account" },
          { label: "Demo Account", href: "/demo-account" }
        ]
      },
      {
        heading: "Conditions",
        submenu: [
          { label: "Margin & Leverage Rules", href: "https://www.leoprime.com/margin-leverage-rules" },
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
          { label: "Forex", href: "/forex-trading" },
          { label: "Commodities", href: "#" },
          { label: "Stocks", href: "https://www.leoprime.com/trading-instruments-stocks" },
          { label: "Indices", href: "https://www.leoprime.com/trading-instruments-indices" },
          { label: "Crypto", href: "#" },
          { label: "Energies", href: "https://www.leoprime.com/trading-instruments-energies" }
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
          { label: "Technical Analysis", href: "#" },
          { label: "Economic Calendar", href: "https://www.leoprime.com/economic-calendar" },
          { label: "Trading Calculator", href: "#" },
          { label: "Client Sentiment", href: "https://www.leoprime.com/client-sentiment" },
          { label: "VPS Hosting", href: "https://www.leoprime.com/vps-hosting" }
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
