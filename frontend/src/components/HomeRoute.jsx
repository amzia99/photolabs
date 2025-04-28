import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, favouritePhotos, toggleFavourite }) => {
  return (
    <div className="home-route">
      <TopNavigationBar favouritePhotos={favouritePhotos} />
      <PhotoList 
        photos={photos} 
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default HomeRoute;