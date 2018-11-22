import React, { Component } from 'react';
import { Container } from "reactstrap"
import axios from "axios";
import Loading from "./Components/Loading"

import logo from './logo.svg';
import Message from "./Message";
import Button from "./Button";
import Header from "./Components/Header";
import NewGame from "./Components/NewGame";
import './App.css';
import Axios from 'axios';
import PlayGame from './Components/PlayGame';
import {ROOT_API} from "./static"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showImg: false,
      message: "Hello world",
      num: 0,
      game: null,
      loading: true
    }
  }

  componentWillMount(){
    console.log("Will mount")
  }

  componentDidMount(){
    console.log("Did mount")
    if(window.location.pathname){
      const pathParams = window.location.pathname.slice(1).split("/")
      const questionId = pathParams[1]
      if(pathParams[1] && pathParams[0] === "game"){
        axios({
          url: `${ROOT_API}/api/game/${questionId}`,
          method: "GET",
        }).then(response => {
          console.log(response.data)
          if(response.data.success){
            setTimeout(() =>{
              this.setState({game: response.data.game, loading: false});
            }, 1000);
          }
        }).catch(error => {
          console.log(error);
        })
      } else{
        this.setState({loading: false, game: null})
      }
    }
  }

  addNewRow = () => {
    const {game} = this.state;
    game.scores = game.scores.map(scores => [...scores, 0]);
    axios({
      method:"PUT",
      url: `${ROOT_API}/api/game`,
      date:{
        gameId: game._id,
        scoress: game.scores
      }
    }).then(response => {
      console.log(response)
      this.setState({loading: false, game})
    }).catch(err => {
      console.log(err)
      this.setState({loading: false})
    })
    this.setState({game});
  }

  updateScore = (score, playerIndex, rowIndex) => {
    const {game} = this.state;
    game.scores[playerIndex][rowIndex] = score;

    axios({
      method:"PUT",
      url: `${ROOT_API}/api/game`,
      date:{
        gameId: game._id,
        scoress: game.scores
      }
    }).then(response => {
      console.log(response)
      this.setState({loading: false, game})
    }).catch(err => {
      console.log(err)
      this.setState({loading: false})
    })
    this.setState({game});
  }

  render() {
    const {game, loading} = this.state
    console.log("Render")
    return (
      <Container className="App container">
        <Header/>
        {loading ? <div className="text-center">
          <Loading />
        </div> : (game ? <PlayGame game={game} addNewRow={this.addNewRow} updateScore={this.updateScore}/> : <NewGame toggleLoading={() => {this.setState({loading})}}/>)}
        {/* <header className="App-header">
          {this.state.showImg ? <img src={logo} className="App-logo" alt="logo" /> : "Hidden"}
          <div>
            <Message message={this.state.message}/>
          </div>
          <div>
            <p>Click: {this.state.num}</p>
            <Button handleClick={() => {this.setState({num: this.state.num + 1})}}></Button>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </Container>
    );
  }
}

export default App;
