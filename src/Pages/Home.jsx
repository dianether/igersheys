import React from 'react';
import ImageSection from './ImageSection';
import ContentSection from './ContentSection';
import VideoSection from './VideoSection';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <ImageSection />
      <ContentSection />
      <VideoSection />
    </div>
  );
};

export default Home;
