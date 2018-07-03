import React, { Component } from 'react';
import './projectItem.css';
import './projectItem-mobile.css';

class ProjectItem extends Component {
  render() {
    const images = require.context('../images', true);
    const style = {
      backgroundImage: 'url('+ images("./" + this.props.project.img) +')',
    }
    
    return (
      <article className="project" style={style}>
        <div>
          <h3>{this.props.project.title}</h3>
          <p>{this.props.project.subtext}</p>
        </div>
      </article>
    );
  }
}

export default ProjectItem;
