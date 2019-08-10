import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Search from './components/Search';
import Playlist from './pages/Playlist';
import Favourite from './pages/Favourite';
import SearchResult from './pages/SearchResult';
import Layout from './components/layouts/Layout';
const propTypes = {};
const defaultProps = {};

const App = (props) => {
  return(
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchResult}/>
          <Route exact path="/playlist" component={Playlist}/>
          <Route exact path="/favourite" component={Favourite}/>
          <Route exact path="/search" component={SearchResult}/>
        </Switch>
    </Router>
    </Fragment>
  );
};

App.propTypes = propTypes;

export default App;
