import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'

class Cool extends Component {

    componentDidMount() {
        console.log('get all my cool data')
    }
    componentWillUnmount(){
        //alert('please dont leave')
    }

    render() {
        return (
            <div>


                {this.props.loggedIn ? 

                <div>Cool {this.props.user}</div>

                :
                    <Redirect to="/about"/>
                }

                
            </div>
        );
    }
}

export default Cool;