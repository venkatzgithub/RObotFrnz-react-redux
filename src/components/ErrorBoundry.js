import React, { Component } from 'react';

class ErrorBoundry extends Component {
constructor(){
    super()
    this.state={
        error:false
    }
}
componentDidCatch(){
this.setState({error:true})

}

render(){
    if(this.state.error)
    {
        return <h1>Oopz Gommenasai</h1>
    }

}
}
export default ErrorBoundry;