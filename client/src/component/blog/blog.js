import React, { Component } from 'react';

class Blog extends Component {
  render() {
    const extraStyle = {
      marginBottom: "4rem"
    }
    return (
      <section id="blog">
        <h2 className="section-title">Blog</h2>
        <p className="load-error" style={extraStyle}>Coming soon!</p>
      </section>
    );
  };
}

export default Blog;
