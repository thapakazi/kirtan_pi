import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Search} from './Search';
import Dashboard from './pages/Dashboard';

export function Favourite() {
  return <h2>Favourite</h2>;
}

export function Playlist() {
  return <h2>Playlist</h2>;
}

export default function Main() {
  return(
    <Router>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/search" component={Search}/>
      <Route path="/favourite" component={Favourite}/>
      <Route path="/playlist" component={Playlist}/>
    </Router>
  );
}

