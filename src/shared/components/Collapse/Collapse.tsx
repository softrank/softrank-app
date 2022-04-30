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
  children: JSX.Element[];
  options?: any;
  underline?: boolean;
}

export const Collapse = ({ title, children, options, underline }: Props) => {
  const [collapseState, setCollapseState] = useState(false);

  const handleToggleCollapse = () => {
    setCollapseState(!collapseState);
  };

  return (
    <CollapseContainer underline={underline}>
      <CollapseHead underline={underline}>
        <CollapseTitle onClick={() => handleToggleCollapse()}>
          {title}
        </CollapseTitle>
        <CollapseOptions>
          {options}
          <ToggleCollapseIcon
            onClick={() => handleToggleCollapse()}
            $spin={!collapseState}
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
