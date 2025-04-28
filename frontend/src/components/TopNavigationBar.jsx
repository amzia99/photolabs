import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = ({ favouritePhotos, topics, fetchPhotosByTopic }) => {
  const isFavPhotoExist = favouritePhotos && favouritePhotos.length > 0;
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__content">
        <TopicList 
          topics={topics} 
          fetchPhotosByTopic={fetchPhotosByTopic} 
        />
        <div className="top-nav-bar__favorites">
          <FavBadge isFavPhotoExist={isFavPhotoExist} />
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;