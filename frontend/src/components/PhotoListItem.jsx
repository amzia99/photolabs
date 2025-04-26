import React from 'react';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

export default function PhotoListItem() {
  return (
    <article className="photo-list__item">
      <img 
        className="photo-list__image"
        src={sampleDataForPhotoListItem.imageSource}
        alt="Sample"
      />
      <div className="photo-list__user-details">
        <img 
          className="photo-list__user-profile"
          src={sampleDataForPhotoListItem.profile}
          alt="User"
        />
        <div className="photo-list__user-info">
          <span className="photo-list__user-name">{sampleDataForPhotoListItem.username}</span>
          <span className="photo-list__user-location">
            {sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}
          </span>
        </div>
      </div>
    </article>
  );
}
