import React, { useRef, useState, useEffect } from 'react';
import Stories from 'react-insta-stories';
import _ from 'lodash';
import { Icon } from 'semantic-ui-react';
import { closeFullscreen, openFullscreen } from '../../utils/page-util';

const Story = ({ avatar, text, stories }) => {

  const [isOpen, setOpen] = useState(false);
  const elem = useRef(null);

  useEffect(() => {
    if (isOpen) {
      openFullscreen(elem.current)
    }
  }, [isOpen]);

  const closeStory = () => {
    closeFullscreen();
    setOpen(false)
  };

  const _stories = stories.map(story => ({
    content: () => (
      <>
        <Icon className="story-close-icon" onClick={() => closeStory()} name="close" />
        <img src={story.original} style={{ width: 'auto', maxWidth: '100%', maxHeight: '100%', margin: 'auto' }} />
      </>
    )
  }));

  const _avatar = _.get(avatar, 'src') || _.head(stories).original;

  return (
    <>
      <button className="story-avatar" onClick={() => setOpen(true)}>
        <img src={_avatar} alt={text} />
        <div className="text">{text}</div>
      </button>

      <div ref={elem} className="story">
        {isOpen &&
          <Stories
            stories={_stories}
            defaultInterval={1500}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        }
      </div>
    </>
  );
};

export default Story;
