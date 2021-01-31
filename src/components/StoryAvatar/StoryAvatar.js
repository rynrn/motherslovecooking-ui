import React from 'react';
import _ from 'lodash';

const StoryAvatar = ({ avatar, text }) => {
  return (
    <button className="story-avatar">
      <img src={avatar} alt={text} />
      <div className="text">{text}</div>
    </button>

  );
};

export default StoryAvatar;
