// Footer.js
import React, { useState } from 'react';

const Footer = ({ getCurrentDate, onAddComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleAddComment = () => {
    onAddComment(commentText);
    setCommentText('');
  };

  return (
    <footer className="footer">
      <div className="comment-section">
        <p>Last Updated: {getCurrentDate()}</p>
        <textarea
          rows="4"
          cols="50"
          placeholder="Add Your Comment"
          value={commentText}
          onChange={handleCommentChange}
        ></textarea>
        <button className="comment-button" onClick={handleAddComment}>Add Your Comment</button>
      </div>
    </footer>
  );
};

export default Footer;
