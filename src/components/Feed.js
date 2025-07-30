import React, { useState } from 'react';
import { FaThumbsUp, FaComment, FaShare, FaImage, FaVideo, FaSmile } from 'react-icons/fa';
import Post from './Post';

function Feed({ currentUser }) {
  const [postInput, setPostInput] = useState('');

  const birthdayMessages = [
    "🎉 Happy Birthday! May your day be filled with joy and laughter! 🎂",
    "🎈 Wishing you a fantastic birthday filled with love and happiness! 🎁",
    "🌟 Happy Birthday! Here's to another amazing year ahead! ✨",
    "🎊 Happy Birthday! May all your dreams come true! 🎉",
    "🎂 Happy Birthday! Sending you lots of love and warm wishes! 💖",
    "🎈 Happy Birthday! May your special day be as wonderful as you are! 🌟",
    "🎉 Happy Birthday! Wishing you health, happiness, and success! 🎊",
    "🎁 Happy Birthday! May this year bring you everything you've been wishing for! ✨",
    "🎂 Happy Birthday! Here's to celebrating you today and always! 💫",
    "🎈 Happy Birthday! May your day be filled with smiles and good times! 🎉",
    "🌟 Happy Birthday! Wishing you a day as special as you are! 🎊",
    "🎂 Happy Birthday! May all your birthday wishes come true! 💖",
    "🎉 Happy Birthday! Here's to another year of amazing adventures! ✨",
    "🎈 Happy Birthday! May your day be filled with love and laughter! 🌟",
    "🎊 Happy Birthday! Wishing you happiness in everything you do! 🎁"
  ];

  const posts = [
    {
      id: 1,
      user: {
        name: 'Moominmamma',
        avatar: 'https://via.placeholder.com/40x40/FFB6C1/000000?text=M'
      },
      timestamp: '2 hours ago',
      content: 'Just finished baking some delicious cinnamon rolls! The house smells amazing. 🥐✨',
      image: 'https://via.placeholder.com/600x400/FFE4E1/000000?text=Delicious+Cinnamon+Rolls',
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      user: {
        name: 'Snorkmaiden',
        avatar: 'https://via.placeholder.com/40x40/FFD700/000000?text=S'
      },
      timestamp: '4 hours ago',
      content: 'Found the most beautiful flowers in the garden today! Spring is truly magical. 🌸🌺',
      image: 'https://via.placeholder.com/600x400/FFFACD/000000?text=Beautiful+Spring+Flowers',
      likes: 31,
      comments: 12,
      shares: 5
    },
    {
      id: 3,
      user: {
        name: 'Little My',
        avatar: 'https://via.placeholder.com/40x40/FF69B4/000000?text=L'
      },
      timestamp: '6 hours ago',
      content: 'Adventure time! Who wants to explore the mysterious forest with me? 🌲🗺️',
      likes: 18,
      comments: 15,
      shares: 7
    },
    {
      id: 4,
      user: {
        name: 'Moominpappa',
        avatar: 'https://via.placeholder.com/40x40/87CEEB/000000?text=P'
      },
      timestamp: '8 hours ago',
      content: 'Working on my memoirs today. The stories of our adventures are endless! 📚✍️',
      likes: 42,
      comments: 6,
      shares: 2
    },
    {
      id: 5,
      user: {
        name: 'Snufkin',
        avatar: 'https://via.placeholder.com/40x40/228B22/FFFFFF?text=S'
      },
      timestamp: '1 day ago',
      content: 'The mountains are calling, and I must go. See you all in the spring! 🏔️🎒',
      image: 'https://via.placeholder.com/600x400/90EE90/000000?text=Mountain+Adventure',
      likes: 67,
      comments: 23,
      shares: 14
    }
  ];

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (postInput.trim()) {
      // In a real app, this would add the post to the feed
      console.log('New post:', postInput);
      setPostInput('');
    }
  };

  return (
    <div className="feed">
      {/* Birthday Messages */}
      <div className="birthday-message">
        🎉 Happy Birthday! 🎂 Today is your special day! 🎈
      </div>
      
      {birthdayMessages.slice(0, 5).map((message, index) => (
        <div key={index} className="birthday-message" style={{ 
          background: `linear-gradient(135deg, ${['#ff6b6b', '#ffa500', '#ff69b4', '#87ceeb', '#98fb98'][index % 5]}, ${['#ffa500', '#ff69b4', '#87ceeb', '#98fb98', '#ff6b6b'][index % 5]})`
        }}>
          {message}
        </div>
      ))}

      {/* Create Post */}
      <div className="feed__createPost">
        <form onSubmit={handlePostSubmit}>
          <div className="feed__createPostTop">
            <img src={currentUser.avatar} alt={currentUser.name} />
            <input 
              type="text" 
              placeholder={`What's on your mind, ${currentUser.name}?`}
              value={postInput}
              onChange={(e) => setPostInput(e.target.value)}
            />
          </div>
          <div className="feed__createPostBottom">
            <div className="feed__createPostOption">
              <FaImage style={{ color: '#42a5f5' }} />
              <span>Photo</span>
            </div>
            <div className="feed__createPostOption">
              <FaVideo style={{ color: '#e91e63' }} />
              <span>Video</span>
            </div>
            <div className="feed__createPostOption">
              <FaSmile style={{ color: '#ffc107' }} />
              <span>Feeling</span>
            </div>
          </div>
        </form>
      </div>

      {/* Posts */}
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}

      {/* More Birthday Messages */}
      {birthdayMessages.slice(5, 10).map((message, index) => (
        <div key={index + 5} className="birthday-message" style={{ 
          background: `linear-gradient(135deg, ${['#ff69b4', '#87ceeb', '#98fb98', '#ff6b6b', '#ffa500'][index % 5]}, ${['#87ceeb', '#98fb98', '#ff6b6b', '#ffa500', '#ff69b4'][index % 5]})`
        }}>
          {message}
        </div>
      ))}
    </div>
  );
}

export default Feed; 