import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhoto, openModal, toggleFavourite, favouritePhotos }) => {
  if (!isOpen || !selectedPhoto) return null;
  
  // debugging console log
  console.log('Selected Photo Details:', selectedPhoto);
  
  const {
    id,
    imageSource,
    username,
    profile,
    location,
    urls,
    user,
    similar_photos
  } = selectedPhoto || {};

  const imgSrc = imageSource || (urls && urls.full);
  const userName = username || (user && user.name);
  const userProfile = profile || (user && user.profile);
  const userLocation = location || {};

  return (
    <div className="photo-details-modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="photo-details-modal__content">
        <button 
          className="photo-details-modal__close-button" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
        
        <div className="photo-details-modal__image-container">
       <img 
        className="photo-details-modal__image" 
        src={imgSrc} 
        alt={`Photo by ${userName}`} 
        />
        <div className="photo-details-modal__fav-button">
         <PhotoFavButton 
          selected={favouritePhotos.includes(id)}
          onClick={() => toggleFavourite(id)}
         />
      </div>
    </div>
        
        <div className="photo-details-modal__user-details">
          <img 
            className="photo-details-modal__user-profile"
            src={userProfile}
            alt={userName}
          />
          <div className="photo-details-modal__user-info">
            <h3 className="photo-details-modal__user-name">{userName}</h3>
            <p className="photo-details-modal__user-location">
              {userLocation.city}, {userLocation.country}
            </p>
          </div>
        </div>
        {similar_photos && Object.keys(similar_photos).length > 0 && (
          <div className="photo-details-modal__similar-photos">
            <h3>Similar Photos</h3>
            <div className="photo-details-modal__similar-photos-list">
            {Object.values(similar_photos).map((photo) => (
  <div 
    key={photo.id} 
    className="photo-details-modal__similar-photo"
    onClick={() => {
      // Close current modal and open another with clicked photo
      onClose();
      setTimeout(() => openModal(photo), 10);
    }}
  >
    <img 
      src={photo.urls.regular} 
      alt={`Similar photo from ${photo.user?.name || 'photographer'}`} 
      className="photo-details-modal__similar-photo-img"
    />
  </div>
))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;