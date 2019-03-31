import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import { setUser } from "../../services/AuthService";
import homeSing from "/Users/weekend/mid/week-12/project4-frontend/react-auth-template/src/imges/hi22.gif";

class SigninForm extends Component {
  state = {
    user: null,
    activePage: "home",
    formData: {
      email: null,
      password: null
    },
    err: null
  };
  handleLoginRequest = user => {
    let url = `${apiUrl}/sign-in`;

    console.log(url);
    fetch(url, {
      mode: "cors",
      credentials: "include",
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status > 200) this.setState({ err: data.message });
        else {
          this.setState({ err: null });
          setUser(data);
          this.props.onSignin();
        }
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
      <div className="pt-5 mt-5">
        {this.state.err ? (
          <div className="alert alert-danger"> {this.state.err} </div>
        ) : (
            ""
          )}
          
        <div class="container">
          <div class="row">
            <img class="col-sm" className="pucHomeSing" src={homeSing} alt="Logo" />
            <form class="col-sm" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label className="textUpInput" >Email </label>
              <input
                name="email"
                className="form-control formSingn"
                onChange={this.handleChange}
              />
                <label className="textUpInput" >Password</label>
              <input
                name="password"
                className="formSingn form-control "
                type="password"
                onChange={this.handleChange}
              />
            </div>
              <div class="container">
                <div class="row">
                  <button class="col-sm" onClick={() => this.props.changeActivePage("home")} className="btn btn-primary backButtonSing">Back</button>
                  <button class="col-sm" type="submit" className="btn btn-primary twoButtonSing ">Sing In</button>
                </div>
              </div>
          </form>
        </div>
  
</div>
      </div>
    );
  }
}

export default SigninForm;
