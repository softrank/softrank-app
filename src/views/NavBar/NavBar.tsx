import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Dropdown } from 'shared/components/Dropdown/Dropdown';
import { SideBarData } from 'shared/services/SideBarData';
import { RootState } from 'shared/store';
import {
  DropdownItem,
  DropdownDivider,
} from 'shared/components/Dropdown/styled';
import {
  Header,
  HeaderColumn1,
  HeaderColumn2,
  HeaderColumn3,
  HeaderTitle,
  IconBackground,
  MenuIcon,
} from './styled';

export const NavBar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const auth = useSelector<RootState>((state) => state.auth.isAuthenticated);

  const toggleDropdown = () => setNavMenu(!navMenu);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <Header>
      <HeaderColumn1>
        <IconBackground ref={ref} onClick={toggleDropdown}>
          <MenuIcon />
          <Dropdown
            visible={navMenu}
            setVisible={setNavMenu}
            ref={ref}
            positionTop="1.1em"
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
      <HeaderColumn3>{auth ? 'authenticated' : 'no user'}</HeaderColumn3>
    </Header>
  );
};
