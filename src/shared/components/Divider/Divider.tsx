import styled from 'styled-components';

interface Props {
  top?: string;
}

export const Divider = styled.hr<Props>`
  height: 2px;
  margin: 4px 0;
  width: 100%;
  position: relative;
  top: -20px;
  top: ${(props) => (props.top ? props.top : '0')};

  border-style: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.border}; ;
`;
