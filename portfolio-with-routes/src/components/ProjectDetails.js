// components/ProjectDetails.js

import React from 'react';
import { myProjects } from './Projects';
import { Link } from 'react-router-dom';

class projectDetails extends React.Component {

  componentDidMount() {
    console.log('fetch the project with the id ',  this.props.match.params.id)
    
  }
  render(){
      return (
        <div>the details from database </div>
      )
  }
}

export default projectDetails