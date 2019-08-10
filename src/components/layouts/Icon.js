import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const IconWrapper= styled(Link)`
  margin: 10px;
  border: 2px dotted palevioletred;
`;

function Icon(){
  return (
    <IconWrapper to="/"/>
  );
}

export default Icon;

