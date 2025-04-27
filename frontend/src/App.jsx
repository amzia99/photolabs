import React from 'react';
import PhotoListItem from './components/PhotoListItem';
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

const App = () => (
  <div className="App">
    {samplePhotos.map(photo => (
      <PhotoListItem 
        key={photo.id}
        photo={photo}
      />
    ))}
  </div>
);

export default App;