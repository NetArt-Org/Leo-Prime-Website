"use client"; // Needed for Next.js App Router

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import DropdownContent from "./DropdownContent";
import { ChevronDown, ChevronUp } from "lucide-react";

const MenuItem = ({ label, href, children, onToggle, active, setIsDrawerOpen, setIsDropdownOpen,activeMenu }) => {
  const pathname = usePathname();

  const handleClick = () => {
    document.activeElement?.blur();
  };
  return (
    <>
      <li
        onMouseEnter={() => children && setIsDropdownOpen(true)}
        onMouseLeave={() => children && setIsDropdownOpen(false)}
      >
        <div className={`nav_item_content ${activeMenu == label ? "menu-active" : "main-menu"}`}>
          <Link
            href={href}
            className={`${pathname === href ? "active" : ""}`}
            // className={pathname === href ? "active" : "" }
            onClick={() => {
              setIsDrawerOpen && setIsDrawerOpen(false);
              handleClick();
            }}
          >
            {label}
          </Link>
          {children && (
            <button
              className="md:hidden"
              onClick={onToggle}
              aria-label="Toggle dropdown"
              aria-haspopup="menu"
              aria-expanded={active ? "true" : "false"}
            >
              {active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          )}
        </div>
        {children && (
          <div
            role="menu"
            className={`dropdown ${active ? "h-auto" : "h-0 overflow-hidden md:h-auto"}`}
          >
            <Container>
              <DropdownContent
                submenuscontent={children}
                setIsDrawerOpen={setIsDrawerOpen}
                handleClick={handleClick}
              />
              <div className="contactSection" >
                <a className="socialLinks" href="#" target="_blank">Contact<img src="/arrow-up-right-03.svg" alt="Arrow" /></a>
                <a className="socialLinks" href="#" target="_blank">Mail Id<img src="/arrow-up-right-03.svg" alt="Arrow" /></a>
                <a className="socialLinks" href="#" target="_blank">Instagram<img src="/arrow-up-right-03.svg" alt="Arrow" /></a>
                <a className="socialLinks" href="#" target="_blank">Twitter<img src="/arrow-up-right-03.svg" alt="Arrow" /></a>
                <a className="socialLinks" href="#" target="_blank">Facebook<img src="/arrow-up-right-03.svg" alt="Arrow" /></a>
                <a className="socialLinks" href="#" target="_blank">LinkedIn<img src="/arrow-up-right-03.svg" alt="Arrow" /></a>
              </div>
            </Container>
          </div>
        )}
      </li>
    </>
  );
};

export default MenuItem;
