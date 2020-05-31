import React, { Component } from 'react';
import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
//import Actions from "../Action";
import {connect} from "react-redux";
import {setSearchField} from "../Action"
const mapStateToProps = (state) => {
    return {
      searchfield: state.searchField,
 }
}
const mapDispatchToProps = (dispatch) => {

    return {
        
      onSearchChange: (event) => {console.log(event.target.value);dispatch(setSearchField(event.target.value))
      }
    }
  }
class App extends Component {
constructor(){
    super()
    this.state={
        robots:[]
     
    }
}

componentDidMount(){
    console.log(this.props);
    fetch("https://jsonplaceholder.typicode.com/users").then(Response=>Response.json()
        ).then(users=>
            this.setState({robots:users})
        )

}

render(){
const {robots}=this.state;
const {searchfield, onSearchChange}=this.props;
const filtered= robots.filter(robot=>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
});
return !robots.length ?

    <h1>Loading...</h1>:

    
        (<div className="tc">
            <h1 className="f2">RObo Frnz</h1>
           <SearchBox searchChange={onSearchChange}></SearchBox> 
      <Scroll>  <CardList robots={filtered}></CardList></Scroll>    
        </div> );


   


}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);