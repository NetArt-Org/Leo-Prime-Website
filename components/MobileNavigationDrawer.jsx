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
          <div className="flex" style={{ gap: "20px",display:"flex",margin:"20px 20px 20px 0" }}>
            <button class="plasmic_default__all plasmic_default__button root_reset_ctBdLGgruJ63zzSx8ZZKZu plasmic_default_styles plasmic_mixins plasmic_tokens Button2__root__t2Tq1 gradient-border Button2__roottype_border__t2Tq1SPhhO __wab_instance Homepage__button2__cqMfX" type="button"><div class="__wab_flex-container ρfc"><div class="plasmic_default__all plasmic_default__div Button2__contentContainer__i2Ar2"><span class="__wab_slot ρs Button2__slotTargetChildren__kqVkt"><div class="plasmic_default__all plasmic_default__div __wab_text Homepage__text___43BsT">Sign in </div></span></div></div></button>
            <button class="plasmic_default__all plasmic_default__button root_reset_ctBdLGgruJ63zzSx8ZZKZu plasmic_default_styles plasmic_mixins plasmic_tokens Button2__root__t2Tq1 gradient-banner-button  Button2__roottype_gradientBannerBtn__t2Tq1Lm9L3 __wab_instance Homepage__button2___2ETMv" type="button"><div class="__wab_flex-container ρfc"><div class="plasmic_default__all plasmic_default__div Button2__contentContainer__i2Ar2"><span class="__wab_slot ρs Button2__slotTargetChildren__kqVkt Button2__slotTargetChildrentype_gradientBannerBtn__kqVktLm9L3"><div class="plasmic_default__all plasmic_default__div __wab_text Homepage__text__dtbLn">Register</div></span></div></div></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationDrawer;
