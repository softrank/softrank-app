import { useState } from 'react';
import { Header, HeaderTitle, MenuIcon, Wrapper } from './styled';
import Sidebar from '../SideBar/Sidebar';

export default function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <Header>
        <Wrapper>
          <MenuIcon onClick={showSideBar} />
          <HeaderTitle>SoftRank</HeaderTitle>
        </Wrapper>
      </Header>
      {sideBar && <Sidebar />}
    </>
  );
}
