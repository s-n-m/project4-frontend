import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { setJwtCookie, getUser } from "../services/AuthService";

class Editpost extends Component {
    state = {
        formData: {
            location: "",
            type: "",
            gender: "",
            city: "",
            image: "",
            description: ""
        },
        err: null
    };

    componentDidMount() {
        let url = `${apiUrl}/building/${this.props.building.id}`;
        console.log(url);
        fetch(url, {
            mode: "cors",
            credentials: "include",
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.status > 299) this.setState({
                    err: data.message
                });
                else {
                    setJwtCookie(data.token);
                    this.setState({
                        formData: {
                            location: data.building.location,
                            type: data.building.type,
                            gender: data.building.gender,
                            city: data.building.city,
                            image: data.building.image,
                            description: data.building.description,
                        }
                    });
                }
            })
            .catch(e => console.log(e));
    };

    handleUpdateRequest = building => {
        let url = `${apiUrl}/building/${this.props.building.id}`;

        console.log(url);
        fetch(url, {
            mode: "cors",
            credentials: "include",
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ building })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status > 200) this.setState({
                    err: data.message
                });
                else {
                    setJwtCookie(data.token);
                    this.props.changeActivePage("dashboard");
                    this.setState({
                        err: null
                    });
                }
            })
            .catch(e => console.log(e));
    };
    handleSubmit = e => {
        e.preventDefault();
        this.handleUpdateRequest(this.state.formData);

    };

    handleChange = (
        { currentTarget }) => {
        const formData = { ...this.state.formData };
        formData[currentTarget.name] = currentTarget.value;
        this.setState({
            formData
        });
    };

    render() {
        return (<div className="pt-5 mt-5" >
            <h1 className="h1Addpost"> Edit Post </h1> {this.state.err ? (<div className="alert alert-danger" > {this.state.err} </div >) : ("")
            }

            <form onSubmit={this.handleSubmit} >
                <div className=" pageInfoDashbord " >
                    <div className=" textInPost" >
                        <div className="form-group" >

                            <label > Email </label>
                            <input required name="email" className="form-control" value={this.state.formData.email} onChange={this.handleChange} />


                            <label > Location </label>
                            <input required name="location" className="form-control" value={this.state.formData.location} onChange={this.handleChange} />



                            <label > Type </label>
                            <select required name="type" className="form-control" onChange={this.handleChange} value={this.state.formData.type}>
                                < option name="type"  > Room </option>
                                < option name="type"  > Roommates </option>
                                < option name="type"  > Apartment </option>
                            </select>



                            <label > Gender </label>
                            < select required name="gender" className="form-control" onChange={this.handleChange} value={this.state.formData.gender} >
                                <option> Female </option>
                                <option> Meal </option>
                            </select>

                            <label> City </label>
                            < select required name="city" className="form-control" onChange={this.handleChange} value={this.state.formData.city} >
                                <option name="city" > - </option>
                                <option name="city" > Riyadh </option>
                            </select>


                            <label > Image </label>
                            < input required name="image"
                                type="url"
                                className="form-control"
                                onChange={this.handleChange} value={this.state.formData.image} />

                            <label > Description </label>
                            < textarea required name="description"
                                className="form-control"
                                onChange={this.handleChange} value={this.state.formData.description} />

                        </div>
                    </div>
                </div>

                <button className="cssBtnBackEdit" onClick={() => this.props.changeActivePage("singlePost")}> Back </button>    <button type="submit" className="cssBtnEditPost" > Edit post </button>


            </form>
        </div >
        );
    }
}

export default Editpost;