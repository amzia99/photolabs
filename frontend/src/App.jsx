import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Add sample data
const samplePhoto = {
  imageSource: "/image-1-Full.jpeg",
  username: "John Smith",
  profile: "/profile-1.jpg",
  location: {
    city: "Toronto",
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