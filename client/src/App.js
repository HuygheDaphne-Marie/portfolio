import React, { Component } from 'react';
import './App.css';
import './App-mobile.css';
import Header from './component/header/header';
import About from './component/about/about';
import Programming from './component/programming/programming';
import Projects from './component/projects/projects';
import Blog from './component/blog/blog';
import Contact from './component/contact/contact';

class App extends Component {
  constructor() {
    super();

    this.state = {
      programs: [],
      projects: []
    };
  }

  componentWillMount() {
    fetch('/api/programs')
        .then(res => res.json())
        .then(programs => this.setState({programs}));
    
    fetch('/api/projects')
        .then(res => res.json())
        .then(projects => this.setState({projects}))
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          <About/>
          <Programming programs={this.state.programs}/>
          <Projects projects={this.state.projects}/>
          <Blog/>
        </main>
        <Contact/>
      </div>
    );
  };
}

export default App;
