import { useEffect, useRef, useState } from 'react';
import Button from '../../../components/Button/Button';
import Dropdown from '../../../components/Dropdown/Dropdown';
import DropdownDivider from '../../../components/Dropdown/DropdownDivider';
import DropdownItem from '../../../components/Dropdown/DropdownItem';
import Wrapper from '../Layout/Wrapper';
import { SideBarData } from '../SideBar/SideBarData';

export default function HomePage() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(dropdown);
  }, [dropdown]);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
      console.log('meu ovo');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <Wrapper>
      <div
        ref={ref}
        style={{
          display: 'inline-block',
        }}
      >
        <Button secondary onClick={toggleDropdown}>
          Dropdown
        </Button>
        {dropdown && (
          <Dropdown>
            {SideBarData.map((item, index) => {
              return (
                <div key={index}>
                  <DropdownItem>
                    <span>{item.title}</span>
                  </DropdownItem>
                  {index !== SideBarData.length - 1 && <DropdownDivider />}
                </div>
              );
            })}
          </Dropdown>
        )}
      </div>
    </Wrapper>
  );
}
