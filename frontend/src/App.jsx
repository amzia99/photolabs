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
    <PhotoListItem photo={samplePhoto} />
  </div>
);

export default App;