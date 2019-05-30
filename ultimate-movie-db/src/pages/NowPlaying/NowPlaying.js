import React from 'react';
import axios from 'axios';


const apiURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=15e1bbc41548aa6ea02bac4f092efa6f&language=en-US&page=1"

// const axios = require('axios');


var info = []

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



function NowPlaying() {

    return ( 
        <div>
            <br></br>
            <h1 className='page-name'>Now Playing</h1>  
            <br></br>
                <span><h2>{`There following movies currently playing in theatres:`}</h2></span>
                {/* <span>{getTitleNames(getTMDBdata())}</span> */}
                <span>{getNiceListofTitles(getTitleNames(getTMDBdata()))}</span>
        </div>
    )
    }
export default NowPlaying

