import React from 'react';
import moment from 'moment-timezone';

const timeZones = moment.tz.names();

function TimezoneSelector({ selected, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Select Timezone:</label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-md p-2"
      >
        {timeZones.map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TimezoneSelector;
