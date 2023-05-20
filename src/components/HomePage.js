import React from 'react';

const HomePage = ({ clearData }) => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={clearData}>Clear Data</button>
    </div>
  );
};

export default HomePage;
