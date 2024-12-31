import React, { useState } from 'react';
import moment from 'moment-timezone';
import TimezoneSelector from './TimezoneSelector';
import Clock from './Clock';
import Hero from './Hero';

function App() {
  const [timezone, setTimezone] = useState(moment.tz.guess());

  return (
    <div className=" max-w-7xl mx-auto p-10  ">
      <div className=' mx-auto '>
        <h1 className='text-3xl text-center'>CURRENT TIME MINSK</h1>
        <Clock timezone={timezone} />
      </div>
        <Hero/>
    </div>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CountryList from './CountryList';
// import CountryDetail from './CountryDetail';
// import moment from 'moment-timezone';


// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100 p-4">
//         <Routes>
//           <Route path="/" element={<CountryList />} />
//           <Route path="/country/:name" element={<CountryDetail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
