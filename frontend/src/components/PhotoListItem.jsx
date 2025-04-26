import React from 'react';

export default function PhotoListItem() {
  return (
    <article className="photo-list__item">
      <img 
    className="photo-list__image"
        src="https://images.unsplash.com/photo-1636489950038-4064f1eead72"
      alt="Sample"
      />
      <div className="photo-list__user-details">
        <img 
        className="photo-list__user-profile"
          src="https://www.gravatar.com/avatar"
          alt="User"
        />
        <div className="photo-list__user-info">
          <span className="photo-list__user-name">Joe Example</span>
          <span className="photo-list__user-location">Toronto, Canada</span>
        </div>
      </div>
    </article>
  );
}
