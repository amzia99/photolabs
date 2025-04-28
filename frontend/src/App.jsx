import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const { state, toggleFavourite, openModal, closeModal } = useApplicationData();

  if (state.loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <HomeRoute 
        photos={state.photos} 
        topics={state.topics} 
        favouritePhotos={state.favouritePhotos}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
      <PhotoDetailsModal 
        isOpen={state.modalOpen}
        onClose={closeModal}
        selectedPhoto={state.selectedPhoto}
        openModal={openModal}
        toggleFavourite={toggleFavourite}
        favouritePhotos={state.favouritePhotos}
      />
    </div>
  );
};

export default App;
