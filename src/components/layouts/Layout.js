import React,{useState,Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from './Icon';
import {SearchBox} from './Search';
import {MenuWrap,MENU} from './Menu';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: cornsilk;
`;

function Header({setItems}){
  return(
    <HeaderWrapper>
      <Icon>ICON</Icon>
      <SearchBox setItems={setItems}/>
      <MenuWrap>
        {MENU}
      </MenuWrap>
    </HeaderWrapper>
  );
}

const Layout = ({render}) => {
  let [ items, setItems] = useState([]);
  let childrenProps={items};

  return(
    <Fragment>
      <Header setItems={setItems}/>
      {!!render ? render(childrenProps):null}
    </Fragment>
  );

};
export default Layout;
