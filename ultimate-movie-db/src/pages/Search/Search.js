import React, { Component } from 'react';
import axios from 'axios';
import { MapsLocalLaundryService } from 'material-ui/svg-icons';

var info = []



function getTMDBdata(vid){

  axios.get('https://api.themoviedb.org/3/search/movie?query=' + vid + '&api_key=15e1bbc41548aa6ea02bac4f092efa6f&language=en-US&page=1&include_adult=false')
 
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
  for(let i = 0; i < list2.length + 1; i ++){
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
  return list.map((item)=>{
    return <p>{item}</p>

  
})
}


class Search extends Component {


    constructor(props){
        super(props);
        this.state = {
          data: 'Type Here',
        }
      }

      handleChange = event => {
        this.setState({ data: event.target.value });
     };



    // getData(){
    //     setTimeout(() => {
    //       this.setState({
    //         data: ''
    //       })
    //     }, 1000)
    //   }

    // componentDidMount(){
    //     this.getData();
    //   }

   
    render() {
    return (
      <React.Fragment>
        <div>
         <br></br>
        <h1 class='page-name'>Search</h1>
        <br></br>
        <br></br>
        <span>
            <form >
            <label htmlFor="movieSearch">Search for a Movie: </label>
            <br></br>
            <br></br>
            <input type="text"  value={this.state.data} name="movieSearch" onChange={this.handleChange} id="movieSearch" placeholder='moviename' />
            <br></br>
            <span>
            </span>

            </form>
            <br></br>
            <table class = "movieTable">
            <div id='1'>
            {getNiceListofTitles(getTitleNames(getTMDBdata(this.state.data)))}
            </div>
            </table>
        </span>

            <div>
{/*         
           {this.state.data}  */}
            </div>
        

        </div>
      </React.Fragment>
    )
    }
}
    export default Search;