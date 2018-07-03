import React, { Component } from 'react';
import './contact.css';
import './contact-mobile.css';

class Contact extends Component {
  render() {
    return (
      <footer id="contact">
          <p>Want to get into contact with me? Great! Feel free to use any of the services below.</p>
          <div>
            <a id="linkedin" href="https://www.linkedin.com/in/henri-thibault-huyghe-aa82a2159/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
            <a id="mail" href="mailto:henrithibault.huyghe@gmail.com" target="_blank" rel="noopener noreferrer"><i class="fas fa-envelope"></i></a>
            <a id="github" href="https://github.com/HuygheHenri-Thibault" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
          </div>
          <p className="end-tag">&lt;/HUYGHE&gt;</p>
      </footer>
    );
  };
}

export default Contact;
