import React from 'react';
import HomeRoute from './components/HomeRoute';
import './App.scss';
import photos from './mocks/photos';

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
  return (
    <div className="App">
      <HomeRoute photos={photos} />
    </div>
  );
};

export default App;
