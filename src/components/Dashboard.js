import React, { Component } from "react";
import apiUrl from "../apiConfig";
import { setJwtCookie, getUser } from "../services/AuthService";

class Dashboard extends Component {
    state = {
        buildings: []
    };
    componentDidMount() {
        let url = `${apiUrl}/buildings`;
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
                    console.log(data)
                    this.setState({
                        buildings: data.buildings
                    });


                }
            })
            .catch(e => console.log(e));
    };

    render() {
        return (
            <div className="pt-5 mt-5">
                {this.state.buildings.map((building, index) => (
                    <div className="bulidingsDashbord xxxx"
                        onClick={() => { console.log(this.props); this.props.changeActiveBulding(building) }} >
                        {/* < div className="container xxxx " > */}
                        < div className="rowDahbord textInPost" >
                            <div class="columnDashbord">
                                < img className="imageDashbord" key={index + 'type'} src={building.image} />
                                {/* <p key={index+ 'location'}> Location: {building.location}</p>
                                 <p key={index + 'type'} > Type: {building.type}</p>  */}
                                <p className="textCityDashbord" key={index + 'city'}> City:{building.city}</p>
                                <p className="textGenderDashbord" key={index + 'gender'}> Gender:{building.gender}</p>
                                {/* <p key={index + 'description'}> description:{building.description}</p> */}
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        );
    }
}



export default Dashboard;
