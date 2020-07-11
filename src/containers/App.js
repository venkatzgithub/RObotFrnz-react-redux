import React, { Component } from 'react';
import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
//import Actions from "../Action";
import {connect} from "react-redux";
import {setSearchField,requestRobots} from "../Action"
const mapStateToProps = (state) => {
    console.log("mapStateToProps");
    return {
      searchField: state.searchRobots.searchField,
      robots: state.requestRobots.robots,
      isPending: state.requestRobots.isPending,
      error: state.requestRobots.error
 }
}
const mapDispatchToProps = (dispatch) => {
  console.log("outsidemapDispatchToProps");
    return {
        
      onSearchChange: (event) => {console.log("Value"+event.target.value);dispatch(setSearchField(event.target.value))
        console.log("mapDispatchToProps");
      },
      
      onRequestRobots: () => {console.log("onRequestRobots");dispatch(requestRobots());console.log("apimapDispatchToProps");}
    }
    
  }
class App extends Component {


componentDidMount(){
   
    this.props.onRequestRobots();

}

render(){
  console.log("render");
  console.log(this.props);

const {searchField, onSearchChange,robots,isPending,error}=this.props;
const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
return isPending ?

    <h1>Loading...</h1>:

    
        (<div className="tc">
            <h1 className="f2">RObo Frnz</h1>
           <SearchBox searchChange={onSearchChange}></SearchBox> 
      <Scroll>  <CardList robots={filteredRobots}></CardList></Scroll>    
        </div> );

}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);