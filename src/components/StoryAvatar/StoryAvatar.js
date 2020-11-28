import React from 'react';
import _ from 'lodash';

const StoryAvatar = ({ avatar, text, stories, oepn }) => {
  const _avatar = _.get(avatar, 'src') || _.head(stories).original;

  return (
    <button className="story-avatar" onClick={() => oepn()}>
      <img src={_avatar} alt={text} />
      <div className="text">{text}</div>
    </button>

  );
};

export default StoryAvatar;
