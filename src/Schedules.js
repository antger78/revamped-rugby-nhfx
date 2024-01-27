// Schedules.js

import React from 'react';

const Schedules = () => {
  // You can replace the following data with actual schedules
  const practiceSchedule = ['Tuesdays and Thursdays at 6 PM', 'next practice'];
  const gameSchedule = ['Saturday at 1 PM', 'Sunday at 2 PM'];

  return (
    <div>
      <h2>Practice Schedule</h2>
      <ul>
        {practiceSchedule.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </ul>
      <h2>Game Schedule</h2>
      <ul>
        {gameSchedule.map((time, index) => (
          <li key={index}>{time}</li>
        ))}
      </ul>
    </div>
  );
};

export default Schedules;