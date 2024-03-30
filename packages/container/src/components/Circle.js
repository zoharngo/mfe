import React, { useState } from 'react';

const CircleAnimation = () => {
  const [color, setColor] = useState('blue');

  const handleClick = () => {
    setColor(color === 'blue' ? 'red' : 'blue');
  };

  const circleStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: color,
    transition: 'background-color 0.5s ease', // CSS transition property
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={circleStyle}></div>
      <br />
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
};

export default CircleAnimation;
