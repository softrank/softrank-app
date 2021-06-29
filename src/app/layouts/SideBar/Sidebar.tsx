import { Link } from 'react-router-dom';

import { SideBarDivided, SideBarItem, StyledSidebar } from './styled';
import { SideBarData } from './SideBarData';

export default function Sidebar() {
  return (
    <StyledSidebar>
      {SideBarData.map((item, index) => {
        return (
          <div key={index}>
            <SideBarItem as={Link} to={item.path}>
              <span>{item.title}</span>
            </SideBarItem>
            {index !== SideBarData.length - 1 && <SideBarDivided />}
          </div>
        );
      })}
    </StyledSidebar>
  );
}
