import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import ClockList from './ClockList';


const Hero = () => {

  return (
    <div className="max-w-7xl mx-auto text-center">
      <ClockList/>
    </div>
  )
}

export default Hero