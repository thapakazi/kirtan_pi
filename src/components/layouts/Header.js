import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import {SearchBox} from './Search';
import {MenuWrap} from './Menu';


const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: cornsilk;
  position: sticky;
  top: 0px;
  // z-index: 10;
`;

export default function Header({setItems}){
  return(
    <HeaderWrapper>
      <Icon>ICON</Icon>
      <SearchBox setItems={setItems}/>
      <MenuWrap>
        {[
          {
            link: "/favourite",
            display: "Favourite"
          },
          {
            link: "/playlist",
            display: "Playlist"
          },
          {
            link: "/info",
            display: "Info"
          }
        ]}
      </MenuWrap>
    </HeaderWrapper>
  );
}
