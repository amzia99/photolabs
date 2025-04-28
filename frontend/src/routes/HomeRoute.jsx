import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ 
  photos, 
  topics, 
  favouritePhotos, 
  toggleFavourite, 
  openModal, 
  fetchPhotosByTopic 
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar 
        favouritePhotos={favouritePhotos} 
        topics={topics} 
        fetchPhotosByTopic={fetchPhotosByTopic} 
      />
      <PhotoList 
        photos={photos} 
        favouritePhotos={favouritePhotos}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
