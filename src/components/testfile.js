
// class Testfile extends React.Component 

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from "react";

const Testfile = () =>
 
    
    <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home  sidebar"  />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                    <i className="fa fa-fw fa-line-chart sidebar" />
            </NavIcon>
            <NavText>
                ⚙️ settings
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                   Change Pasword
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    profile
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>





export default Testfile;
