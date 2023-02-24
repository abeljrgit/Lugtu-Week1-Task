import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import { Card } from '@mui/material';

export class RandomColor extends Component {
  state = {
    colorArr: ['#F99417', '#C92C6D', '#3C84AB'],
  };

  render() {
    const randomColorValue = Math.floor(Math.random() * 3);

    return (
      <Card
        sx={{
          backgroundColor: `${this.state.colorArr[randomColorValue]}`,
          height: '150px',
          width: '150px',
          p: '16px',
          mb: '10px',
        }}
      >
        {this.props.child}
      </Card>
    );
  }
}

RandomColor.propTypes = {
  child: PropsTypes.element,
};
