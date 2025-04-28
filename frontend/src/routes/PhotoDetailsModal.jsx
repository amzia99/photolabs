import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ isOpen, onClose, selectedPhoto }) => {
  if (!isOpen) return null;

  //debugging
  console.log('Selected Photo Deails:', selectedPhoto);
  
  const {
    id,
    imageSource,
    username,
    profile,
    location,
    urls,
    user
  } = selectedPhoto || {};

  const imgSrc = imageSource || (urls && urls.full);
  const userName = username || (user && user.name);
  const userProfile = profile || (user && user.profile);
  const userLocation = location || {};

  // Handle close button click
  const handleCloseClick = () => {
    onClose();
  };

  // Handle background click
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__content">
        <button 
          className="photo-details-modal__close-button" 
          onClick={handleCloseClick}
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
      </div>
    </div>
  );
};

export default PhotoDetailsModal;