

import React, { Component } from "react";
import apiUrl from "../../apiConfig";

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
                    this.setState({
                        err: null
                    });


                }
            })
            .catch(e => console.log(e));
    };
    handleSubmit = e => {
        e.preventDefault();
        this.handlePostRequest(this.state.formData);
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
                    <input name="type"
                        className="form-control"
                        onChange={
                            this.handleChange} />

                    <label > Gender </label>
                    <input name="gender"
                        className="form-control"
                        onChange={
                            this.handleChange} />


                    < label > City </label>
                    < input name="city"
                        className="form-control"
                        onChange={
                            this.handleChange} />

                    < label > Image </label>
                    < input name="image" type="file"
                        className="form-control"
                        onChange={
                            this.handleChange
                        } />

                    <label > Description </label>   <input name="description"
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