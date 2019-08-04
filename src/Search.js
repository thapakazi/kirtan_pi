import React from 'react';
import {search} from './utils/api';
import styled from 'styled-components';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import Result from 'components/Result';

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

const SearchBox = styled(Input.Search)`
  background: lightsalmon;


  &.ant-input-search{
    margin-top: 1.2em;
  }
`;
export default class Search extends React.Component {
  constructor(){
    super();
    this.state = {items: []};
  }

  async filter(value){
    const items = await search(value);
    this.setState({items: items.items});
  }
  render() {
    let items = this.state.items;
    if (this.state.filter){
      items = items.filter(
        item => item.snippet.title.toLowerCase()
          .includes(this.state.filter.toLowerCase())
      );
    }
    return(
      <SearchWrapper>
        <SearchBox
          placeholder = "Search Bhajans..."
          onSearch = { this.filter.bind(this)}
          style={{padding: '10px'}}
        />
        <StyledSearchResults>
          { items.length !== 0 ? items.map(item => <Result key={item.etag} result={item}/>): "...your playlist goes here..."}
        </StyledSearchResults>
      </SearchWrapper>
    );
    
  }
}

