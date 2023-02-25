import React from 'react';
import {
  difference,
  differenceBy,
  groupBy,
  intersectionBy,
  intersectionWith,
  isEqual,
  union,
  xor,
  xorBy,
  xorWith,
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

  console.log('xor(arrOne,arrTwo):', xorBy(arrOne, arrTwo, 'id'));
  console.log(
    "difference(union(arrOne,arrTwo) & xorBy(arrOne,arrTwo,'id'))",
    difference(union(arrOne, arrTwo), xorBy(arrOne, arrTwo, 'id'))
  );
  return <Box>{xorBy(arrOne, arrTwo, 'id').toString()}</Box>;
};
