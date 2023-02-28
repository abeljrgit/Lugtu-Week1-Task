import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export const InputFormFunctional = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    error: {
      emailError: '',
      passwordError: [],
    },
    isFormValid: false,
  });

  const emailOnChangeHandler = (e) => {
    const emailValue = e.target.value;
    let isEmailValid = false;
    let emailError = '';

    //validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailValue == '') {
      isEmailValid = false;
      emailError = 'Please input your email.';
    } else if (!emailPattern.test(emailValue)) {
      isEmailValid = false;
      emailError = "Please check email's format";
    } else {
      isEmailValid = true;
      emailError = '';
    }

    setFormValue((prev) => {
      return {
        ...prev,
        email: emailValue,
        error: { ...prev.error, emailError: emailError },
        isFormValid: isEmailValid,
      };
    });
  };

  const passwordOnChangeHandler = (e) => {
    const passwordValue = e.target.value;
    let isPasswordValid = false;
    let passwordError = [];

    const atLeastOneUpperCasePattern = /(?=.*?[A-Z])/;
    const atLeastOneDigitPattern = /(?=.*?[0-9])/;
    const atLeastOneSpecialCharacterPattern = /(?=.*?[!@#$%^&*+=])/;
    const minimumOfEightCharacterPattern = /(.{8,})/;

    if (passwordValue == '') {
      isPasswordValid = false;
      passwordError.push('Please input your password.');
    } else {
      isPasswordValid = true;
    }
    if (!atLeastOneUpperCasePattern.test(passwordValue)) {
      isPasswordValid = false;
      passwordError.push('Must have at least one upper case.');
    } else {
      isPasswordValid = true;
    }
    if (!atLeastOneDigitPattern.test(passwordValue)) {
      isPasswordValid = false;
      passwordError.push('Must have at least one digit.');
    } else {
      isPasswordValid = true;
    }
    if (!atLeastOneSpecialCharacterPattern.test(passwordValue)) {
      isPasswordValid = false;
      passwordError.push('Must have at least one special character.');
    } else {
      isPasswordValid = true;
    }
    if (!minimumOfEightCharacterPattern.test(passwordValue)) {
      isPasswordValid = false;
      passwordError.push('Minimum of Eight character.');
    } else {
      isPasswordValid = true;
    }

    setFormValue((prev) => {
      return {
        ...prev,
        password: passwordValue,
        error: { ...prev.error, passwordError: passwordError },
        isFormValid: isPasswordValid,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (formValue.isFormValid) {
      alert(
        `Success!\nEmail is:${formValue.email}\nPassword is:${formValue.password}`
      );
      setFormValue({
        email: '',
        password: '',
        error: {
          emailError: '',
          passwordError: [],
        },
        isFormValid: false,
      });
    } else {
      alert('Failed to submit please check the credentials');
    }
  };

  return (
    <Box sx={{ ml: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Form Using Functional Component
      </Typography>
      <form onSubmit={onSubmitHandler}>
        <TextField
          type="text"
          value={formValue.email}
          onChange={emailOnChangeHandler}
        />
        {formValue.error.emailError !== '' ? (
          <Typography sx={{ color: 'red' }}>
            {formValue.error.emailError}
          </Typography>
        ) : (
          <Typography sx={{ color: 'red' }}>&nbsp;</Typography>
        )}
        <TextField
          type="text"
          value={formValue.password}
          onChange={passwordOnChangeHandler}
        />
        {formValue.error.passwordError.length !== 0 ? (
          formValue.error.passwordError.map((error, index) => {
            return (
              <Typography key={index} sx={{ color: 'red' }}>
                {error}
              </Typography>
            );
          })
        ) : (
          <p>&nbsp;</p>
        )}
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default InputFormFunctional;
