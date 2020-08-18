import React, { Component } from 'react';
import './App.css';
import President from './components/President';

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      activeView: "App",
      apiResponse: '',
      choice: null
    };
    //This is currently hardcoded and but should eventually be fluid.
    this.categories = ["Words", "People", "Initials", "Movies", "Dates"];
  }

  chooseCategory() {
    const RandomNumber = Math.floor(Math.random() * 5);
    this.setState({
      choice: this.categories[RandomNumber]
    })
  }

  president(){
    this.setState({
      activeView: "President"
    })
  }


  render() {
    switch (this.state.activeView) {
      case "President":
        return (<President category={this.state.choice}/>);
      default:
        return (
          <div className="App">
            <h1>Category</h1>
            <button type="submit" onClick={() => this.chooseCategory()}>Click to Get Category</button>
            <p>{this.state.choice}</p>
            <button type="submit" onClick={() => this.president()}>NEXT</button>
          </div>
        );
    }
  }
}

