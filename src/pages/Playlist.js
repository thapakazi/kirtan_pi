import React, {Fragment} from 'react';
import Layout from '../components/layouts/Layout';

function PlayListWrapper(){
  return <div>Inside Playlist</div>
}
function Playlist(){
  console.log("inside playlist");
  return(
    <Fragment>
      <Layout render={props => (<PlayListWrapper/>)}/>
    </Fragment>
  );
}

export default Playlist;
