import React, { Component } from 'react';
import './programItem.css';
import './programItem-mobile.css';

class ProgramItem extends Component {
  render() {
    const images = require.context('../images', true);
    const altText = `${this.props.program.title} logo`;

    return (
      <div className="program">
        <img src={images("./" + this.props.program.img)} alt={altText}/>
        <h3>{this.props.program.title}</h3>
        <p>{this.props.program.subtext}</p>
      </div>
    );
  }
}

export default ProgramItem;
