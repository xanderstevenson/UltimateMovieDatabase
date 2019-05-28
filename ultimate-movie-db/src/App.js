import React from 'react';
import NowPlaying from './pages/NowPlaying/NowPlaying.js'
import Popular from './pages/Popular/Popular.js'
import TopRated from './pages/TopRated/TopRated.js'
import Search from './pages/Search/Search.js'
import Home from './pages/Home/Home.js'
import './App.css';
import './index.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <div id="circle">
        <h1 id="main-heading">The <br></br>Ultimate <br></br>Moviegoers <br></br>Guide</h1>
        </div> 
      </header>
<HashRouter>
  {/* <NowPlaying/>
  <Popular/>
  <TopRated/>
  <Search/> */}

<table id="nav-table">
  <tr>
    <th class="th"><NavLink to="/">Home</NavLink></th>
    <th class="th"><NavLink to="/now-playing">Now Playing</NavLink></th>
    <th class="th"><NavLink to="/popular">Popular</NavLink></th>
    <th class="th"><NavLink to="/top-rated">Top Rated</NavLink></th>
    <th class="th"><NavLink to="/search">Search</NavLink></th>
  </tr>
</table>
<div className="content">

  <div class='container'>
 
   <img id="screen" src="https://res.cloudinary.com/dx5eoz5dw/image/upload/v1558996967/UltimateMoveDatabase/screen2.png" alt=""/>
   <Route exact path="/" component={Home}/>
    <Route path="/now-playing" component={NowPlaying}/>
    <Route path="/popular" component={Popular}/>
    <Route path="/top-rated" component={TopRated}/>
    <Route path="/search" component={Search}/>
  </div>
  <img src="green_app_icon.png" alt="movie database logo" id='tmdb-logo'/>
</div>

</HashRouter>

    </div>
  );
}

export default App;
