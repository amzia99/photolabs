import React from 'react';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import './App.scss';

// Sample photo data for 3 phootos
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
    username: "Jane Doe",
    profile: "/profile-1.jpg",
    location: {
      city: "Toronto",
      country: "Canada"
    }
  },
  {
    id: 3,
    imageSource: "/Image-3-Full.jpeg",
    username: "Alex Smith",
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
      <TopicList />
      <PhotoList photos={samplePhotos} />
    </div>
  );
};

export default App;