import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
  render () {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell md={12}>
            <h2>Matthieu Nadeau</h2>
            <img
              src="http://icons-for-free.com/icon/download-avatar_bald_man_user_icon-162511.png"
              alt="avatar"
              style={{height: '250px'}}
              />
            <p>Don't be afraid to check me out or say hello!</p>
            <div className="social-links">
              <a href="https://github.com/MatthieuNadeau96" target="_blank"><i class="fab fa-github"></i></a>
              <a href="https://www.instagram.com/matthieu.codes/" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/matthieu-nadeau-28321013a/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
              <a href="https://codepen.io/uMatthieu/" target="_blank"><i class="fab fa-codepen"></i></a>
              <a href="https://medium.com/@matthieunadeau" target="_blank"><i class="fab fa-medium"></i></a>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
