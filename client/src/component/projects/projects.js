import React, { Component } from 'react';
import ProjectItem from './projectItem';
import './projects.css';
import './projects-mobile.css';

class Projects extends Component {
  render() {
    let projectItem = (<p className="load-error">Nothing seems to have loaded, try refreshing..</p>);
    if(this.props.projects.length !== 0) {
        projectItem = this.props.projects.map(project => {
        return (
          <ProjectItem key={project.id} project={project}/>
        );
      });
    };

    return (
        <section id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects">
                {projectItem}
            </div>
        </section>
    );
  }
}

export default Projects;
