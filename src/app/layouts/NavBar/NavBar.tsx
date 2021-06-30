import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Header,
  HeaderColumn1,
  HeaderColumn2,
  HeaderColumn3,
  HeaderTitle,
  MenuIcon,
} from './styled';
import { SideBarData } from '../SideBar/SideBarData';
import Dropdown from '../../../components/Dropdown/Dropdown';
import DropdownItem from '../../../components/Dropdown/DropdownItem';
import DropdownDivider from '../../../components/Dropdown/DropdownDivider';

export default function NavBar() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <Header>
      <HeaderColumn1>
        <div ref={ref}>
          <MenuIcon
            onClick={toggleDropdown}
            onMouseEnter={() => setDropdown(true)}
          />
          {dropdown && (
            <Dropdown>
              {SideBarData.map((item, index) => {
                return (
                  <div key={index}>
                    <DropdownItem
                      as={Link}
                      to={item.path}
                      onClick={() => setDropdown(false)}
                    >
                      <span>{item.title}</span>
                    </DropdownItem>
                    {index !== SideBarData.length - 1 && <DropdownDivider />}
                  </div>
                );
              })}
            </Dropdown>
          )}
        </div>
      </HeaderColumn1>
      <HeaderColumn2>
        <HeaderTitle as={Link} to={'/'}>
          SoftRank
        </HeaderTitle>
      </HeaderColumn2>
      <HeaderColumn3>other content</HeaderColumn3>
    </Header>
  );
}
