import React,{useState,Fragment} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';

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
