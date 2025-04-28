import { useReducer, useEffect } from 'react';


// Action types
const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SET_PHOTOS = 'SET_PHOTOS';
const SET_TOPICS = 'SET_TOPICS';
const SET_LOADING = 'SET_LOADING';
const SET_PHOTOS_BY_TOPIC = 'SET_PHOTOS_BY_TOPIC';


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
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
        loading: false
      };
    case SET_TOPICS:
      return {
        ...state,
        topics: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
      case SET_PHOTOS_BY_TOPIC:
        return {...state, photos: action.payload };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const initialState = {
    favouritePhotos: [],
    selectedPhoto: null,
    modalOpen: false,
    photos: [],
    topics: [],
    loading: true
  };

  const [state, dispatch] = useReducer(reducer, initialState);
// toggle favourite
  const toggleFavourite = (photoId) => {
    dispatch({ type: TOGGLE_FAVOURITE, payload: photoId });
  };
// open modal
  const openModal = (photo) => {
    dispatch({ type: OPEN_MODAL, payload: photo });
  };
// close modal
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: SET_LOADING, payload: true });
      try {
        const [photosResponse, topicsResponse] = await Promise.all([
          fetch('http://localhost:8001/api/photos'),
          fetch('http://localhost:8001/api/topics')
        ]);

        if (!photosResponse.ok || !topicsResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const photosData = await photosResponse.json();
        const topicsData = await topicsResponse.json();

        dispatch({ type: SET_PHOTOS, payload: photosData });
        dispatch({ type: SET_TOPICS, payload: topicsData });
      } catch (error) {
        console.error('Error fetching data:', error);
        dispatch({ type: SET_LOADING, payload: false });
      }
    };

    fetchData();
  }, []);

  return {
    state,
    toggleFavourite,
    openModal,
    closeModal,
    fetchPhotosByTopic
  };
}