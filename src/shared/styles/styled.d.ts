import styled from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
    border: string;
    accent: string;
    secundaryBackground: string;
  }
}
