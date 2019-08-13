import React from 'react';
import styled from 'styled-components';
import { Menu, Button,Dropdown } from 'antd';
import Favourite from './Favourite';
const StyledControlWrapper = styled.div`
  display: flex;
  .ant-btn {
   position: static;
   }
`;

const PlayButton = styled(Button)`
  // border: 1px solid black;
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

const AddToPlaylist = styled(Dropdown)``;

const Controls =({ videoId,watchVideo }) =>{
  return(
    <StyledControlWrapper>
      <PlayButton
        icon="right"
        onClick={() => {watchVideo(videoId)}}>
       n Play
      </PlayButton>
      <Favourite videoId={videoId}/>
      <AddToPlaylist overlay={Playlist}>
        <Button icon="plus">AddTo</Button>
      </AddToPlaylist>
    </StyledControlWrapper>
  );
};

export default Controls;
