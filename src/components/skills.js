import React, { Component } from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {

  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex', justifyContent: 'right'}}>
            <p style={{textAlign: 'left'}}>{this.props.skill}</p>
            <ProgressBar style={{margin: 'auto', width: '55%', textAlign: 'right'}} progress={this.props.progress} />
          </div>
        </Cell>
      </Grid>
    );
  }

}

export default Skills;
