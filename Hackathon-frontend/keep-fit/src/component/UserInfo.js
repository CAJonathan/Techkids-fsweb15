import React, { Component } from "react";

import Image from './Image/image.png'

class UserInfo extends Component {
  render() {
    return (
        <div className="profile menu">
            <div className="profile-usermenu">
                <div className="avatar">
                    <img src={Image} alt="Avatar" className="round img-thumbnail"/>
                </div>
                <div className="information">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <p className="label col-4">Name:  </p>
                            <p className="value col-8">Đỗ Ngọc Sơn</p>
                        </li>
                        <li className="list-group-item">
                            <p className="label col-4">Age:  </p>
                            <p className="value col-8">21</p>
                        </li>
                        <li className="list-group-item">
                            <p className="label col-4">Email:  </p>
                            <p className="value col-8">dns140198@gmail.com</p>
                        </li>
                        <li className="list-group-item">
                            <p className="label col-4">Address: </p>
                            <p className="value col-8">Hà Nội</p>
                        </li>
                        <li className="list-group-item">
                            <p className="label col-4">Phone: </p>
                            <p className="value col-8">0347515999</p>
                        </li>
                        <li className="list-group-item">
                            <p className="label col-4">Facebook:  </p>
                            <p className="value col-8">https://www.facebook.com/son.ngoc.77920</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    );
  }
}

export default UserInfo;