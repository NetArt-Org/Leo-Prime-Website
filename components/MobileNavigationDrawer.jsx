"use client"; // Required for useState, useEffect in App Router

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import MegaMenu from "./MegaMenu";

const MobileNavigationDrawer = ({ isDrawerOpen, setIsDrawerOpen, drawerButtonRef }) => {
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
          <MegaMenu handleToggle={handleToggle} clicked={clicked} setIsDrawerOpen={setIsDrawerOpen} />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationDrawer;
