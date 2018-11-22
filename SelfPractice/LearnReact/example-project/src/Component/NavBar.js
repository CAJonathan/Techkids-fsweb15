import React, { Component } from 'react';

import SearchField from "./SearchFiled";
import logo from "../Img/Logo.jpg"
import ProfilePanel from './ProfilePanel';

class Navbar extends Component {
  render() {
    return (
        <div className="navbar">
            <div id="container">
                <SearchField />
                <div className="col-3">
                    <img className="text-center" src={logo} />
                </div>
                <ProfilePanel />
            </div>
        </div>
    );
  }
}

export default Navbar;