import React from "react";



const unauthenticatedOptions = changeActivePage => (
  <React.Fragment>
    <li className="nav-item" onClick={() => changeActivePage("sign-in")}>
      <div className="nav-link">Sign In</div>
    </li>
    <li className="nav-item" onClick={() => changeActivePage("sign-up")}>
      <div className="nav-link">Sign Up</div>
    </li>
  </React.Fragment>
);

const alwaysOptions = changeActivePage => (
  <React.Fragment>
    <li className="nav-item" onClick={() => changeActivePage("dashboard")}>
      <div className="nav-link">Dashboard</div>
    </li>
    <li className="nav-item" onClick={() => changeActivePage("addPosts")}>
      <div className="nav-link">Add post</div>
    </li>
    <li className="nav-item" onClick={() => changeActivePage("testfile")}>
      <div className="nav-link">Testfile</div>
    </li>
    <li className="nav-item" onClick={() => changeActivePage("home")}>
      <div className="nav-link">Sign Out</div>
      {/* 🔐 */}
    </li>
  </React.Fragment>
);
const authenticatedOptions = (changeActivePage, onSignout) => (
  <React.Fragment>
    <li
      className="nav-item"
      onClick={() => changeActivePage("change-password")}
    >
      <div className="nav-link">Change Password</div>
    </li>
    {/* <li className="nav-item" onClick={() => onSignout()}>
      <div className="nav-link">Sign Out</div>
    </li> */}
  </React.Fragment>
);

const Nav = ({ user, changeActivePage, onSignout, activePage }) => {
  // && activePage !== "dashboard"
  if (activePage !== "home" && activePage !== "sign-in" && activePage !== "sign-up"  ){
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">MASKN</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {alwaysOptions(changeActivePage)}

          {user
            ? authenticatedOptions(changeActivePage, onSignout)
            : unauthenticatedOptions(changeActivePage)}
          {/* {user && (
          <li className="nav-item">
            <div className="nav-link"> Hola, {user.email.split("@")[0]}</div>
          </li>
        )} */}
        </ul>
      </div>
    </nav>

   

  }else{
    return null;
  }
  }

 

export default Nav;
