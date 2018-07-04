import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render () {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="http://icons-for-free.com/icon/download-avatar_bald_man_user_icon-162511.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Front End Web Developer</h1>
              <hr/>
              <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
