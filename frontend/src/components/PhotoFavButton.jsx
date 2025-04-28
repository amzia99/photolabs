import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ selected, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };
  
  return (
    <div className="photo-list__fav-button" onClick={handleClick}>
      <FavIcon selected={selected} />
    </div>
  );
};

export default PhotoFavButton;