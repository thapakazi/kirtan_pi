import React,{useState,Fragment} from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';

import Result from 'components/Result';
import Modal from 'components/Modal';
import Layout from 'components/layouts/Layout';
import Player from 'components/layouts/Player';

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
            ? items.map(item => <Result
                                  key={item.etag}
                                  result={item}
                                  watchVideo={watchVideo}
                                />)
            : "...your playlist goes here..."
          }
          
        </StyledSearchResults>
        <Modal showModal={showModal} onCancel={watchVideo}>
          <StickyWrapper>
            <Player
              url={videoParams.url}
              height='15em'
              width='20em'
              controls={true}
              config={{
                youtube: {
                  playerVars: {
                    'showinfo': 1,
                    'autoplay': 1
                  }
                },
              }}
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


export default SearchResult;
