import React, { Component } from 'react';
import ProgramItem from './programItem';
import './programming.css';
import './programming-mobile.css';


class Programming extends Component {
  render() {
    let programItem = (<p className="load-error">Nothing seems to have loaded, try refreshing..</p>);
    if(this.props.programs.length !== 0) {
      programItem = this.props.programs.map(program => {
        return (
          <ProgramItem key={program.id} program={program}/>
        );
      });
    };

    return (
      <section id="programming">
          <h2 className="section-title">Programming</h2>
          <div className="programs">
            {programItem}
          </div>
      </section>
    );
  }
}

export default Programming;
