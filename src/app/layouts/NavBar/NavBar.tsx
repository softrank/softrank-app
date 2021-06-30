import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, HeaderTitle, MenuIcon, Wrapper } from './styled';
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
      <Wrapper>
        <div ref={ref}>
          <MenuIcon onClick={toggleDropdown} />
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
        <HeaderTitle>SoftRank</HeaderTitle>
      </Wrapper>
    </Header>
  );
}
