import React, { Component } from 'react';
import axios from 'axios';

var info = []
var movie = '.'

function getTMDBdata(){

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
    render() {

    function getMovie(){
        movie = document.getElementById('movieSearch').value;
    }

    return (
        
        <div onLoad="initInput()">
         <br></br>
        <h1 class='page-name'>Search</h1>
        <br></br>
        <br></br>
        <span>
            <form action=''>
            <label htmlFor="movieSearch">Search for a Movie: </label>
            <br></br>
            <br></br>
            <input type="text" name="movieSearch" id="movieSearch" placeholder='moviename' value='hat'/>
            <br></br>
            <button type="submit" id="submitButton" onClick={getMovie}>Submit</button>
            </form>
            <br></br>
            <span id='1'>{getNiceListofTitles(getTitleNames(getTMDBdata()))}</span>
            <script language="javaScript" type="text/javascript">

            

            </script>
        </span>
        </div>
    )
    }
}
    export default Search;