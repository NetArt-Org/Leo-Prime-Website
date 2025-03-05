import { useState } from "react";
import styles from "./HeaderMenu.module.css";
import Link from "next/link";

const HeaderMenu = ({ activeMenu, children }) => {
    const [hoveredMenu, setHoveredMenu] = useState(null);

    const menuData = [
        { label: "Home", href: "/", isActive: activeMenu === "Home" },
        {
            label: "Trading",
            isActive: activeMenu === "Trading",
            submenu: [
                {
                    title: "Accounts",
                    items: [
                        { label: "Cent Account", href: "https://www.leoprime.com/cent-account" },
                        { label: "Classic Account", href: "/classic-account" },
                        { label: "Pro Account", href: "https://www.leoprime.com/pro-account" },
                        { label: "ECN Account", href: "https://www.leoprime.com/ecn-account" },
                        { label: "Demo Account", href: "/demo-account" }
                    ]
                },
                {
                    title: "Conditions",
                    items: [
                        { label: "Margin & Leverage Rules", href: "https://www.leoprime.com/margin-leverage-rules" },
                        { label: "Deposit & Withdrawals", href: "/deposit-and-withdraw" }
                    ]
                },
                {
                    title: "Promotions",
                    items: [
                        { label: "50% Welcome Bonus", href: "https://www.leoprime.com/50bonus" },
                        { label: "Demo Contest", href: "https://www.leoprime.com/contest" }
                    ]
                }
            ]
        },
        {
            label: "Markets",
            isActive: activeMenu === "Markets",
            submenu: [
                {
                    items: [
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
            isActive: activeMenu === "Platform",
            submenu: [
                {
                    title: "Desktop",
                    items: [
                        { label: "Meta trader 4", href: "/trading-platform" },
                    ]
                },
                {
                    title: "Mobile",
                    items: [
                        { label: "Meta trader 4 Mobile", href: "#" },
                        { label: "Leo all in one app", href: "#" }
                    ]
                },
            ]
        },
        {
            label: "Tools",
            isActive: activeMenu === "Tools",
            submenu: [
                {
                    items: [
                        { label: "Technical analysis", href: "#" },
                        { label: "Economic Calendar", href: "https://www.leoprime.com/economic-calendar" },
                        { label: "Trading Calculator", href: "#" },
                        { label: "Client Sentiment", href: "https://www.leoprime.com/client-sentiment" },
                        { label: "VPS Hosting", href: "https://www.leoprime.com/vps-hosting" },
                    ]
                }
            ]
        },
        {
            label: "Company",
            isActive: activeMenu === "Company",
            submenu: [
                {
                    title: "About",
                    items: [
                        { label: "About us", href: "/about-us" },
                        { label: "Why leoprime", href: "/why-leoprime" },
                        { label: "Company news", href: "https://news.leoprime.com/" },
                        { label: "Contact us", href: "/contact-us" },
                    ]
                },
                {
                    title: "Corporate",
                    items: [
                        { label: "Safety of funds", href: "#" },
                        { label: "Legal documents", href: "#" }
                    ]
                },
            ]
        },
        { label: "Partner", href: "/introducing-broker", isActive: activeMenu === "Partner" }
    ];

    const handleMenuEnter = (menuLabel) => {
        clearTimeout(window.menuTimeout); // Clear any previous timeout
        setHoveredMenu(menuLabel);
    };

    const handleMenuLeave = () => {
        window.menuTimeout = setTimeout(() => {
            setHoveredMenu(null);
        }, 100); // Small delay (200ms) to prevent accidental closing
    };


    return (
        <div className={styles.Container} style={hoveredMenu && hoveredMenu !== "Home" && hoveredMenu !== "Partner" ? { background: "#F5F5F5", } : { background: "transparent" }}>
            <Link href={"/"}><img style={{ width: "50px", height: "50px" }} src="https://site-assets.plasmic.app/84548756506ff2faa88b11aecfc0b44c.svg" /></Link>
            <div className={styles.HeaderMenuFlex}>
                <div className={styles.headerMenu}>
                    <div className={styles.menuContainer}>
                        {menuData.map((menuItem, index) => (
                            <div
                                key={index}
                                className={`${styles.menuItem} ${menuItem.submenu ? styles.hasSubmenu : ""} ${menuItem.isActive ? styles.active : ""}`}
                                onMouseEnter={() => handleMenuEnter(menuItem.label)}
                                onMouseLeave={handleMenuLeave}
                            >
                                <Link href={menuItem.href || "#"} className={styles.menuLink}>
                                    <span className={menuItem.isActive ? styles.activeText : ""}>
                                        {menuItem.label}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Submenu Container */}
                    {menuData
                        .filter((menuItem) => menuItem.submenu && hoveredMenu === menuItem.label)
                        .map((menuItem, index) => (
                            <div
                                key={index}
                                className={styles.megaMenu}
                                onMouseEnter={() => handleMenuEnter(menuItem.label)}
                            // onMouseLeave={handleMenuLeave}
                            >
                                {/* Submenu Section */}
                                <div className={styles.submenuSection}>
                                    {menuItem.submenu.map((sub, subIndex) => (
                                        <div key={subIndex} className={styles.megaColumn}>
                                            <h3>{sub.title}</h3>
                                            <ul>
                                                {sub.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <Link href={item.href} className={item.href === activeMenu ? styles.active : ""}>
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                {/* Fixed Column (Always last) */}
                                <div className={`${styles.megaColumn} ${styles.fixedColumn}`}>
                                    <p>Trade anywhere, anytime from our mobile app</p>
                                    <img src="https://site-assets.plasmic.app/94759ca717a1bc5ed407e20bac348d07.svg" alt="Mobile App" />
                                    <img src="https://site-assets.plasmic.app/af1036e1db328cb0ff9b70b5dc8df44c.svg" alt="Mobile App" />
                                </div>

                                {/* Contact Section */}
                                <div className={styles.contactSection}>
                                    <div className={styles.socialLinks}>
                                        <a href="#" target="_blank">Contact<img src="/arrow-up-right-03.svg" alt="Arrow" /></a>
                                        <a href="#" target="_blank">Mail Id<img src="/arrow-up-right-03.svg" alt="Arrow" /></a>
                                        <a href="#" target="_blank">Instagram<img src="/arrow-up-right-03.svg" alt="Arrow" /></a>
                                        <a href="#" target="_blank">Twitter<img src="/arrow-up-right-03.svg" alt="Arrow" /></a>
                                        <a href="#" target="_blank">Facebook<img src="/arrow-up-right-03.svg" alt="Arrow" /></a>
                                        <a href="#" target="_blank">LinkedIn<img src="/arrow-up-right-03.svg" alt="Arrow" /></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                {/* Button */}
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;
