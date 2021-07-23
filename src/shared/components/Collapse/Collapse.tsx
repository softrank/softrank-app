import React from 'react';

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
  collapse: boolean;
  setCollapse: (state: boolean) => void;
  children: JSX.Element[];
  options?: any;
}

export const Collapse = ({
  title,
  collapse,
  setCollapse,
  children,
  options,
}: Props) => {
  const toggleLevels = () => setCollapse(!collapse);

  return (
    <CollapseContainer>
      <CollapseHead>
        <CollapseTitle>{title}</CollapseTitle>
        <CollapseOptions>
          {options}
          <ToggleCollapseIcon
            onClick={() => toggleLevels()}
            collapse={collapse}
          />
        </CollapseOptions>
      </CollapseHead>
      {!collapse && (
        <CollapseBody>
          {children.length > 0 ? (
            <>
              {React.Children.map(children, (child, index) => {
                return <div key={index}>{child}</div>;
              })}
            </>
          ) : (
            <NoContent>Nenhum conteúdo para exibir</NoContent>
          )}
        </CollapseBody>
      )}
    </CollapseContainer>
  );
};
