import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { DummyData } from '../assets';
import { filter, find, lowerCase } from 'lodash';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const queryResult = (queryString) => {
    const pattern = new RegExp(lowerCase(queryString), 'gi');
    const filteredValuesArr = filter(DummyData.userData, (obj) => {
      const condition = pattern.test(lowerCase(obj.name));
      return condition;
    });

    if (queryString.length) {
      setSearchResult([...filteredValuesArr]);
    } else {
      setSearchResult([]);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        label="Search here."
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          queryResult(e.target.value);
        }}
      />
      <Typography>{`You are searching for: ${searchQuery}`}</Typography>
      <Typography>Results:</Typography>
      <Box>
        {searchResult.length ? (
          searchResult.map((result) => {
            return (
              <Typography key={result.id}>
                {result.name}
                <br />
                {result.username}
              </Typography>
            );
          })
        ) : (
          <div>No Result</div>
        )}
      </Box>
    </Box>
  );
};
