import React, { Component } from 'react';
import axios from 'axios';

class FrequencyCount extends Component {
    state = {
       frequency: []
    }
    
componentDidMount = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const response = await axios.get('https://api.salesloft.com/v2/people.json', {
        headers: {
            Authorization: 'Bearer ' + API_KEY
        }
    })
    const people = response.data.data
    this.getEmails(people)
}
charSorter = (charSorterArray) => {
    let charCounter = charSorterArray
    let sortable = []
    for (var char in charCounter) {
        sortable.push([char, charCounter[char]])
    }
    sortable.sort(function(a,b) {
        return a[1] - b[1]
    })
    console.log(sortable)
    sortable.reverse()
    this.setState({ frequency: sortable })
}


charCounter = (allChars) => {
    const charSorterArray = allChars.reduce((allChars, char) => {
        if (char in allChars) { allChars[char]++ } else { allChars[char] = 1 }
        return allChars
    }, [])
    // console.log(charSorterArray)
    this.charSorter(charSorterArray)
}

splitChars = (emailArray) => {
    const newCharArray = emailArray.map((singleEmail) => {
        return (singleEmail.split(''))
    })
    const allChars = newCharArray.flat()
    this.charCounter(allChars)
}

getEmails = (people) => {
    let emailArray = []
    people.forEach((person)=> {
        const singleEmail = person.email_address
        emailArray.push(singleEmail)
    })
    this.splitChars(emailArray)
}

    render() {
        const fArray = this.state.frequency
        const frequencies = fArray.map((char, i) => {
            return (
                <div key={i}>
                   {char[0]} - {char[1]}
                </div>
            )
        })

        return (
            <div>
                {frequencies}
            </div>
        );
    }
}

export default FrequencyCount;