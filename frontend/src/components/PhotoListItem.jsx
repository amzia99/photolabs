import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

export default function PhotoListItem({ photo, isFavourite, toggleFavourite, openModal }) {
  const {
    id,
    imageSource,
    username,
    profile,
    location,
    urls,
    user
  } = photo || {};

  const imgSrc = imageSource || (urls && urls.full);
  const userName = username || (user && user.name);
  const userProfile = profile || (user && user.profile);
  const userLocation = location || {};

  const handleImageClick = () => {
    openModal(photo);
  };

  return (
    <article className="photo-list__item">
      <div className="photo-list__image-container">
        <img 
          className="photo-list__image"
          src={imgSrc}
          alt={`Photo by ${userName}`}
          onClick={handleImageClick}
          style={{ cursor: 'pointer' }}
        />
        <div className="photo-list__fav-button">
          <PhotoFavButton 
            selected={isFavourite}
            onClick={() => toggleFavourite(id)}
          />
        </div>
      </div>
      <div className="photo-list__user-details">
        <img 
          className="photo-list__user-profile"
          src={userProfile}
          alt={userName}
        />
        <div className="photo-list__user-info">
          <span className="photo-list__user-name">{userName}</span>
          <span className="photo-list__user-location">
            {userLocation.city}, {userLocation.country}
          </span>
        </div>
      </div>
    </article>
  );
}