import React, { Component } from 'react';
import './about.css';
import './about-mobile.css';

class About extends Component {
  render() {
    const age = new Date(new Date() - new Date(1998, 2, 4)).getFullYear()-1970;
    return (
      <section id="about">
        <article>
            <img src={require('../images/portrait.png')} alt="Portrait" />
            <div>
                <h2>Hi there, my name is Henri&#8209;Thibault.</h2>
                <p>Welcome to my site. I'm a {age} year old applied computer science student at Howest College University. I am currently in my 2nd year of a 3 year bachelors degree specializing in computer & cyber security. My hobbies are gaming, writing and roleplay games. Next semester I'll be studying abroad in Austria with Erasmus which I'll be writing a blog about.</p>
            </div>
        </article>
      </section>
    );
  }
}

export default About;
