import React from 'react';
import { DropdownContainer, StyledDropdown } from './styled';

interface Props {
  children: JSX.Element[];
  display: boolean;
}

export default function Dropdown(props: Props) {
  const { children, display } = props;

  return (
    <DropdownContainer>
      <StyledDropdown display={display}>
        {React.Children.map(children, (child, index) => {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  key: index,
                },
              })
            : child;
        })}
      </StyledDropdown>
    </DropdownContainer>
  );
}
