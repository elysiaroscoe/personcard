import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        console.log(props);

        // const{firstName, lastName, age, hairColor} = this.props.person;
        // console.log(firstName, lastName, age, hairColor);

        this.state = {
            age: this.props.person.age
        }
    }

    incrementAge = () => {
        console.log("increment age");
        this.setState({
            age: this.state.age + 1
        })
    }

    render(){
        return (
            <fieldset>
                <legend>PersonCard.jsx</legend>
                <h1>{this.props.person.lastName}, {this.props.person.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.person.hairColor}</p>
                <button onClick={() => this.incrementAge()}>Birthday Button for {this.props.person.firstName} {this.props.person.lastName}</button>
            </fieldset>
        )
    }
}

export default PersonCard;
