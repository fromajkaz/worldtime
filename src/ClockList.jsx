// import React, { useEffect, useState } from 'react';
// import moment from 'moment-timezone';
// import countries from './countries';
// function ClockList({ timezone }) {

//   const [time, setTime] = useState(moment.tz(timezone).format('HH:mm:ss'));

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(moment.tz(countries.Japan).format('HH:mm:ss'));
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [timezone]);

//   return (
//     <main>
//       <div className="text-center">
//         <h2 className="text-lg font-semibold ">Tokyo/Japan</h2>
//         <p className="text-xl font-bold mt-2">{time}</p>
//       </div>
//     </main>
//   );
// }

// export default ClockList;
import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import countries from './countries'

function CountryList() {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const updatedTimes = {};
      countries.forEach((country) => {
        updatedTimes[country.name] = moment.tz(country.timezone).format('HH:mm:ss');
      });
      setTimes(updatedTimes);
    };

    updateTimes(); // Первоначальное обновление
    const interval = setInterval(updateTimes, 1000); // Обновление каждую секунду

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, []);

  return (
    <div className="max-w-7xl mx-auto bg-black ">
      <h1 className="text-2xl font-bold mb-4">World Clock</h1>
      <div className=''>
      <ul className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {countries.map((country) => (
          <li
            key={country.name}
            className="flex justify-around items-center bg-black p-4 border-b-2 rounded-3xl"
          >
            <span className="font-medium">{country.name}</span>
            <span className="font-bold text-xl">{times[country.name]}</span>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default CountryList;

