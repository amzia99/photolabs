import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import './PhotoListItem.scss';

export default function PhotoListItem({ photo }) {
  const {
    imageSource = '/placeholder-image.jpg',
    username = 'Anonymous',
    profile = '/default-profile.jpg',
    location = { city: 'Unknown', country: 'Unknown' }
  } = photo || {};

  return (
    <article className="photo-list__item">
      <div className="photo-list__image-container">
        <img 
          className="photo-list__image"
          src={imageSource}
          alt={`Photo by ${username}`}
        />
        <PhotoFavButton />
      </div>
      <div className="photo-list__user-details">
        <img 
          className="photo-list__user-profile"
          src={profile}
          alt={username}
        />
        <div className="photo-list__user-info">
          <span className="photo-list__user-name">{username}</span>
          <span className="photo-list__user-location">
            {location.city}, {location.country}
          </span>
        </div>
      </div>
    </article>
  );
}