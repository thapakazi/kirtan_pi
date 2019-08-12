import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Menu  = styled.div`

`;
const MenuItem = styled(Link)`
  :not(first-child){
    padding-left: 10px;
  }
`;

export const MenuWrap = function({children}) {
  return(
    <Menu>
      {children.map(
        ({link,display}) => (<MenuItem to={link} key={display}>{display}</MenuItem>)
      )}
    </Menu>
  );
};
