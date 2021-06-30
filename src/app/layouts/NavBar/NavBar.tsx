import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Header,
  HeaderColumn1,
  HeaderColumn2,
  HeaderColumn3,
  HeaderTitle,
  IconBackground,
  MenuIcon,
} from './styled';
import { SideBarData } from '../SideBar/SideBarData';
import Dropdown from '../../../components/Dropdown/Dropdown';
import DropdownItem from '../../../components/Dropdown/DropdownItem';
import DropdownDivider from '../../../components/Dropdown/DropdownDivider';

export default function NavBar() {
  const [navMenu, setNavMenu] = useState(false);

  const toggleDropdown = () => setNavMenu(!navMenu);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <Header>
      <HeaderColumn1>
        <IconBackground
          ref={ref}
          onClick={toggleDropdown}
          onMouseEnter={() => setNavMenu(true)}
        >
          <MenuIcon />
          <Dropdown
            visible={navMenu}
            setVisible={setNavMenu}
            ref={ref}
            positionTop="1em"
            positionLeft="-1em"
          >
            {SideBarData.map((item, index) => {
              return (
                <div key={index}>
                  <DropdownItem
                    as={Link}
                    to={item.path}
                    onClick={() => setNavMenu(false)}
                  >
                    <span>{item.title}</span>
                  </DropdownItem>
                  {index !== SideBarData.length - 1 && <DropdownDivider />}
                </div>
              );
            })}
          </Dropdown>
        </IconBackground>
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
