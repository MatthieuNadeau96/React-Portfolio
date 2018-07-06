import React, { Component } from 'react';
import './App.css';
import { Content, Layout, Header, Navigation, Drawer } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/">Matthieu</Link>} scroll>
                <Navigation>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/aboutme" className="link">About</Link>
                    <Link to="/projects" className="link">Projects</Link>
                    <Link to="/resume" className="link">Resume</Link>
                    <Link to="/contact" className="link">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Matthieu">
                <Navigation>
                    <Link to="/" className="link">Home</Link>
                    <Link to="/aboutme">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
