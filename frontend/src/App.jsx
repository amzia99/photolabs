import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import photos from './mocks/photos';
import useApplicationData from './hooks/useApplicationData';

// Sample photo data
const samplePhotos = [
  {
    id: 1,
    imageSource: "/Image-1-Full.jpeg",
    username: "John Example",
    profile: "/profile-1.jpg",
    location: {
      city: "Montreal",
      country: "Canada"
    }
  },
  {
    id: 2,
    imageSource: "/Image-2-Full.jpeg",
    username: "John Example",
    profile: "/profile-1.jpg",
    location: {
      city: "Toronto",
      country: "Canada"
    }
  },
  {
    id: 3,
    imageSource: "/Image-3-Full.jpeg",
    username: "John Example",
    profile: "/profile-1.jpg",
    location: {
      city: "Vancouver",
      country: "Canada"
    }
  }
];

const App = () => {
  const { state, toggleFavourite, openModal, closeModal } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        favouritePhotos={state.favouritePhotos}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
      <PhotoDetailsModal 
        isOpen={state.modalOpen}
        onClose={closeModal}
        selectedPhoto={state.selectedPhoto}
        openModal={openModal}
      />
    </div>
  );
};

export default App;
