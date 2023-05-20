import React, { useState } from 'react';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import TaskPage from './components/TaskPage';

const App = () => {
  const [storedData, setStoredData] = useState({});

  const saveData = (data) => {
    setStoredData(data);
  };

  const clearData = () => {
    if (window.confirm('Are you sure you want to clear the data?')) {
      setStoredData({});
    }
  };

  return (
    <div>
      <HomePage clearData={clearData} />
      <ContactPage saveData={saveData} />
      <TaskPage />
    </div>
  );
};

export default App;
