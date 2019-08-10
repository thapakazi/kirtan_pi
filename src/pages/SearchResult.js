import React,{useState,Fragment} from 'react';
import styled from 'styled-components';

import 'antd/dist/antd.css';
import Result from 'components/Result';
import Modal from 'components/Modal';
import ReactPlayer from 'react-player';
import Layout from '../components/layouts/Layout';

const SearchWrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: 0px auto;
`;

const StyledSearchResults = styled.div`
  display: flex;
  flex-direction: column;

  // box-shadow: 3px 3px 11px 0px #7db9ce;

`;


function SearchResult ({items, ...props}) {
  console.log("items", items);
  console.log("Props:",props)
  const [showModal, setShowModal] = useState(false);
  const [videoParams, setVideoParams] = useState({});
  const handleOpenModal =() => {
    setShowModal(true);
  };
  const handleCloseModal = () =>  {
    setShowModal(false);
  };
  
  const getYoutubeUrl = (videoId) => {
    return `https://www.youtube.com/watch?v=`+ videoId;
  };
  
  const watchVideo =(videoId) => {
    let url= getYoutubeUrl(videoId);
    setVideoParams({url: url});
    return setShowModal(!showModal);
  };

  function render({items}){
    return(
      <SearchWrapper>
        <StyledSearchResults >
          { items.length !== 0 
            ? items.map(item => <Result key={item.etag} result={item} watchVideo={watchVideo} />)
            : "...your playlist goes here..."
          }
          
        </StyledSearchResults>
        <Modal showModal={showModal} onCancel={watchVideo}>
          <StickyWrapper>
            <Player
              url={videoParams.url}
              playing
              height='15em'
              width='20em'
              controls={true}
            />
          </StickyWrapper>
        </Modal>
      </SearchWrapper>
    );
  }

  return(
    <Layout render={render}/>
  );
}

const StickyWrapper = styled.div`
  position: fixed;
  bottom: -4px;
  right: 10px;
`;

const Player = styled(ReactPlayer)`
  background: #31B0D5;
  padding: 2px 2px;
  // height: 15em;
  // width: 20em;
`;

export default SearchResult;
