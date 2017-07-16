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
        <hr/>
        <SubmitForm  />

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

//Form
class SubmitForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isApproved: false,
      randomText: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleSubmit(event){
    let isApprovedMessageText = '';
    if(this.state.isApproved)
      isApprovedMessageText = ' have accepted ';
    else
      isApprovedMessageText = ' have not accepted ';

    alert('You' + isApprovedMessageText + 'the license and your random text is ' + (this.state.randomText.length>0 ? this.state.randomText : '[EMPTY]'))
    event.preventDefault();
  }
  handleTextChange(event){
    this.setState({randomText: event.target.value.toUpperCase()})
  }
  handleCheckboxChange(event){
    this.setState(prevState => ( {
      isApproved: !prevState.isApproved
    }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>This is a form. Please add your name and random text.</p>
        <label>
          <input
            type="checkbox" checked={this.state.isApproved} onChange={this.handleCheckboxChange}
          />
          I accept the license terms.
        </label>
        <br/>
        <label>
          <div>
            Please enter a Random Text:
            <input
              type="text" value={this.state.randomText} onChange={this.handleTextChange}
            />
          </div>
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }

}

export default App;
