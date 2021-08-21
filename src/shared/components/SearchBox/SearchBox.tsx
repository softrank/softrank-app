import React from 'react';
import { SearchContainer, SearchIcon, SearchInput } from './styled';

export const SearchBox = () => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput placeholder="Pesquise..." />
    </SearchContainer>
  );
};
