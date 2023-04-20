import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { showAlert } from '../store/alerts/alertsSlice';

const Alerts = ({ children, type }) => {
  const dispatch = useDispatch();

  return (
    <Stack sx={{ width: '100%', position: 'fixed' }} spacing={2}>
      <Alert
        severity={type}
        onClose={() =>
          dispatch(showAlert({ active: false, message: '', type: '' }))
        }>
        {children}
      </Alert>
    </Stack>
  );
};

export default Alerts;
