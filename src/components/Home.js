import React from "react";
import imges from "./../imges/mm2m.png";


class Home extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img className="logoStartPage" src={imges} alt="Logo" />

                </div>
                <div className="towButtonStartPage">
                    <button type="button" className="cssBtn" onClick={() => this.props.changeActivePage("sign-in")} >Sign In</button> <button className="cssBtn" onClick={() => this.props.changeActivePage("sign-up")}>Sign Up</button>
                </div>

            </div >
        )
    }
};


export default Home;
