import { useState, useRef } from 'react';
import Link from 'next/link';
import Container from './Container';
import UserProfile from './UserProfile';
import { AlignJustify } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileNavigationDrawer from './MobileNavigationDrawer';

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const drawerButtonRef = useRef(null);
console.log("SET IS DROPDOWN",isDropdownOpen)
  return (
    <header className={`nav__header_mobile md:nav__header  ${isDropdownOpen ? "header-gray" :null}`}>
      <Container>
        <div className="toolbar">
          <button
            ref={drawerButtonRef}
            className="menu_icon md:hidden"
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(true)}
          >
            {/* Mobile Hamburger menu */}
            <AlignJustify />
          </button>
          <Link className="logo__link" href="/">
            <img src="/logo.svg" alt="Logo" />
          </Link>

          <div className="hidden md:flex flex" style={{ gap: "20px" }}>
            <MegaMenu setIsDropdownOpen={setIsDropdownOpen} />
            <div className="hidden md:flex flex" style={{ gap: "20px" }}>
              <button class="plasmic_default__all plasmic_default__button root_reset_ctBdLGgruJ63zzSx8ZZKZu plasmic_default_styles plasmic_mixins plasmic_tokens Button2__root__t2Tq1 gradient-border Button2__roottype_border__t2Tq1SPhhO __wab_instance Homepage__button2__cqMfX" type="button"><div class="__wab_flex-container ρfc"><div class="plasmic_default__all plasmic_default__div Button2__contentContainer__i2Ar2"><span class="__wab_slot ρs Button2__slotTargetChildren__kqVkt"><div class="plasmic_default__all plasmic_default__div __wab_text Homepage__text___43BsT">Sign in </div></span></div></div></button>
              <button class="plasmic_default__all plasmic_default__button root_reset_ctBdLGgruJ63zzSx8ZZKZu plasmic_default_styles plasmic_mixins plasmic_tokens Button2__root__t2Tq1 gradient-banner-button  Button2__roottype_gradientBannerBtn__t2Tq1Lm9L3 __wab_instance Homepage__button2___2ETMv" type="button"><div class="__wab_flex-container ρfc"><div class="plasmic_default__all plasmic_default__div Button2__contentContainer__i2Ar2"><span class="__wab_slot ρs Button2__slotTargetChildren__kqVkt Button2__slotTargetChildrentype_gradientBannerBtn__kqVktLm9L3"><div class="plasmic_default__all plasmic_default__div __wab_text Homepage__text__dtbLn">Register</div></span></div></div></button>
            </div>
          </div>
          {/* <UserProfile /> */}

          {/* Mobile navigation drawer */}
          <div className="md:hidden absolute">
            <MobileNavigationDrawer
              {...{ isDrawerOpen, setIsDrawerOpen, drawerButtonRef }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navigation;