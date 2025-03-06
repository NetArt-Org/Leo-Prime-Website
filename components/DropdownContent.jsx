import React from 'react';
import Link from 'next/link';

const DropdownContent = ({ submenuscontent, setIsDrawerOpen, handleClick }) => {
  return (
    <div className="dropdown_content">
      {submenuscontent.map((item, index) => (
        <React.Fragment key={index}>
          <section>
            <h3>{item.heading}</h3>
            <ul>
              {item.submenu.map(({ label, href }, subIndex) => (
                <li
                  key={subIndex}
                  onClick={() => {
                    if (setIsDrawerOpen) setIsDrawerOpen(false);
                    handleClick();
                  }}
                >
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </React.Fragment>
      ))}
      <div className='fixedColumn'>
        <p>Trade anywhere, anytime from our mobile app</p>
        <img src="https://site-assets.plasmic.app/94759ca717a1bc5ed407e20bac348d07.svg" alt="Mobile App" />
        <img src="https://site-assets.plasmic.app/af1036e1db328cb0ff9b70b5dc8df44c.svg" alt="Mobile App" />
      </div>
    </div>
  );
};

export default DropdownContent;