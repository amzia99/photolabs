import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ label, onClick }) => {
  return (
    <button className="topic-list__item" onClick={onClick}>
      <span>{label}</span>
    </button>
  );
};

export default TopicListItem;
