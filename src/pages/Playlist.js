import React, {Fragment} from 'react';
import Layout from '../components/layouts/Layout';
import styled from 'styled-components';


const PlaylistWrap = styled(PlaylistResult)`
  
`;
function PlaylistResult(){
  return(
    <div>
      Playlist Results
    </div>
  );
}

export default function Playlist(){
  return(
    <Fragment>
      <Layout render={props => (<PlaylistResult/>)}/>
    </Fragment>
  );
}
