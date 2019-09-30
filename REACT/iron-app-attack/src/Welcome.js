import React, { Component } from 'react';

class Welcome extends Component {

    mapTheGuesses = () => {
        let mapOfGuesses = this.props.theGuesses.map((eachGuess,i)=>{
            return(
                <li style={this.props.theStylez} key={i}>{eachGuess}</li>
            )
        })
        return mapOfGuesses;
    }


    render() {
        console.log(this)
        return (
            <div>
                Welcome!@#$%^* 
                <div onClick={this.props.gorilla} >{this.props.theUsername} VS {this.props.theplayerTwo}</div>
                {/* <p>{this.props.theGuesses[0]}</p>
                <p>{this.props.theGuesses[1]}</p>
                <p>{this.props.theGuesses[2]}</p>
                <p>{this.props.theGuesses[3]}</p>
                <p>{this.props.theGuesses[4]}</p> */}
                {this.mapTheGuesses()}
            </div>
        );
    }
}

export default Welcome;