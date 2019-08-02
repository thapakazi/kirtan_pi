import React from 'react';
import {search} from './utils/api';
import './Search.css';

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
      <div>
        &nbsp;Search Bhajans &nbsp;&nbsp;
        <input type="text" onChange={this.filter.bind(this)} placeholder="search bahubali.."/>
        {items.map(item => <Result key={item.etag} result={item}/>)}
      </div>
    );
    
  }
}

const Result =(props) =>{
  let resultSnippet =props.result.snippet;

  return (
    <div>
      <div className="card">
        <img src={resultSnippet.thumbnails.high.url} alt={resultSnippet.title} style={{width:'100%'}}/>
        <div className="container">
          <h4><b>{resultSnippet.title}</b></h4> 
          <pre>{resultSnippet.description}</pre> 
        </div>
      </div>
    </div>
  );
};
  
export default Search;
