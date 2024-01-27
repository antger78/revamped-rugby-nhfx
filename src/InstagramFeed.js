// InstagramFeed.js

import React from 'react';
import InstagramEmbed from 'react-instagram-embed';

const InstagramFeed = () => {
  return (
    <div>
      <h2>Instagram Feed</h2>
      {/* Replace 'your-instagram-account' with your actual Instagram account */}
      <InstagramEmbed url="https://www.instagram.com/p/newhavenrugby/" />
    </div>
  );
};

export default InstagramFeed;