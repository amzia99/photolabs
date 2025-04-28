import { useState } from 'react';

export default function useApplicationData() {
  const [state, setState] = useState({
    favouritePhotos: [],
    selectedPhoto: null,
    modalOpen: false
  });

  // Toggle photo favorite status
  const toggleFavourite = (photoId) => {
    setState(prev => {
      const updatedFavourites = [...prev.favouritePhotos];
      
      if (updatedFavourites.includes(photoId)) {
        return {
          ...prev,
          favouritePhotos: updatedFavourites.filter(id => id !== photoId)
        };
      } else {
        return {
          ...prev,
          favouritePhotos: [...updatedFavourites, photoId]
        };
      }
    });
  };

  // Open modal with selected photo
  const openModal = (photo) => {
    console.log("Opening modal with photo:", photo);
    setState(prev => ({
      ...prev,
      selectedPhoto: photo,
      modalOpen: true
    }));
  };

  // Close modal
  const closeModal = () => {
    setState(prev => ({
      ...prev,
      modalOpen: false
    }));
  };

  return {
    state,
    toggleFavourite,
    openModal,
    closeModal
  };
}