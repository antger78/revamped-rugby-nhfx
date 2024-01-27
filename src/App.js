// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js

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