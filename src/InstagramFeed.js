// InstagramFeed.js
import React, { useState, useEffect } from 'react';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:5000/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Instagram Feed</h2>
      {posts.map(post => (
        <div key={post.id}>
          <img src={post.imageUrl} alt={`Instagram post ${post.id}`} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;



// // InstagramFeed.js

// import React, { useState, useEffect } from 'react';

// const InstagramFeed = () => {
//   const [instagramPosts, setInstagramPosts] = useState([]);

//   useEffect(() => {
//     // Assume fetchInstagramPosts is a function that fetches the latest posts
//     const fetchInstagramPosts = async () => {
//       try {
//         // Make a request to your backend or API to get the latest posts
//         const response = await fetch('your-api-endpoint');
//         const data = await response.json();

//         // Update the state with the fetched posts
//         setInstagramPosts(data.posts.slice(0, 3)); // Display the most recent 3 posts
//       } catch (error) {
//         console.error('Error fetching Instagram posts:', error);
//       }
//     };

//     // Call the function to fetch posts when the component mounts
//     fetchInstagramPosts();
//   }, []); // Empty dependency array ensures the effect runs once when the component mounts

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-3">Instagram Feed</h2>
//       <div className="row">
//         {instagramPosts.map(post => (
//           <div key={post.id} className="col-md-4 mb-4">
//             <div className="card">
//               <img src={post.imageUrl} className="card-img-top" alt={`Instagram post ${post.id}`} />
//               <div className="card-body">
//                 <p className="card-text">{post.caption}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InstagramFeed;