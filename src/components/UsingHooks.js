import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';

export const UsingHooks = () => {
  const [arrayOfObjects, setArrayOfObjects] = useState([
    {
      id: 1,
      name: 'Abel',
      address: 'Philippines',
    },
    {
      id: 2,
      name: 'John',
      address: 'USA',
    },
    {
      id: 3,
      name: 'Lei Fi',
      address: 'China',
    },
  ]);

  const changeSecondIndex = () => {
    setArrayOfObjects((prev) => {
      const x = prev;
      if (x[1].name === 'John') {
        x[1].name = 'Lea';
      } else {
        x[1].name = 'John';
      }

      return [...x];
    });
  };

  const changeTwoPropertyValues = () => {
    setArrayOfObjects((prev) => {
      const x = prev;
      if (x[0].name === 'Abel') {
        x[0].name = 'Lugtu';
        x[0].address = 'Philippinessssss';
      } else {
        x[0].name = 'Abel';
        x[0].address = 'Philippines';
      }

      return [...x];
    });
  };

  return (
    <Box sx={{ backgroundColor: 'green', p: '8px' }}>
      <Typography variant="h6">Using Hook</Typography>
      <Box sx={{ backgroundColor: 'yellow', p: '8px', mb: '10px' }}>
        {arrayOfObjects.map((obj) => {
          return (
            <Box
              key={obj.id}
              sx={{ backgroundColor: 'lightBlue', p: '8px', mb: '10px' }}
            >
              {obj.id}
              <br />
              {obj.name}
              <br />
              {obj.address}
            </Box>
          );
        })}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          variant="contained"
          onClick={changeSecondIndex}
          sx={{ mb: '10px' }}
        >
          Change second index
        </Button>
        <Button variant="contained" onClick={changeTwoPropertyValues}>
          Update 2 property values
        </Button>
      </Box>
    </Box>
  );
};
