import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Card Component
function Card(props)
{
  switch(props.name)
  {
    case "Heart":
      return <h2>{props.name}: &hearts;</h2>;
    case "Diamond":
      return <h2>{props.name}: &diams;</h2>;    
    case "Spade":
      return <h2>{props.name}: &spades;</h2>;
    default:
      return <h2>{props.name}: &clubs;</h2>;
  }

}

//List and Keys
const fruits = ['apple', 'banana', 'mango', 'orange', 'pear', 'grapes'];
function ListOfItems(props)
{
  const items = props.fruits;
  const listItems = items.map((fruit) => 
    <li key={fruit.toString()}>{fruit}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

class App extends Component {
  constructor() {
    super();
    this.heading = {
      txt: 'Main Page'
    }
  }

  //Update Event
  update(e)
  {
    this.setHeading({heading: e.target.value})
  }

  //Render the elements
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.heading.txt}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/>
        </p>
        
        Made with <Heart/>
        <hr/>
        There are 4 type of cards in the deck:
        <br/>
        <Card name="Heart" />
        <Card name="Diamond" />
        <Card name="Club" />
        <Card name="Spade" />
        <hr/>
        <Toggle/>
        <hr/>
        <ListOfItems fruits={fruits} />
      </div>
    );
  }
}

//Heart Class
class Heart extends Component {
  render() {
    return(
        <span>&hearts;</span>
    );
  }
}

//Handling Events
class Toggle extends Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this); // important to bind
  }

  handleClick() {
    this.setState(prevState => ( {
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}> 
        {this.state.isToggleOn ? 'ON': 'OFF'}
      </button>
    );
  }
}

export default App;
