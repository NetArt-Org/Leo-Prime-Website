"use client"; // Required for useState, useEffect in App Router

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import MegaMenu from "./MegaMenu";
import Link from "next/link";

const MobileNavigationDrawer = ({ isDrawerOpen, setIsDrawerOpen, drawerButtonRef,authLinks,menuData,appPromo,contactSection }) => {
  const [clicked, setClicked] = useState(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isDrawerOpen && drawerRef.current) {
      drawerRef.current.focus();
    }
  }, [isDrawerOpen]);

  const handleToggle = (index) => {
    setClicked(clicked === index ? null : index);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsDrawerOpen(false);
      drawerButtonRef.current?.focus();
    }
  };

  return (
    <div
      className="mobile_navigation"
      ref={drawerRef}
      tabIndex={isDrawerOpen ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
      {isDrawerOpen && (
        <div
          className="backdrop"
          onClick={() => {
            setIsDrawerOpen(false);
            drawerButtonRef.current?.focus();
          }}
        ></div>
      )}

      <div className={`drawer_content ${isDrawerOpen ? "active" : ""}`}>
        <div className="close_drawer">
          <button
            onClick={() => {
              setIsDrawerOpen(false);
              drawerButtonRef.current?.focus();
            }}
          >
            <X size={30} />
          </button>
        </div>
        <div>
          <MegaMenu appPromo={appPromo} handleToggle={handleToggle} clicked={clicked} setIsDrawerOpen={setIsDrawerOpen} menuData={menuData} contactSection={contactSection}/>
          <div className="flex" style={{ gap: "5px", display: "flex", margin: "20px 20px 20px 0" }}>
            <Link href={authLinks.signIn.href} className='header-btn gradient-border'>
              {authLinks.signIn.label}
            </Link>
            <Link href={authLinks.register.href} className='header-btn gradient-banner-button'>
              {authLinks.register.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationDrawer;
