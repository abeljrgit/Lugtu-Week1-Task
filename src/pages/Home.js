import React, { Component } from 'react';
import {
  LodashPractice,
  RandomColor,
  SearchBar,
  UsingHooks,
} from '../components';
import { Box, Typography } from '@mui/material';

export class Home extends Component {
  render() {
    return (
      <section>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ mr: '20px' }}>
            <LodashPractice />
            <Box sx={{ display: 'flex' }}>
              <RandomColor
                child={
                  <Typography variant="body2">
                    This is a first div element inside RandomColor component
                  </Typography>
                }
              />
              <Box sx={{ mr: '20px' }} />
              <RandomColor
                child={
                  <Typography variant="body2">
                    This is a second div element inside RandomColor component
                  </Typography>
                }
              />
            </Box>
            <UsingHooks />
          </Box>
          <SearchBar />
        </Box>
      </section>
    );
  }
}
