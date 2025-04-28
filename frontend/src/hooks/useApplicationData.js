import { useReducer } from 'react';

// Action types
const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case TOGGLE_FAVOURITE: {
      const photoId = action.payload;
      const updatedFavourites = [...state.favouritePhotos];
      
      if (updatedFavourites.includes(photoId)) {
        return {
          ...state,
          favouritePhotos: updatedFavourites.filter(id => id !== photoId)
        };
      } else {
        return {
          ...state,
          favouritePhotos: [...updatedFavourites, photoId]
        };
      }
    }
    case OPEN_MODAL:
      return {
        ...state,
        selectedPhoto: action.payload,
        modalOpen: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false
      };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const initialState = {
    favouritePhotos: [],
    selectedPhoto: null,
    modalOpen: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Toggle photo favorite status
  const toggleFavourite = (photoId) => {
    dispatch({ type: TOGGLE_FAVOURITE, payload: photoId });
  };

  // Open modal with selected photo
  const openModal = (photo) => {
    console.log("Opening modal with photo:", photo);
    dispatch({ type: OPEN_MODAL, payload: photo });
  };

  // Close the modal
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  // fetch photos from server
  const fetchPhotos = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/photos');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching photos:', error);
      return [];
    }
  };

  return {
    state,
    toggleFavourite,
    openModal,
    closeModal
  };
}