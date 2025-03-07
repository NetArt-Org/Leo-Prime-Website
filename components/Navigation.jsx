import { useState, useRef } from 'react';
import Link from 'next/link';
import Container from './Container';
import UserProfile from './UserProfile';
import { AlignJustify } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileNavigationDrawer from './MobileNavigationDrawer';

const Navigation = ({activeMenu }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const drawerButtonRef = useRef(null);
  console.log("SET IS DROPDOWN", isDropdownOpen)
  return (
    <header className={`nav__header_mobile md:nav__header  ${isDropdownOpen ? "header-gray" : null}`}>
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

          <div className="hidden md:flex flex" style={{ gap: "20px",position:"relative" }}>
            <MegaMenu setIsDropdownOpen={setIsDropdownOpen} activeMenu={activeMenu} />
            <div className="hidden md:flex flex" style={{ gap: "5px" }}>
              <Link href="#" className='header-btn gradient-border'>Sign in</Link>
              <Link href="#" className='header-btn gradient-banner-button'>Register</Link>
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