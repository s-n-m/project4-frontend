import React, { Component} from "react";
import apiUrl from "../apiConfig";
import {setJwtCookie,getUser} from "../services/AuthService";

class Singlepost extends Component {

    DeletePost = () => {
      
        let url = `${apiUrl}/building/${this.props.buliding.id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        }).then(d => d.json())
        .then(d => console.log())
        .catch(e => console.log())
    }
    render() {
        return ( 
        <div className = "pt-5 mt-5" > 
                   
                    <div className = "container xxxx " >
                    <div className = "row textInPost" >
                    <img src={this.props.buliding.image}/>  
                    <p > Location: {this.props.buliding.location}</p> 
                    <p> Type: {this.props.buliding.type} </p>
                     <p> Gender: {this.props.buliding.gender} </p> 
                    < p > City: {this.props.buliding.city} </p> 
                    < p > description: { this.props.buliding.description} </p> 
                   </div>
                <button className="btn btn-primary" onClick={() => this.props.changeToEditPost(this.props.buliding)} > Edit </button>
                <button className="btn btn-primary"  onClick={this.DeletePost}> Delete </button>

                   </div>
            </div> 
        )
    }
    
}
export default Singlepost;