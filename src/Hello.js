import React from 'react';
import './Hello.css';
 
class Hello extends React.Component {
  render() {
    return (
      <div >
        <header >
          <p>Test</p>
    <p>{this.props.greeting}</p>
        </header>
      </div>
    );
  }
}
 
export default Hello;