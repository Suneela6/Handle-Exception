// Comment.js
import React from 'react';

const Comment = ({ userName, timeAdded, content }) => (
  <div className="comment">
    <div className="user-info">
      <span className="user-name">{userName}</span>
      <span className="time-added">{timeAdded}</span>
    </div>
    <div className="comment-content">{content}</div>
  </div>
);

export default Comment;
