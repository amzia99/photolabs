import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavIcon from './FavIcon';

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__content">
        <TopicList />
        <div className="top-nav-bar__favorites">
          <FavIcon />
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
