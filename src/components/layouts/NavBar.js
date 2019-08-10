import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const propTypes = {};

const defaultProps = {};

const NavBarWrapper=styled.div`

`;
const NavBar = () => {
  retrun(
    <HeaderWrapper>
      <LogoWrapper/>
      <SearchWrapper/>
      <NavItems/>
    </HeaderWrapper>
  );
};

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
