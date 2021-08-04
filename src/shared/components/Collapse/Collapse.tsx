import React, { useState } from 'react';

import {
  CollapseBody,
  CollapseContainer,
  CollapseHead,
  CollapseOptions,
  CollapseTitle,
  NoContent,
  ToggleCollapseIcon,
} from './styled';

interface Props {
  title: string;
  collapse?: boolean;
  setCollapse?: (state: boolean) => void;
  children: JSX.Element[];
  options?: any;
}

export const Collapse = ({
  title,
  collapse = false,
  setCollapse,
  children,
  options,
}: Props) => {
  const [collapseState, setCollapseState] = useState(collapse);

  const handleToggleCollapse = () => {
    if (setCollapse) {
      setCollapse(!collapse);
    }
    setCollapseState(!collapseState);
  };

  return (
    <CollapseContainer>
      <CollapseHead>
        <CollapseTitle>{title}</CollapseTitle>
        <CollapseOptions>
          {options}
          <ToggleCollapseIcon
            onClick={() => handleToggleCollapse()}
            collapse={collapseState}
          />
        </CollapseOptions>
      </CollapseHead>
      {!collapseState && (
        <CollapseBody>
          {children.length > 0 ? (
            <>
              {React.Children.map(children, (child, index) => {
                return <div key={index}>{child}</div>;
              })}
            </>
          ) : (
            <NoContent>Nenhum conteúdo para ser exibido.</NoContent>
          )}
        </CollapseBody>
      )}
    </CollapseContainer>
  );
};
