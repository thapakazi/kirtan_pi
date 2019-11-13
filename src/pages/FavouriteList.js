import React, {Fragment} from 'react';
import styled from 'styled-components';
import Layout from '../components/layouts/Layout';
import * as store from 'utils/localStore';

const FavouriteListWrap = styled.div``;
const FavouriteList =() =>{
  console.log("inside favourite list");
  store.getFavourite()
  
  return(
    <Fragment>
      <Layout render={prop => <div>{JSON.stringify(prop)}</div>} />
    </Fragment>
  );
};

export default FavouriteList;
