import { menuData } from '../menuData';
import MenuItem from './MenuItem';

const MegaMenu = ({ handleToggle, clicked, setIsDrawerOpen, setIsDropdownOpen }) => {
  return (
    <div className="nav__container">
      <nav>
        <ul>
          {menuData.map(({ label, href, children }, index) => {
            return (
              <MenuItem
                key={index}
                {...{
                  label,
                  href,
                  children,
                  setIsDrawerOpen, setIsDropdownOpen
                }}
                onToggle={() => {
                  handleToggle && handleToggle(index);
                  setIsDropdownOpen(clicked !== index); // Update state
                }}
                active={clicked === index}
              />
            );
          })}
        </ul>
      </nav>
      <div >
      </div>
    </div>
  );
};

export default MegaMenu;