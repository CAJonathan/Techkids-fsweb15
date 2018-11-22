import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from "./axios";
import NavBar from "./Component/NavBar";


class App extends Component {
  state = {
    images: []
  }

  componentDidMount(){
    axios
    .get("/api/images")
    .then(data => {
      this.setState({images: data.data})
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
