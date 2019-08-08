import React from 'react';
import styled from 'styled-components';
import { Menu, Button,Dropdown } from 'antd';

const StyledControlWrapper = styled.div`
  display: flex;
`;

const PlayButton = styled(Button)`
  border: 1px solid black;
  background: blue;
`;


const handleMenuClick = (e) => {
  console.log('click', e);
};
const Playlist = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Monday Bhajans</Menu.Item>
    <Menu.Item key="2">Party Music</Menu.Item>
    <Menu.Item key="3">Instrumental</Menu.Item>
    <Menu.Item key="4">Dance</Menu.Item>
  </Menu>
);

const Favorite = styled(Button)``;
const AddToPlaylist = styled(Dropdown)``;

const Controls =({ videoId,watchVideo }) =>{
  
  return(
    <StyledControlWrapper>
      <PlayButton icon="right" onClick={() => {watchVideo(videoId)}}> Play </PlayButton>
      <Favorite icon="heart" onClick={()=> {console.log('favourite pressed')}}> Favourite</Favorite>
      <AddToPlaylist overlay={Playlist}>
        <Button icon="plus">AddTo</Button>
      </AddToPlaylist>
    </StyledControlWrapper>
  );
};

export default Controls;
