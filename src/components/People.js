import React, { Component } from 'react';
import axios from 'axios'

class People extends Component {
    state={
        people: []
    }

getPeople = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const peopleResponse = await axios.get('https://cors-anywhere.herokuapp.com/https://api.salesloft.com/v2/people.json', {
        headers: {
            Authorization: 'Bearer ' + API_KEY
        }
    })
    this.setState({ people: peopleResponse.data.data })
}

componentDidMount() {
    this.getPeople()
    console.log()
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