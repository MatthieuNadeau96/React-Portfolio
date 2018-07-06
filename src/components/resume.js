import React, { Component } from 'react';

import {Grid, Cell} from 'react-mdl';

import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render () {
    return (
      <div>
        <Grid>
          <Cell col={4} style={{padding: '5%'}}>
            <div style={{textAlign: 'center'}}>
              <img src="http://icons-for-free.com/icon/download-avatar_bald_man_user_icon-162511.png"
              alt="avatar"
              style={{height: '200px', background: 'skyblue', borderRadius: '50%'}}  />
            </div>
            <h2 style={{paddingTop: '2em'}}>Matthieu Nadeau</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #707070', width: '50%'}}/>
            <p>lorem lore lorem ipsum, lorem ipsum my only ipsum. how i loved you oh so much. lorem lore lorem ipusm, my one and only ipsum.</p>
            <hr style={{borderTop: '3px solid #707070', width: '50%'}}/>
            <h5>Address</h5>
            <p>76 Bishop Ave Seekonk, MA</p>
            <h5>Phone</h5>
            <p>774-318-7641</p>
            <h5>Email</h5>
            <p>MatthieuNadeau96@gmail.com</p>
            <hr style={{borderTop: '3px solid #707070', width: '50%'}}/>
          </Cell>
          <Cell className="resume-left-col" style={{padding: '5%'}} col={8}>

            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2018}
              schoolName={"Bloc.io"}
              schoolDescription={"Mentor-led online coding bootcamp"}
              />
            <Education
              startYear={2016}
              endYear={2018}
              schoolName={"freeCodeCamp"}
              schoolDescription={"Open-source online code school"}
              />
            <hr style={{width: '100%', borderTop: '3px solid darkgrey', margin: 'auto', textAlign: 'center'}}/>

            <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear={null}
              jobName={"Front-End Developer"}
              jobDescription={"lorem lorem lorem is my favorite poem poem poem. I used to love another named ipsum but then she became lorem."}
              />
            <hr style={{width: '100%', borderTop: '3px solid darkgrey', margin: 'auto', textAlign: 'center'}}/>

            <h2>Skills</h2>
            <Skills
              skill={'HTML / CSS'}
              progress={95} />
            <Skills
              skill={'JavaScript'}
              progress={80} />
            <Skills
              skill={'AWS'}
              progress={75} />
            <Skills
              skill={'React'}
              progress={60} />
            <Skills
              skill={'NodeJS'}
              progress={50} />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
