// NightShiftToggle.js
import React, { useState, useEffect } from 'react';

const NightShiftToggle = () => {
  const [isNightMode, setIsNightMode] = useState(() => {
    // Check local storage for night mode preference
    const savedMode = localStorage.getItem('nightMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleNightMode = () => {
    const newMode = !isNightMode;
    setIsNightMode(newMode);
    localStorage.setItem('nightMode', JSON.stringify(newMode));
  };

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [isNightMode]);

  return (
    <button onClick={toggleNightMode}>
      {isNightMode ? 'D' : 'E'}
    </button>
  );
};

export default NightShiftToggle;
