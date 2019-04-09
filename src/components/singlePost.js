import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { setJwtCookie, getUser } from "../services/AuthService";

class Singlepost extends Component {

    DeletePost = () => {

        let url = `${apiUrl}/building/${this.props.buliding.id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        }).then(d => d.json())
            .then(d => {
                this.props.changeActivePage("dashboard")
                console.log()
            })
            .catch(e => console.log())
    }
    render() {
        let buttons;
        if (getUser() !== null && getUser().id === this.props.buliding.user_id) {

            buttons = (
                <div>
                    <button className="cssBtnBackSingle" onClick={() => this.props.changeActivePage("dashboard")}> Back </button>
                    <button className="editButCss" onClick={() => this.props.changeToEditPost(this.props.buliding)} > Edit </button>
                    <button className="delButCss" onClick={this.DeletePost}> Delete </button>
                </div>
            )
        } else {
            buttons = (
                <div>
                    <button className="cssBtnBackSingleElse" onClick={() => this.props.changeActivePage("dashboard")}> Back </button>
                </div>
            )
        }

        return (

            <div className="pt-5 mt-5" >

                <div className="container pageInfoDashbord " >
                    <div className="row textInPost" >
                        <img className="imageSingelPage" src={this.props.buliding.image} />
                        <p className="borderWide" > Location: {this.props.buliding.location}</p>
                        <p className="borderWide"> Type: {this.props.buliding.type} </p>
                        <br></br>
                        <p className="borderWide"> Gender: {this.props.buliding.gender} </p>
                        <br></br>
                        <p className="borderWide" > City: {this.props.buliding.city} </p>
                        <br></br>
                        <p className="borderWide" > description: {this.props.buliding.description} </p>
                        < p className="borderWide" > email: {this.props.buliding.User.email} </p>
                    </div>
                    <div className="EditDelete">

                        {buttons}
                    </div>



                </div>
            </div>
        )
    }

}
export default Singlepost;