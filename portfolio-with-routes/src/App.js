// App.js

import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Cool from './components/Cool';
import { projects } from './components/Projects';
import ProjectDetails from './components/ProjectDetails'

import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  state = {
    username: 'niko',
    loggedIn: false
  }

  showAlert = (word) => {
    alert(word)
  }

  render() {
    return (
      <div className="App">
        
        <button onClick={()=>this.showAlert('beans')}>Show Alert</button>


        <Navbar />
       

        <Switch>
          <Route exact path='/' component={Home}/>
          
          <Route exact path='/about' component={About}/>
          <Route exact path='/education' component={Education}/>
          <Route exact path='/cool' component={() => <Cool user={this.state.username} loggedIn={this.state.loggedIn}/>}/>
  
          <Route exact path='/projects' component={projects}/>
          
          <Route exact path="/projects/:id" component={ProjectDetails} />

        </Switch>

      </div>
    );
  }
}

export default App;