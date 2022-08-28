import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const [userRoles, setUserRoles] = useState<string[]>([]);
  const [dropDownData, setDropDownData] = useState(SideBarData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector<RootState>((state) => state.auth.isAuthenticated);
  const roles = useSelector<RootState>((state) => state.auth.roles);

  const toggleDropdown = () => setNavMenu(!navMenu);
  const logoutHandler = () => dispatch(authActions.signOut());

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rolesArray: any[] = roles as string[];
    setUserRoles(rolesArray);
  }, [roles]);

  useEffect(() => {
    const data = SideBarData.filter(
      (sbd) => !sbd.roles || sbd.roles.includes(userRoles[0])
    );
    setDropDownData(data);
  }, [userRoles]);

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
            {dropDownData.map(({ title, path }, index) => {
              return (
                <React.Fragment key={index}>
                  <DropdownItem
                    as={Link}
                    to={path}
                    onClick={() => setNavMenu(false)}
                  >
                    <span>{title}</span>
                  </DropdownItem>
                  {dropDownData.length - 1 !== index && <DropdownDivider />}
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
          <ButtonLink onClick={() => logoutHandler()}>Sair</ButtonLink>
        ) : (
          <ButtonLink onClick={() => navigate('/login')}>Login</ButtonLink>
        )}
      </HeaderColumn3>
    </Header>
  );
};
