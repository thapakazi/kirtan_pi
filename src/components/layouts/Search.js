import React, {useState} from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import {search} from '../../utils/api';

export const SearchBoxStyle = styled(Input.Search)`
  // background: lightsalmon;
  // border-radius: 8px;
  // &.ant-input-search{
  // }
`;

export function SearchBox ({setItems}){
  const filter = async (value) => {
    const items = await search(value);
    setItems(items.items);
    console.log(items);
  };

  return(
    <SearchBoxStyle
      placeholder = "Search Bhajans..."
      onSearch = {filter}
      style={{padding: '3px'}}
    />
  );
}

export default SearchBox;
