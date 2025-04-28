import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({ topics, fetchPhotosByTopic }) => {
  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId); 
  };

  return (
    <div className="topic-list">
      {topics.map((topic) => (
        <TopicListItem 
          key={topic.id} 
          label={topic.title} 
          onClick={() => handleTopicClick(topic.id)} 
        />
      ))}
    </div>
  );
};

export default TopicList;
