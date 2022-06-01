import { useState, useEffect } from 'react';

function VideosPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  });

  const fetchVideos = async () => {
    const response = await fetch('/api/videos');
    const data = await response.json();
    setVideos(data);
  };

  return (
    <>
      {videos.map((video) => {
        return <div key={video.id}>{video.id}</div>;
      })}
    </>
  );
}

export default VideosPage;
