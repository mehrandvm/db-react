import { Button, TextField } from '@mui/material';
import React from 'react';
import axiosInstance from '../apis/axiosConfig';

const Createuser = () => {
  const [id, setId] = React.useState('');
  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  const [name, setName] = React.useState('');
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const [phone, setPhone] = React.useState('');
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const submit = () => {
    axiosInstance
      .post('http://localhost:3000/user', { id, name, phone })
      .then(() => {
        console.log('ok');
      })
      .catch(() => {
        console.log('error');
      });
  };

  return (
    <div>
      <TextField
        id="outlined-name"
        label="ID"
        value={id}
        onChange={handleIdChange}
      />
      <TextField
        id="outlined-name"
        label="Name"
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        id="outlined-name"
        label="phone"
        value={phone}
        onChange={handlePhoneChange}
      />
      <Button color="primary" variant="contained" onClick={submit}>
        {'Submit'}
      </Button>
    </div>
  );
};

export default Createuser;
