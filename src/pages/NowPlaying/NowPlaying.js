import React, { Component } from 'react';
import axios from 'axios';


var info = []
var underline = {
    textDecoration: 'underline'
}

function getTMDBdata(){
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=15e1bbc41548aa6ea02bac4f092efa6f&language=en-US&page=1')
    .then(response => JSON.stringify(response))
    .then(response => {
        info = response.toString().split(',')
    })
    .catch(function(error){
        alert(error)
    })  
    return info
}


function getTitleNames(str){
    var str2 = str.toString()
    var id = 0
    var list2 = str2.split('"')
    var list3 = []
    for(let i = 0; i < list2.length; i ++){
        if(list2[i] == "title"){
            list2[i].replace('title', '')
            list3.push(list2[i + 2] + list2[i - 5])   
        }
    }
    return list3 
}


function getNiceListofTitles(list){
    var newlist = ''
    return list.map((item)=>{
      var movieID = item.substring(item.length-7)
      var item2 = item.substring(0, item.length-8)
      var movieURL = 'https://www.themoviedb.org/movie/' + movieID + '?language=en-US'
      return <tr><td><a class="link" href= {movieURL} target="#blank">{item2}</a></td></tr>
    })
}

var test = getNiceListofTitles(getTitleNames(getTMDBdata()))

class NowPlaying extends Component {

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
            data: test
          })
        }, 1000)
      }

    componentDidMount(){
        this.getData();
      }


render(){
    return ( 
        <div>
            <br></br>
            <h1 className='page-name'>Now Playing</h1>  
            <br></br>
                <span><h2 class="black-text-outline">The following movies are <span style={underline}>now playing</span> in theatres:</h2></span>
                {/* <span>{getTitleNames(getTMDBdata())}</span> */}
                <table class = "movieTable">
<span>{getNiceListofTitles(getTitleNames(getTMDBdata()))}</span>
                </table>
            <div>
            {/* {this.state.data} */}
            </div>
        </div>
    )
    }
}
export default NowPlaying

