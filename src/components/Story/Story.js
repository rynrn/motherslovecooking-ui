import React from 'react';
import Stories from 'react-insta-stories';
import _ from 'lodash';
import { Icon } from 'semantic-ui-react';
import { screenWidth, screenHeight } from '../../utils/page-util';

const Story = ({ stories, close }) => {
  const _stories = stories.map(story => ({
    content: () => (
      <>
        <Icon className="story-close-icon" onClick={() => close()} name="close" />
        <img src={story.original} style={{ width: 'auto', maxWidth: '100%', maxHeight: '100%', margin: 'auto' }} />
      </>
    )
  }));

  return (
    <div className="story">
      <div style={{
        width: screenWidth(),
        height: screenHeight()
      }}
        className="story-fixed">
        <Stories
          stories={_stories}
          defaultInterval={1500}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      </div>
    </div>
  );
};

export default Story;
