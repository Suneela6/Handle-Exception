import React, { useState } from 'react';
import Comment from './Comment'; // Import the Comment component

const DiscussionPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('Your Name');

  // Function to handle adding a new comment
  const handleAddComment = () => {
    // Check if the new comment and user name are not empty
    if (newComment.trim() !== '' && userName.trim() !== '') {
      const timeAdded = new Date().toLocaleString();
      const updatedComments = [...comments, { userName, timeAdded, content: newComment }];
      setComments(updatedComments);
      setNewComment(''); // Clear the input field after adding the comment
    }
  };

  return (
    <div className="discussion-page">
      <h1>Please Login to comment...Discussions (Threads)</h1>
      <h2>Most Recent</h2>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            userName={comment.userName}
            timeAdded={comment.timeAdded}
            content={comment.content}
          />
        ))}
      </div>
      {/* Comment input */}
      <div className="comment-input">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
        />
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add Your Comment"
        />
        <button onClick={handleAddComment}>Add Your Comment</button>
      </div>
    </div>
  );
};

export default DiscussionPage;
