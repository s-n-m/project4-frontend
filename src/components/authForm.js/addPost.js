

import React, { Component } from "react";
import apiUrl from "../../apiConfig";
import {setJwtCookie,getUser} from"../../services/AuthService";

class Addpost extends Component {
    state = {
        formData: {
            location: null,
            type: null,
            gender: null,
            city: null,
            image: null,
            description: null
        },
        err: null
    };

    handlePostRequest = user => {
        let url = `${apiUrl}/building`;

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
                if (data.status > 200) this.setState({
                    err: data.message
                });
                else {
                    setJwtCookie(data.token);
                    this.props.changeActivePage("home");
                    this.setState({
                        err: null
                    });


                }
            })
            .catch(e => console.log(e));
    };
    handleSubmit = e => {
        console.log(this.state.formData)
        e.preventDefault();
         if (this.state.formData.location !== null && this.state.formData.type !== null && this.state.formData.gender !== null && this.state.formData.city !== null && this.state.formData.image !== null && this.state.formData.description !== null) {
        this.handlePostRequest(this.state.formData);}
        else{
            alert("complete the empty field");
        }
    };

    handleChange = ({ currentTarget }) => {
        const formData = { ...this.state.formData };
        formData[currentTarget.name] = currentTarget.value;
        this.setState({
            formData
        });
    };

    render() {
        return (<div className="pt-5 mt-5" >
            <h1> Post </h1> {this.state.err ? (<div className="alert alert-danger" > {this.state.err} </div>) : ("")}

            <form onSubmit={this.handleSubmit} >
                <div className="form-group" >

                    < label > Location </label>
                    <input name="location" className="form-control"
                        onChange={
                            this.handleChange
                        } />


                    < label > Type </label>
                    < select name = "type"
                        className="form-control"
                        onChange={
                            this.handleChange} >
                            <option name = "type" > Room </option> 
                            < option name = "type" > Roommates </option> 
                            < option name = "type" > Apartment </option> 
                                </select>



                     <label > Gender </label>
                   <select name="gender"
                       className="form-control"
                       onChange={
                           this.handleChange} >
                           < option  > Female </option>
                           < option  > Meal </option>
                           </select>

                   < label > City </label>
                   <select name="city"
                       className="form-control"
                       onChange={
                           this.handleChange} >
                           < option name = "city" > - </option>
                       < option name = "city" > Riyadh </option>
                           </select>

                    < label > Image </label>
                    < input name="image" type="url"
                        className="form-control"
                        onChange={
                            this.handleChange
                        } />

                    <label > Description </label>   <textarea name="description"
                        className="form-control"
                        onChange={
                            this.handleChange
                        } />

                </div>

                <button type="submit" className="btn btn-primary" > Add post </button>
            </form> </div>
        );
    }
}

export default Addpost;