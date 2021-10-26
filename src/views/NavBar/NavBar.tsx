import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown } from 'shared/components/Dropdown/Dropdown';
import { SideBarData } from 'shared/data/SideBarData';
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
import { ButtonLink } from 'shared/components';
import { authActions, RootState } from 'shared/store';

export const NavBar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [userRoles, setUserRoles] = useState<any[]>([]);

  const history = useHistory();
  const dispatch = useDispatch();

  const auth = useSelector<RootState>((state) => state.auth.isAuthenticated);
  const roles = useSelector<RootState>((state) => state.auth.roles);

  const toggleDropdown = () => setNavMenu(!navMenu);
  const logoutHandler = () => dispatch(authActions.signOut());

  const ref = useRef<HTMLDivElement>(null);

  const mockRoles: string[] = ['modelManager'];

  useEffect(() => {
    const rolesArray: any[] = roles as any[];
    setUserRoles(rolesArray);
  }, [roles]);

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
            {SideBarData.map(({ title, path, roles }, index) => {
              if (roles)
                if (!roles?.some((element) => mockRoles.includes(element)))
                  return <React.Fragment key={index}></React.Fragment>;

              return (
                <React.Fragment key={index}>
                  <DropdownItem
                    as={Link}
                    to={path}
                    onClick={() => setNavMenu(false)}
                  >
                    <span>{title}</span>
                  </DropdownItem>
                  {index !== SideBarData.length - 1 && <DropdownDivider />}
                </React.Fragment>
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
      <HeaderColumn3>
        {auth ? (
          <ButtonLink onClick={() => logoutHandler()}>Logout</ButtonLink>
        ) : (
          <ButtonLink onClick={() => history.push('/login')}>Login</ButtonLink>
        )}
      </HeaderColumn3>
    </Header>
  );
};
