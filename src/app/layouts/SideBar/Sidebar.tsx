import { SideBarDivided, SideBarItem, StyledSidebar } from './styled';
import { SideBarData } from './SideBarData';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
      <div style={{ height: '300px' }}>
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
      </div>
      {/* <div style={{ clear: 'both' }} /> */}
    </>
  );
}
