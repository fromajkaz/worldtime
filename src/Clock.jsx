import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import countries from './countries';
function Clock({ timezone }) {

  const [time, setTime] = useState(moment.tz(timezone).format('HH:mm:ss'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment.tz(timezone).format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="text-center ">
     <p className="text-7xl md:text-8xl lg:text-9xl text-center font-bold mt-2">{time}</p>
    </div>
  );
}

export default Clock;
