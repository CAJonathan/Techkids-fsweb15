import React, { Component } from 'react';
import NavBar from "./component/NavBar"
import Footer from "./component/Footer"
import UserInfo from "./component/UserInfo"
import InfoDetails from "./component/InfoDetails/InfoDetails"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="row">
          <div className="col-sm-12 col-md-4 rounded">
            <UserInfo/>
        </div> 
          <div className="col-md-8 rounded">
            <div className="profile content">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Thiet lap tai khoan</a>
                    </li>
                </ul>
            </div>
            <InfoDetails/>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;
