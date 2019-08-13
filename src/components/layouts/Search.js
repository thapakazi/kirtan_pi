import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import {search} from 'utils/api';
import getRandomGod from 'utils/gods';

export const SearchBoxStyle = styled(Input.Search)`
  // background: lightsalmon;
  // border-radius: 8px;
  // &.ant-input-search{
  // }
`;

export function SearchBox ({setItems}){
  const [god,setGod] = useState("krishna");
  const [showModal, setShowModal] = useState(false);
  useEffect(()=>{
    let _god = getRandomGod();
    setGod(`${_god} bhajans`);
    filter(_god);
  },[]);

  const filter = async (value) => {
    const items = await search(value);
    setItems(items.items);
    console.log(items);
  };
  const handleChange = (e) =>{
    setGod(e.target.value);
  };

  return(
    <SearchBoxStyle
      placeholder = "Search Bhajans..."
      onSearch={filter}
      onChange={handleChange}
      style={{padding: '3px'}}
      value={god}
      allowClear
      enterButton
    />
  );
}

export default SearchBox;
