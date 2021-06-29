import { useState } from 'react';
import { Header, HeaderTitle, MenuIcon, Wrapper } from './styled';
import Sidebar from '../SideBar/Sidebar';

export default function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <>
      <Header>
        <MenuIcon
          onClick={showSideBar}
          onMouseEnter={() => setSideBar(true)}
          // onMouseLeave={() => setSideBar(false)}
          onBlur={() => setSideBar(false)}
        />
        <HeaderTitle>SoftRank</HeaderTitle>
      </Header>
      {sideBar && <Sidebar />}
    </>
  );
}
