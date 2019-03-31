import React from "react";
import imges from "/Users/weekend/mid/week-12/project4-frontend/react-auth-template/src/imges/mmm.png";

class Home extends React.Component {
    render(){
        return (
            <div>
                <div>
                    <img className="logoStartPage" src={imges} alt="Logo" />
                </div>
                <div className="towButtonStartPage">
                    <button className="btn butTwo btn-outline-secondary" onClick={this.props.onSignIn} >Sign In</button> <button className="btn butTwo btn-outline-secondary" onClick={this.props.onSignUp}>Sign Up</button>
                </div>
            </div >
        )
    }
};


export default Home;
