import React, {Fragment} from 'react';
import Layout from '../components/layouts/Layout';

const FavouriteList =() =>{
  console.log("inside favourite list");

  return(
    <Fragment>
      <Layout render={prop => <div>{JSON.stringify(prop)}</div>} />
    </Fragment>
  );
};

export default FavouriteList;
