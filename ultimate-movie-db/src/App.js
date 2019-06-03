import React, { Component } from 'react';
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
import RenderToLayer from 'material-ui/internal/RenderToLayer';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: ''
    }
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: ''
      })
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }


 render(){
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
  <tbody>

    <th className="th"><NavLink to="/">Home</NavLink></th>
    <th className="th"><NavLink to="/now-playing">Now Playing</NavLink></th>
    <th className="th"><NavLink to="/popular">Popular</NavLink></th>
    <th className="th"><NavLink to="/top-rated">Top Rated</NavLink></th>
    <th className="th"><NavLink to="/search">Search</NavLink></th>

  </tbody>
</table>

<div className="content">

  <div class='container'>
  <center class="black-text-outline" id="from">Brought to you by:</center>
   <a href="https://www.themoviedb.org" target="blank#"><img id="screen" src="https://res.cloudinary.com/dx5eoz5dw/image/upload/v1559533888/UltimateMoveDatabase/screen2.png" alt="movie database logo"/></a>
   <Route exact path="/" component={Home}/>
    <Route path="/now-playing" component={NowPlaying}/>
    <Route path="/popular" component={Popular}/>
    <Route path="/top-rated" component={TopRated}/>
    <Route path="/search" component={Search}/>
  </div>
  
</div>

</HashRouter>

    <div>
      {this.state.data}
    </div>

    </div>

  );
}
}
export default App;
