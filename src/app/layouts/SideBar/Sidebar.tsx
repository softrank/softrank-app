import React from 'react';
import { SideBarItem, StyledSidebar } from './styled';
import { SideBarData } from './SideBarData';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
      <StyledSidebar>
        {SideBarData.map((item, index) => {
          return (
            <SideBarItem key={index} as={Link} to={item.path}>
              <span>{item.title}</span>
            </SideBarItem>
          );
        })}
      </StyledSidebar>
    </>
  );
}
