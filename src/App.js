import React, { Component } from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'
import './App.css';

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const charList = this.state.userInput.split('').map((char, index) =>{
      return <Char character={char} key={index} clicked={ () => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
      
      <h2> Hello word </h2>

       <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput} placeholder="Type the word"/>


       <Validation inputLength={this.state.userInput.length}/>

       {charList}
      </div>
    );
  }
}

export default App;
