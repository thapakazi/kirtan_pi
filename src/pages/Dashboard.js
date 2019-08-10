import React from 'react';
import {Link,Switch,Route,Router} from 'react-router-dom';
import {Playlist,Favourite} from '../Main';
import {Search} from '../Search';
function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default function Dashoboard() {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>


      </div>
    </Router>
  );
}

