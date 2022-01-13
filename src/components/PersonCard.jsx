import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        console.log(props);

        // const{firstName, lastName, age, hairColor} = this.props.person;
        // console.log(firstName, lastName, age, hairColor);
    }

    render(){
        return (
            <fieldset>
                <legend>PersonCard.jsx</legend>
                <h1>{this.props.person.lastName}, {this.props.person.firstName}</h1>
                <p>Age: {this.props.person.age}</p>
                <p>Hair Color: {this.props.person.hairColor}</p>
            </fieldset>
        )
    }
}

export default PersonCard;
