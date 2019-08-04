import React from 'react';
import {search} from './utils/api';
import styled from 'styled-components';

class Search extends React.Component {
  constructor(){
    super();
    this.state = {items: []};
  }

  async filter(e){
    const items = await search(e.target.value);
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
        &nbsp;Search Bhajans &nbsp;&nbsp;
        <input type="text" onChange={this.filter.bind(this)} placeholder="search bahubali.."/>
        {items.map(item => <Result key={item.etag} result={item}/>)}
      </SearchWrapper>
    );
    
  }
}
const SearchWrapper = styled.div`
  text-align: center;
  width: 80%;
  margin: 0px auto;
`;

const StyledResultThumbnail = styled.img`
  height: inherit;
`;

const StyledResultWrapper = styled.div`
  display: flex;
  background-color: #f2f3f4;
  margin: 1em 1em 2em 1em;
  box-shadow: 3px 3px 11px 0px #7db9ce;
  height: 10em;
`;

const StyledResultDetails = styled.div`
  padding: 0.5em;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  text-align: left;
`;

const StyledDescription = styled.p`
  text-align: left;
  margin-top: 0.5em;
`;

const Result =({result}) =>{
  let {snippet,id} = result;

  return (
    <StyledResultWrapper>
      <StyledResultThumbnail src={snippet.thumbnails.high.url} alt="thumbnail"/>
      <StyledResultDetails>
        <StyledTitle>{snippet.title}</StyledTitle>
        <StyledDescription>{snippet.description}</StyledDescription>
      </StyledResultDetails>
    </StyledResultWrapper>
  );
};
  
export default Search;
