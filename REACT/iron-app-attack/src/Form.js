import React, { Component } from 'react';

class Form extends Component {

    state = {
    }

    setForm = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        //axios.post(/addMovie, {movieName: this.state.title}) 
    }

    render() {
        return (
            <div>
            <h2>{this.state.title}</h2>
            <h2>{this.state.director}</h2>
            <h2>{this.state.year}</h2>

            <form onSubmit={this.handleFormSubmit}>
                <label>Title:</label>
                <input type="text" name="title" onChange={this.setForm} />
                <input type="text" name="director" onChange={this.setForm} />
                <input type="text" name="year" onChange={this.setForm} />
                <input type="text" name="JT" onChange={this.setForm} />

                <input type="submit" value="Submit" />
            </form>
          </div>
        );
    }
}

export default Form;