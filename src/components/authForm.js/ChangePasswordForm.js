import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { getUser } from "../../services/AuthService";
import picChangePassowrd from "../../imges/sucrity.gif"
class ChangePasswordForm extends Component {
  state = {
    formData: {
      old: null,
      new: null
    },
    err: null
  };

  handleLoginRequest = passwords => {
    let url = `${apiUrl}/change-password`;

    console.log({ email: getUser().email, passwords });
    console.log(url);
    fetch(url, {
      method: "PATCH",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: getUser().email, passwords })
    })
      .then(res => res.json())
      .then(data => {
        this.props.changeActivePage("home");
      })
      .catch(e => console.log(e));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.handleLoginRequest(this.state.formData);
  };

  handleChange = ({ currentTarget }) => {
    const formData = { ...this.state.formData };
    formData[currentTarget.name] = currentTarget.value;
    this.setState({ formData });
  };

  render() {
    return (
      <div class="container formChangPas">
        <div class="row">
          <img class="col-sm" className="pucHomeSing" src={picChangePassowrd} alt="Logo" />
      <div className="pt-5 mt-5  textCangePass">
            <h1 className="changeH1">Change Password</h1>
            <form class="col-sm "onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Old Password</label>
            <input
              name="old"
              className="form-control"
              type="password"
              onChange={this.handleChange}
            />
            <label>new Password </label>
            <input
              name="new"
              type="password"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>

              <button type="submit" className="btn btn-primary butChang">Change Password</button>
          
        </form>
      </div>
      </div>
      </div>
    );
  }
}

export default ChangePasswordForm;
