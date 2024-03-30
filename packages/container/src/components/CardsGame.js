import React, { useEffect } from 'react';
import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(10);
  const [clearIntervalLoop, setClearIntervalLoop] = useState(null);

  useEffect(() => {
    if (counter === 0) {
      clearInterval(clearIntervalLoop);
      setClearIntervalLoop(null);
    }
  }, [counter]);

  return (
    <div>
      <h1
        onClick={() => {
          setCounter(10);
          clearInterval(clearIntervalLoop);
          const newInterval = setInterval(() => {
            setCounter((counter) => counter - 1);
          }, 1000);
          setClearIntervalLoop(newInterval);
        }}
      >
        {clearIntervalLoop !== null ? counter : 'Hit Me'}
      </h1>
    </div>
  );
};

export default Counter;
