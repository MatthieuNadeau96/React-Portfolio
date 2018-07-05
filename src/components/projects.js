import React, { Component } from 'react';

import {Tabs, Tab, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import { Row, Col } from 'react-flexbox-grid';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return(
        <div style={{width: '80%', margin: 'auto'}}>
          <Row className="projects-grid">
            {/* Project 1 */}
            <Col sm={4}>
              <Card className="project-card" shadow={0} style={{width: '1fr', margin: 'auto'}}>
                  <CardTitle style={{
                      color: '#fff',
                      height: '175px',
                      background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover',
                      objectFit: 'cover'
                    }}>React Project #1</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                      <Button href="https://github.com/MatthieuNadeau96" target="_blank" colored>GitHub</Button>
                      <Button href="https://codepen.io/uMatthieu/" target="_blank" colored>Codepen</Button>
                      <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>
            </Col>
            {/* Project 2 */}
            <Col sm={4}>
              <Card className="project-card" shadow={0} style={{width: '1fr', margin: 'auto'}}>
                  <CardTitle style={{
                      color: '#fff',
                      height: '175px',
                      background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover',
                      objectFit: 'cover'
                    }}>React Project #1</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                      <Button href="https://github.com/MatthieuNadeau96" target="_blank" colored>GitHub</Button>
                      <Button href="https://codepen.io/uMatthieu/" target="_blank" colored>Codepen</Button>
                      <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>
            </Col>
            {/* Project 3 */}
            <Col sm={4}>
              <Card className="project-card" shadow={0} style={{width: '1fr', margin: 'auto'}}>
                  <CardTitle style={{
                      color: '#fff',
                      height: '175px',
                      background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover',
                      objectFit: 'cover'
                    }}>React Project #1</CardTitle>
                  <CardText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris sagittis pellentesque lacus eleifend lacinia...
                  </CardText>
                  <CardActions border>
                      <Button href="https://github.com/MatthieuNadeau96" target="_blank" colored>GitHub</Button>
                      <Button href="https://codepen.io/uMatthieu/" target="_blank" colored>Codepen</Button>
                      <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                  </CardMenu>
              </Card>
            </Col>
          </Row>
        </div>
      )
    } if (this.state.activeTab === 1) {
      return(
        <div>
          <h1>JavaScript</h1>
        </div>
      )
    } if (this.state.activeTab === 2) {
      return(
        <div>
          <h1>Alexa Skills</h1>
        </div>
      )
    }
  }

  render () {
    return (
      <div className="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
              <Tab>React</Tab>
              <Tab>JavaScript</Tab>
              <Tab>Alexa Skills</Tab>
          </Tabs>
          <div className="projects-content">{this.toggleCategories()}</div>
      </div>
    )
  }
}

export default Project;
