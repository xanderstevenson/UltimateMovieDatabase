import React, { Component } from 'react';
import axios from 'axios';
import { MapsLocalLaundryService } from 'material-ui/svg-icons';

var info = []
var movie

var getMovie = function(){
  if(document.getElementById('movieSearch').value.length > 0){
    movie = document.getElementById('movieSearch').value
  }
  else{
    movie = 'Hero'
  }
  return getNiceListofTitles(getTitleNames(getTMDBdata(movie)))
}


function getTMDBdata(movie){

  axios.get('https://api.themoviedb.org/3/search/movie?query=' + movie + '&api_key=15e1bbc41548aa6ea02bac4f092efa6f&language=en-US&page=1&include_adult=false')
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
  var count = 0
  var list2 = str2.split('"')
  var list3 = []
  for(let i = 0; i < list2.length; i ++){
      if(list2[i] == "title"){
          count +=1
          list2[i].replace('title', '')
          list3.push(list2[i + 2] + ", ")
      }
  }
  return list3
}

function getNiceListofTitles(list){
  var newlist = ''
  // for(let i = 0; i < list.length; i++){
  //  newlist += list[i] + "/n"
  // }
  return list.map((item)=>{
    return <p>{item}</p>
  })
}


class Search extends Component {


    constructor(props){
        super(props);
        this.state = {
          data: ''
        }
      }

    getData(){
        setTimeout(() => {
          this.setState({
            data: getMovie()
          })
        }, 1000)
      }

    componentDidMount(){
        this.getData();
      }


      
    render() {

    return (
        
        <div>
         <br></br>
        <h1 class='page-name'>Search</h1>
        <br></br>
        <br></br>
        <span>
            <form action=''>
            <label htmlFor="movieSearch">Search for a Movie: </label>
            <br></br>
            <br></br>
            <input type="text" name="movieSearch" id="movieSearch" placeholder='moviename' />
            <br></br>
            <span>
            <button type="submit" id="submitButton" onClick={getMovie}>Submit</button>
            </span>

            </form>
            <br></br>
            <span id='1'></span>
        </span>

            <div>
            {/* {getNiceListofTitles(getTitleNames(getTMDBdata()))} */}
            {this.state.data}
            </div>
        

        </div>
    )
    }
}
    export default Search;