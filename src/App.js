import React from 'react';
import InstagramFeed from './InstagramFeed';
import Schedules from './Schedules';
import Announcements from './Announcements';
import Links from './Links';

const App = () => {
  return (
    <div>
      <h1>Rugby Team Website</h1>
      <InstagramFeed />
      <Schedules />
      <Announcements />
      <Links />
    </div>
  );
};

export default App;