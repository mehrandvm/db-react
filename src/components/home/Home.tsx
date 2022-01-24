import React from 'react';
import useText from '../general/Text';

const Home = () => {
  const dictionary = useText();
  return <div>{dictionary('home')}</div>;
};

export default Home;
