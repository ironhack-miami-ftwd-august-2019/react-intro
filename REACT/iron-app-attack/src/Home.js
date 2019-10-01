import React, { Component } from 'react';

class Home extends Component {

    state = {
        loggedIn: true,
        animal: "gorilla",
        animals : [
            "chimpanzee",
            "giraffe",
            "platypus",
            "armadillo",
            "dog",
            "cat"
        ]
    }


    isLoggedIn = () => { 
        if(this.state.loggedIn){ //refered to my state above... 
            return <p>This is a {this.state.animal}'s home</p> // I am logged in
        } else {
            return  <p>You must log in</p> // I'm not logged in 
        }
    }

    toggleLogin = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    getRandomAnimal = () => {
        if(this.state.loggedIn){
            //let allAnimals = [ ...this.state.animals ]
            let allAnimals = this.state.animals
            let randomIndex = Math.floor(Math.random()*(allAnimals.length))
            let newAnimal = allAnimals[randomIndex]
            allAnimals.splice(randomIndex,1)
            this.setState({
                animal: newAnimal,
                animals: allAnimals
            })
        }
    }

    showListOfAnimals = () => {
        console.log(this.state.animals)
        let listOfAnimals = this.state.animals.map((eachAnimal,i)=> {
            return <li key={i}>{eachAnimal}</li>
        })
        return listOfAnimals
    }

    render() {
        return (
            <div>

                { this.isLoggedIn() }  {/** Call function on render */}    

                <button onClick={this.toggleLogin}>Toggle Login</button>   
              
                <button onClick={this.getRandomAnimal}>Random Animal</button>   
                <ul>

                 { this.showListOfAnimals() }

                </ul>

                    {/* <li>{this.state.animals[0]}</li>
                    <li>{this.state.animals[1]}</li>
                    <li>{this.state.animals[2]}</li>
                    <li>{this.state.animals[3]}</li>
                    <li>{this.state.animals[4]}</li> */}


            </div>
        );
    }
}

export default Home;