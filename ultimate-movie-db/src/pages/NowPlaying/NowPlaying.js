import React, { Component } from 'react';
import axios from 'axios'


// const apiKey = "https://api.themoviedb.org/3/movie/now_playing?api_key=15e1bbc41548aa6ea02bac4f092efa6f&language=en-US&page=1"

// const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=15e1bbc41548aa6ea02bac4f092efa6f')
  .then(function (response) {  
        const answer = response
        return answer
        })

  .catch(function (error) {
    // handle error
    alert(error);
  })
  .finally(function () {
    // always executed
  });

function NowPlaying(answer) {
   
    return (
        // <h1 className='page-name'>Now Playing</h1>  
        <div>{JSON.stringify(answer)}</div>
    )
    }
export default NowPlaying

