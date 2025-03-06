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
    </div>
  );
};

export default DropdownContent;
