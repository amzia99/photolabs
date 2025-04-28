import { useState } from 'react';

export default function useApplicationData() {

  // tracking favorited photos
  const [state, setState] = useState({
    favouritePhotos: [],
  });

  // toggling photo favorite status
  const toggleFavourite = (photoId) => {
    setState(prev => {
      const updatedFavourites = [...prev.favouritePhotos];
      
      // removing favorited photo
      if (updatedFavourites.includes(photoId)) {
        return {
          ...prev,
          favouritePhotos: updatedFavourites.filter(id => id !== photoId)
        };
      } 
      // or add to favorites
      else {
        return {
          ...prev,
          favouritePhotos: [...updatedFavourites, photoId]
        };
      }
    });
  };

  return {
    state,
    toggleFavourite
  };
}