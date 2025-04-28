import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [selected, setSelected] = React.useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setSelected(prevSelected => !prevSelected);
  };
  
  return (
    <div className="photo-list__fav-button" onClick={handleClick}>
      <FavIcon selected={selected} />
    </div>
  );
};

export default PhotoFavButton;