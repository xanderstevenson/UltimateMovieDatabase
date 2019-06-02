import React, { Component } from 'react';
import axios from 'axios';


var info = []
var underline = {
    textDecoration: 'underline'
}
function getTMDBdata(){
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=15e1bbc41548aa6ea02bac4f092efa6f&language=en-US&page=1')
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
  // alert(list3)
  return list3 
}


function getNiceListofTitles(list){
  var newlist = ''
  var index = 0
  return list.map((item)=>{
   

     var index1 = item.indexOf(':')
     var index2 = item.indexOf(',,')   
    var movieID = item.substring(index1 + 1, item.length - 1)

    var item2 = item.substring(0, index1)  
    var movieURL = 'https://www.themoviedb.org/movie/' + movieID + '?language=en-US'
    return <tr><td><a class="link" href= {movieURL} target="#blank">{item2}</a></td></tr>
  })
}
var test = getNiceListofTitles(getTitleNames(getTMDBdata()))

class TopRated extends Component {

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
            <h1 className='page-name'>Top Rated</h1>  
            <br></br>
                <span><h2>These are the <span style={underline}>top rated</span> movies:</h2></span>
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
    export default TopRated