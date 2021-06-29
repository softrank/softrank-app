import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../components/Button/Button';
import Dropdown from '../../../components/Dropdown/Dropdown';
import DropdownDivider from '../../../components/Dropdown/DropdownDivider';
import DropdownItem from '../../../components/Dropdown/DropdownItem';
import Wrapper from '../Layout/Wrapper';
import { SideBarData } from '../SideBar/SideBarData';

export default function HomePage() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <Wrapper>
      <div>This is the home page</div>
      <Button
        secondary
        onClick={() => toggleDropdown()}
        // onMouseOverCapture={toggleDropdown}
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        Dropdown
      </Button>
      {dropdown && (
        <Dropdown display={dropdown}>
          {SideBarData.map((item, index) => {
            return (
              <div key={index}>
                <DropdownItem as={Link} to={item.path}>
                  <span>{item.title}</span>
                </DropdownItem>
                {index !== SideBarData.length - 1 && <DropdownDivider />}
              </div>
            );
          })}
        </Dropdown>
      )}
    </Wrapper>
  );
}
