import React from 'react';
import { TableContainer, TableHead, TableBody, TableStyle } from './styled';

interface Props {
  headers: string[];
  children: JSX.Element[] | JSX.Element;
}

export const Table = (props: Props) => {
  const { headers, children } = props;

  return (
    <TableContainer>
      <TableStyle>
        <TableHead>
          <tr>
            {headers.map((header: string, index) => {
              return <th key={index}>{header}</th>;
            })}
          </tr>
        </TableHead>
        <TableBody>
          {React.Children.map(children, (child, index) => {
            return <React.Fragment key={index}>{child}</React.Fragment>;
          })}
        </TableBody>
      </TableStyle>
    </TableContainer>
  );
};
