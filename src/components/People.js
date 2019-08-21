import React, { Component } from 'react';
import axios from 'axios'



class People extends Component {
    state={
        people: []
    }

getPeople = async () => {
    const API_KEY = process.env.API_KEY
    const peopleResponse = await axios.get(`https://developers.salesloft.com/${API_KEY}/People/get_v2_people_json`)
    this.setState({
        people: peopleResponse.data
    })
}

componentDidMount() {
    this.getPeople()
}

    render() {
        return (
            <div>
                hello
            </div>
        );
    }
}

export default People;