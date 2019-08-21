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
        let people = this.state.people
        const peopleNames = people.map((person, i) => {
            return (
                <div key={i}>{person.display_name}</div>
            )
        }
        )

        return (
            <div>
                {peopleNames}
            </div>
        );
    }
}

export default People;