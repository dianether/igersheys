import React from 'react';

const VideoSection = () => {
  return (
    <section style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative'}}>
        <iframe
          width="75%"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video de arquitectura"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: '20px',
          }}
        />
      </div>
    </section>
  );
};

export default VideoSection;
