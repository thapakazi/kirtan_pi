import React, {Fragment} from 'react';
import Layout from '../components/layouts/Layout';

const Favourite =() =>{
  console.log("inside favourite");
  return(
    <Fragment>
      <Layout render={prop => <div>{JSON.stringify(prop)}</div>} />
    </Fragment>
  );
};

export default Favourite;
