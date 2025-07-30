import React, { useState } from 'react';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="post__header">
        <img src={post.user.avatar} alt={post.user.name} />
        <div className="post__headerInfo">
          <h3>{post.user.name}</h3>
          <p>{post.timestamp}</p>
        </div>
      </div>

      <div className="post__body">
        <p>{post.content}</p>
        {post.image && (
          <img 
            src={post.image} 
            alt="Post content" 
            className="post__image"
          />
        )}
      </div>

      <div className="post__actions">
        <div className="post__action" onClick={handleLike}>
          <FaThumbsUp style={{ color: liked ? '#1877f2' : '#65676b' }} />
          <span style={{ color: liked ? '#1877f2' : '#65676b' }}>
            {likeCount}
          </span>
        </div>
        <div className="post__action">
          <FaComment />
          <span>{post.comments}</span>
        </div>
        <div className="post__action">
          <FaShare />
          <span>{post.shares}</span>
        </div>
      </div>
    </div>
  );
}

export default Post; 