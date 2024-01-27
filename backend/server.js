// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000; // You can use any port you prefer

app.use(cors());
app.use(express.json());

// Mock Instagram posts
const instagramPosts = [
  { id: 1, caption: 'Caption 1', imageUrl: 'url_to_image_1' },
  { id: 2, caption: 'Caption 2', imageUrl: 'url_to_image_2' },
  { id: 3, caption: 'Caption 3', imageUrl: 'url_to_image_3' },
];

// API endpoint to get Instagram posts
app.get('/api/posts', (req, res) => {
    const recentPosts = instagramPosts.slice(0, 3); // Get the first 3 posts
    res.json(recentPosts);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
