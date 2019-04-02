import React, { Component } from "react";
import Nav from "./components/Nav";
import "./App.css";
import { getUser, Signout } from "./services/AuthService";
import SigninForm from "./components/authForm.js/SigninForm";
import SignupForm from "./components/authForm.js/SignupForm";
import ChangePasswordForm from "./components/authForm.js/ChangePasswordForm";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Testfile from "./components/testfile";
import Addpost from "./components/authForm.js/addPost.js"
import Editpost from "./components/EditPost"
import Singlepost from "./components/singlePost"

class App extends Component {
  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }
  state = {
    user: null,
    activePage: "home",
    activeBuildingID: null,
    activeBuilding: null
  };
  componentDidMount() {
    // check if we have a token in the local storage
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }
  //my change
  handleClick() {
    console.log('Click happened');
  }
  routeChange() {
    let path = "src/components/authForm.js/SigninForm.js";
    this.props.history.push(path);
  }
  //end 
  changeActivePage = activePage => {
    this.setState({ activePage });
  };


changeActiveBulding = activeBuilding =>{
  console.log("changeActiveBulding")
  this.setState({activeBuilding});
  this.changeActivePage("singlePost");
}

// change to edit post (post_id)
// store post_id in 

  changeToEditPost = activeBuildingID => {
    this.setState({ activeBuildingID });
    this.changeActivePage("editpost");
  }


  onSignin = () => {
    this.setState({ user: getUser() });
    this.changeActivePage("dashboard");
  };
  onSignIn = () => {
    this.setState({ user: getUser() });
    this.changeActivePage("sign-in");
  };
  onSignUp = () => {
    this.setState({ user: getUser() });
    this.changeActivePage("sign-up");
  };

  onSignout = () => {
    console.log("sigin out");
    this.setState({ user: null });
    Signout();
  };
  render() {
    const { user, activePage } = this.state;
    return (
      <div>
        <Nav
          user={user}
          changeActivePage={this.changeActivePage}
          onSignout={this.onSignout} 
          activePage={activePage} />

         <div className="container">
          {activePage === "home" ? <Home onSignIn={this.onSignIn} onSignUp={this.onSignUp}/> : ""}
          {activePage === "sign-in" ? (
            <SigninForm onSignin={this.onSignin} changeActivePage={this.changeActivePage}/>
          ) : (
            ""
          )}
          {activePage === "sign-up" ? (
            <SignupForm onSignin={this.onSignin} changeActivePage={this.changeActivePage}/>
          ) : (
            ""
          )}
          {activePage === "change-password" ? (
            <ChangePasswordForm changeActivePage={this.changeActivePage}  />
          ) : (
            ""
          )}
          {
            activePage === "dashboard" ? < Dashboard changeActiveBulding={ this.changeActiveBulding }
            /> : ""
          }
          {activePage === "addPosts" ? <Addpost/> : ""}
          {activePage === "testfile" ? <Testfile/> : ""}
          {
            activePage === "singlePost" ? (
              <Singlepost buliding={this.state.activeBuilding} id={this.state.activeBuildingID}changeActivePage={this.changeActivePage} changeToEditPost={this.changeToEditPost}/> ): ""
          }
          {activePage === "editpost" ? <Editpost building={this.state.activeBuildingID} changeActivePage={this.changeActivePage}/> : ""}

        </div>
      </div>
      );
      
  }
}

export default App;

