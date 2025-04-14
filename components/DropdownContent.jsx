import React from 'react';
import Link from 'next/link';

const DropdownContent = ({ submenuscontent, setIsDrawerOpen, handleClick, appPromo }) => {
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
      {/* App Promo Section */}
      <div className="fixedColumn">
        <p>{appPromo.text}</p>
        {appPromo.links.map((link, index) => (
          <a href={link.href} key={index} target="_blank" rel="noopener noreferrer">
            <img src={link.imageSrc} alt={link.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropdownContent;