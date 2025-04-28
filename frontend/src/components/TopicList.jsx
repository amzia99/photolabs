import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const topics = ['Nature', 'Travel', 'People', 'Fashion', 'Animals'];

const TopicList = () => {
  return (
    <div className="topic-list">
      {topics.map((topic, index) => (
        <TopicListItem key={index} label={topic} />
      ))}
    </div>
  );
};

export default TopicList;
