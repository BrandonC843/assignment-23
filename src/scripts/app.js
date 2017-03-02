import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

let appContainerEl = document.querySelector('#app-container')

const AllMyCongressPeopleProps = React.createClass({
   render: function(){
      console.log("-------");
      return (
         <div>
            <h1>All The Congress</h1>
            <CongressList someCongressPeople={this.props.myCongress.results}/>
         </div>
      )
   }
})


const CongressList = React.createClass({
   _createCongressJSX: function(repsObj){
      console.log(repsObj);
      let jsxArray = repsObj.map(function(userObj){
         console.log(userObj);
         return <div className = "container">

               <h3>{userObj.first_name} {userObj.last_name}</h3>
               <h4>{userObj.title} -- {userObj.party} - {userObj.state_name}</h4>
                  <ul>
                     <li>Email: {userObj.email}</li>
                     <li>Website: {userObj.website}</li>
                     <li>Facebook: {userObj.facebook_id}</li>
                     <li>Twitter: {userObj.twitter_id}</li>
                  </ul>
               <h3>Term End: {userObj.term_end}</h3>
            </div>
      })
      return jsxArray
   },

      render: function(){
         let congressNameList = this.props.someCongressPeople;
         return(
            <div>
               {this._createCongressJSX(congressNameList) }
            </div>
         )
      }
})


$.getJSON("https://congress.api.sunlightfoundation.com/legislators?callback=?").then(function(serverRes){
   ReactDOM.render(<AllMyCongressPeopleProps myCongress={serverRes}/> , appContainerEl)
})
