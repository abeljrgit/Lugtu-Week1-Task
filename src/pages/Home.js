import React, { Component } from 'react';
import { LodashPractice, RandomColor, UsingHooks } from '../components';
import { Typography } from '@mui/material';

export class Home extends Component {
  render() {
    return (
      <section>
        <LodashPractice />
        <RandomColor
          child={
            <Typography variant="body2">
              This is a first div element inside RandomColor component
            </Typography>
          }
        />
        <RandomColor
          child={
            <Typography variant="body2">
              This is a second div element inside RandomColor component
            </Typography>
          }
        />
        <UsingHooks />
      </section>
    );
  }
}
