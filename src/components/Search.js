import React,{useState} from 'react';
import {search} from '../utils/api';
import styled from 'styled-components';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import Result from 'components/Result';
import Modal from 'components/Modal';
import ReactPlayer from 'react-player';

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

const SearchBoxStyle = styled(Input.Search)`
  background: lightsalmon;


  &.ant-input-search{
    margin-top: 1.2em;
  }
`;

// function SearchBox (){
//   return(
//     <SearchBoxStyle/>
//   );
// }

const Search = () => {
  let [ items, setItems] = useState([]);
  const filter = async (value) => {
    items = await search(value);
    setItems(items.items);
  };

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

  return(
    <SearchWrapper>
      <SearchBox
        placeholder = "Search Bhajans..."
        onSearch = {filter}
        style={{padding: '10px'}}
      />
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

export default Search;
