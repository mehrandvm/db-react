import React from 'react';
import useText from '../general/Text';

const Login = () => {
  const dictionary = useText();
  return <div>{dictionary('login')}</div>;
};

export default Login;
