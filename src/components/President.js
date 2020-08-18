import React, { Component } from 'react';

export default class President extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      return (
        <div className="App">
          <h1>HELLO</h1>
          <p>{this.props.category}</p>
        </div>
      );
  }
}

