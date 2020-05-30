import React, { Component } from 'react';
import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
class App extends Component {
constructor(){
    super()
    this.state={
        robots:[],
        searchfield:""
    }
}
componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(Response=>Response.json()
        ).then(users=>
            this.setState({robots:users})
        )

}
onsearchChange=(event)=>{
console.log(event.target.value);
this.setState({searchfield:event.target.value});

}
render(){
const {searchfield,robots}=this.state;

const filtered= robots.filter(robot=>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
});
return !robots.length ?

    <h1>Loading...</h1>:

    
        (<div className="tc">
            <h1 className="f2">RObo Frnz</h1>
           <SearchBox searchChange={this.onsearchChange}></SearchBox> 
      <Scroll>  <CardList robots={filtered}></CardList></Scroll>    
        </div> );


   


}
}
export default App;