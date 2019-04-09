
// class Testfile extends React.Component 

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from "react";
import picSit from "./../imges/settings.png";
import picSitHome from "./../imges/home.png";
import picSitPlus from "./../imges/plus.png";
import picSitCall from "./../imges/phone-call.png";
import picSitEmail from "./../imges/email.png";
import picAbout from "./../imges/aboutPaper.png";
import logoFoMaskan from "./../imges/logoOfMaskn.png";



const alwaysOptions = changeActivePage => (
  <React.Fragment>
    < NavItem eventKey="home" >
      <NavIcon onClick={() => changeActivePage("dashboard")}>
        <i className="fa fa-fw fa-home  sidebar" />
        <img className="picSit" src={picSitHome} alt="Logo" />
      </NavIcon>
      <NavText onClick={() => changeActivePage("dashboard")}>
        Dashbord
            </NavText>
    </NavItem >


    < NavItem eventKey="home" >
      <NavIcon onClick={() => changeActivePage("addPosts")}>
        <i className="fa fa-fw fa-home  sidebar" />
        <img className="picSit" src={picSitPlus} alt="Logo" />

      </NavIcon>
      <NavText onClick={() => changeActivePage("addPosts")}>
        Add post
            </NavText>
    </NavItem >

    < NavItem eventKey="home" >
      <NavIcon onClick={() => changeActivePage("aboutUs")} >
        <i className="fa fa-fw fa-home  sidebar" />
        <img className="picSit" src={picAbout} alt="Logo" />

      </NavIcon>
      <NavText onClick={() => changeActivePage("aboutUs")}>
        About Us
            </NavText>
    </NavItem >



  </React.Fragment>
);
const authenticatedOptions = (changeActivePage, onSignout) => (


  <React.Fragment>


    <NavItem eventKey="charts">

      <NavIcon>
        <i className="fa fa-fw fa-line-chart " />
        <img className="picSit" src={picSit} alt="Logo" />
      </NavIcon>
      <NavText>
        SETTINGS
      </NavText>
      {/* 
      <NavItem eventKey="charts/linechart">
      <NavText onClick={() => changeActivePage("testfile")}>
      Testfile
      </NavText>
    </NavItem> */}

      {/* <NavItem eventKey="charts/barchart">
    <NavText onClick={() => changeActivePage("profile")}>
    profile
    </NavText>
  </NavItem> */}

      <NavItem eventKey="charts/linechart">
        <NavText onClick={() => changeActivePage("change-password")}>
          Change Pasword
      </NavText>
      </NavItem>
      <NavItem eventKey="charts/barchart">
        <NavText onClick={() => onSignout()}>
          Sign out
      </NavText>
      </NavItem>
    </NavItem>
    < NavItem eventKey="home" className="sidebarCall">
      <NavIcon >
        <i className="fa fa-fw fa-home sidebarCall" />
        <img className="picSit" src={picSitCall} alt="Logo" />

      </NavIcon>
      <NavIcon>
        <i className="fa fa-fw fa-home sidebarCall" />
        <img className="picSit" src={picSitCall} alt="Logo" />
      </NavIcon>
      <NavText>
        +966 55 999 6666
            </NavText>
    </NavItem >
    < NavItem eventKey="home sidebarCall" >
      <NavIcon>
        <i className="fa fa-fw fa-home sidebarCall" />
        <img className="picSit" src={picSitEmail} alt="Logo" />

      </NavIcon>

      <NavText>
        maskn@maskn.sa
            </NavText>
    </NavItem >


  </React.Fragment>


);

const NavBar = ({ user, changeActivePage, onSignout, activePage }) => {
  // && activePage !== "dashboard"
  if (activePage !== "home" && activePage !== "sign-in" && activePage !== "sign-up") {
    return <React.Fragment>
      <SideNav
        onSelect={(selected) => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">

          {alwaysOptions(changeActivePage)}
          {user
            ? authenticatedOptions(changeActivePage, onSignout)
            : ""}


          {/* <img className="picCall" src={picSitCall} alt="Logo" /> */}
        </SideNav.Nav>
      </SideNav>
      <img className="logoCss" src={logoFoMaskan} alt="Logo" />
    </React.Fragment>
  } else {
    return null;
  }

}



export default NavBar;
