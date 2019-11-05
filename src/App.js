import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {
        selectedFile: null 
     }

    fileChangedHandler = (event) => {
        const file = event.target.files[0]
      }
      
      uploadHandler = () => {
        console.log(this.state.selectedFile)
      }
    

    render() {
        return(
            <div className="App">
                <label for="image">
                <input type="file" name="image" id="image"/>
                 <img src="http://upload.wikimedia.org/wikipedia/commons/c/ca/Button-Lightblue.svg" width="30px"/>
                </label>
            </div>
        );
    }
}

export default App;
