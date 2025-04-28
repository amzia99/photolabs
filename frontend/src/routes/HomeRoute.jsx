import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
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