import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Add sample data
const samplePhoto = {
  imageSource: "/Image-1-Full.jpeg",
  username: "John Example",
  profile: "/profile-1.jpg",
  location: {
    city: "Montreal",
    country: "Canada"
  }
};

const App = () => (
  <div className="App">
    <PhotoListItem 
      imageSource={samplePhoto.imageSource}
      username={samplePhoto.username}
      profile={samplePhoto.profile}
      location={samplePhoto.location}
    />
  </div>
);

export default App;