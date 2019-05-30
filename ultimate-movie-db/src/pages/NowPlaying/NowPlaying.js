import React from 'react';
import axios from 'axios';


const apiURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=15e1bbc41548aa6ea02bac4f092efa6f&language=en-US&page=1"

// const axios = require('axios');


var info = []

function getTMDBdata(){
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=15e1bbc41548aa6ea02bac4f092efa6f&language=en-US&page=1')
    .then(response => JSON.stringify(response))
    .then(response => {
        info = response
    })
    .catch(function(error){
        alert(error)
    })  
    return info
}

function getTitle(str){
    var list = ''
    while(str.includes('title')){
       let indexTitle = str.indexOf('title')
       let indexPop = str.indexOf('popularity')
        let word = str.slice(indexTitle + 7,indexPop - 2)
        var newword = word.toString().replace(/\"/g, "")
        str.replace(/\title/g, "")
        return newword
       }

}

getTitle(getTMDBdata())

function NowPlaying() {

    return ( 
        <div>
        <h1 className='page-name'>Now Playing</h1>  
        <span>{getTitle(getTMDBdata())}</span>
        </div>
    )
    }
export default NowPlaying

