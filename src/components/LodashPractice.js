import React from 'react';
import {
  difference,
  filter,
  flatten,
  flattenDeep,
  includes,
  some,
  union,
  uniq,
  xorBy,
} from 'lodash';
import { Box } from '@mui/material';

export const LodashPractice = () => {
  const arrOne = [
    {
      id: 20,
      name: 'alex',
    },
    {
      id: 30,
      name: 'alina',
    },
  ];

  const arrTwo = [
    {
      id: 40,
      name: 'hello',
    },
    {
      id: 30,
      name: 'world',
    },
  ];

  const str = ['u', 'ec'];
  const arr = [
    { storageVal: 'u', table: ['E', 'F'] },
    { storageVal: 'data', table: ['E', 'F'] },
    { storageVal: 'ec', table: ['E'] },
  ];

  // Question 4-a
  console.log('4-a result 1:', xorBy(arrOne, arrTwo, 'id'));
  console.log(
    '4-a result 2:',
    difference(union(arrOne, arrTwo), xorBy(arrOne, arrTwo, 'id'))
  );

  // Question 4-b
  const filteredObjects = filter(arr, (arrObj) => {
    return includes(str, arrObj.storageVal);
  });
  console.log(
    '4-b result:',
    filteredObjects.map((filteredObj) => filteredObj.table)
  );

  // Question 4-c
  const a = [['E'], ['F']];
  console.log('4-c result:', flatten(a));

  // Question 4-d
  const t = [
    ['E', 'F'],
    [['F'], ['G']],
  ];
  console.log('4-d result:', uniq(flattenDeep(t)));

  return (
    <Box>
      This text if from lodash practice, please check the console for the
      answer.
    </Box>
  );
};
