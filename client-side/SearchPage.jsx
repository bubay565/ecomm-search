import React from 'react';
import ReactDOM from 'react-dom';
const request = require('superagent')
const payload = require('./payload.JSON')
var _ = require('lodash');


class SearchPage extends React.Component {


  render() {
    var data = payload

    request.get('http://localhost:8080/api/data', (err, res) =>{
     //could get the json from the server instead ?
    });

    let productList = [];
    for(var i = 0; i < data.length; i++ ){
       var currentProduct = data[i]
      var details = currentProduct
        console.log(currentProduct)
      productList.push(<div key={0} style={{border : 'black 1px solid', display: 'inline-block', padding: "10px",
      margin: "10px"}}>
        <img  style={{height: '70px'}} src={'http://media.4rgos.it/s/Argos/'+ details.id + '_R_SET%3Fw=220&h=220'} />
          <div> Title {details.attributes.name} </div>
        <div> Price: {details.attributes.price} </div>
        <div> StarRatings: {_.ceil(details.attributes.avgRating)} </div>
             <div> Reviews: {_.ceil(details.attributes.reviewsCount)} </div>
        <a href={"http://www.argos.co.uk/product/"+ details.id}> More Info abut the product! </a>
        <br />
        <button> <b>Add to trolley </b> </button>
         </div>)
    }

    request.get('/api/data', (err, res) =>{
      // debugger;
    });
    return (<center><h1> Argos Search Page </h1> <div>Filter by... Price, starRating and FastTrack..</div>
      <input style={{display: "block",
      "font-size": "20px"}}
      value="Seach for.." />
      {productList} </center>)
  }
}

export default SearchPage
