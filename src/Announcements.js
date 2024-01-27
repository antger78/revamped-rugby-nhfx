// Announcements.js

import React from 'react';

const Announcements = () => {
  // Replace the following with actual announcements
  const announcements = ['Important announcement 1', 'Upcoming event 2', 'New team member 3'];

  return (
    <div>
      <h2>Announcements</h2>
      <ul>
        {announcements.map((announcement, index) => (
          <li key={index}>{announcement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;