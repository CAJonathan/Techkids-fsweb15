import React, { Component } from "react";

class UserDetails extends Component {
  render() {
    return (
      <div className="shadow-none p-3 mb-5 bg-light rounded">
        <h1>INDEX</h1>
        <div style={{marginLeft: "2%"}}>
          <form>
            <div className="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Weight</label>
              <div className="col-sm-10">
                  <input type="number" class="form-control" placeholder="Weight"/>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword" className="col-sm-2 col-form-label">Height</label>
              <div className="col-sm-10">
                <input type="number" className="form-control" placeholder="Height"/>
              </div>
            </div>
          </form>
        </div>   

        <h1>ACTIVITY</h1>
        <div style={{marginLeft: "2%"}}>
          <form>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Goal</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label for="inputPassword" class="col-sm-2 col-form-label">Degree</label>
              <select className="custom-select form-control">
                  <option selected>Degree</option>
                  <option value="1">High (less than 2h/week)</option>
                  <option value="2">Medium (2 - 5h/week)</option>
                  <option value="3">Low (greater than 5h/week)</option>
              </select>
            </div>
            <div className="form-group">
              <label for="inputPassword" class="col-sm-2 col-form-label">Type</label>
              <select className="custom-select form-control">
                <option selected>Type</option>
                <option value="1">Cardio</option>
                <option value="2">Weight Training</option>
                <option value="3">Yoga</option>
              </select>
            </div>
          </form>
        </div>    
      </div> 
    );
  }
}

export default UserDetails;