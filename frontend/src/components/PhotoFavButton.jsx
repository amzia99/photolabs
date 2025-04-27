// import FavIcon from './FavIcon';
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
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
      <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
