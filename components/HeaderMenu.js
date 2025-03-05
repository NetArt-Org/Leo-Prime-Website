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
                        { label: "Cent Account", href: "/trading/cent-account" },
                        { label: "Classic Account", href: "/trading/classic-account" },
                        { label: "Pro Account", href: "/trading/pro-account" },
                        { label: "ECN Account", href: "/trading/ecn-account" },
                        { label: "Demo Account", href: "/trading/demo-account" }
                    ]
                },
                {
                    title: "Conditions",
                    items: [
                        { label: "Margin & Leverage Rules", href: "/trading/margin-rules" },
                        { label: "Deposit & Withdrawals", href: "/trading/deposit" }
                    ]
                },
                {
                    title: "Promotions",
                    items: [
                        { label: "50% Welcome Bonus", href: "/trading/welcome-bonus" },
                        { label: "Demo Contest", href: "/trading/demo-contest" }
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
                        { label: "Forex", href: "/markets/forex" },
                        { label: "Commodities", href: "/markets/commodities" },
                        { label: "Stocks", href: "/markets/stocks" },
                        { label: "Indices", href: "/markets/indices" },
                        { label: "Crypto", href: "/markets/crypto" },
                        { label: "Energies", href: "/markets/energies" }
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
                        { label: "Meta trader 4", href: "/trading/cent-account" },
                    ]
                },
                {
                    title: "Mobile",
                    items: [
                        { label: "Meta trader 4 Mobile", href: "/trading/margin-rules" },
                        { label: "Leo all in one app", href: "/trading/deposit" }
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
                        { label: "Technical analysis", href: "/markets/forex" },
                        { label: "Economic Calendar", href: "/markets/commodities" },
                        { label: "Trading Calculator", href: "/markets/stocks" },
                        { label: "Client Sentiment", href: "/markets/indices" },
                        { label: "VPS Hosting", href: "/markets/crypto" },
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
                        { label: "About us", href: "/trading/cent-account" },
                        { label: "Why leoprime", href: "/trading/cent-account" },
                        { label: "Company news", href: "/trading/cent-account" },
                        { label: "Contact us", href: "/trading/cent-account" },
                    ]
                },
                {
                    title: "Corporate",
                    items: [
                        { label: "Safety of funds", href: "/trading/margin-rules" },
                        { label: "Legal documents", href: "/trading/deposit" }
                    ]
                },
            ]
        },
        { label: "Partner", href: "/partner", isActive: activeMenu === "Partner" }
    ];

    const handleMenuEnter = (menuLabel) => {
        setHoveredMenu(menuLabel);
    };

    const handleMenuLeave = () => {
        setHoveredMenu(null);
    };
    console.log("HOVERED MEU",hoveredMenu)

    return (
        <div className={styles.Container} style={hoveredMenu && hoveredMenu !== "Home" && hoveredMenu !== "Partner" ? { background: "#F5F5F5", height: "300px" } : { background: "transparent" }}>
            <img style={{ width: "50px", height: "50px" }} src="https://site-assets.plasmic.app/84548756506ff2faa88b11aecfc0b44c.svg" />
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
                            onMouseLeave={handleMenuLeave}
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
