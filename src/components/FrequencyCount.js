import React, { Component } from 'react';
import axios from 'axios';

class FrequencyCount extends Component {
    state = {
       
    }
componentDidMount = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const response = await axios.get('https://cors-anywhere.herokuapp.com/https://api.salesloft.com/v2/people.json', {
        headers: {
            Authorization: 'Bearer ' + API_KEY
        }
    })
    const people = response.data.data
    this.getEmails(people)
}

getEmails = (people) => {
    let emailArray = []
    people.forEach((person)=> {
        const singleEmail = person.email_address
        emailArray.push(singleEmail)
    })
    console.log(emailArray)
}
    render() {

        return (
            <div>
                
            </div>
        );
    }
}

export default FrequencyCount;