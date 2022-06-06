import { useState, useEffect } from 'react';
import Image from 'next/dist/client/image';
import axios from 'axios';

function VideosPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const API_URL = 'https://api.themoviedb.org/3';

  const fetchVideos = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: process.env.NEXT_PUBLIC_MOVIE_API_KEY,
      },
    });
    setVideos(results);
    console.log(results);
  };

  return (
    <>
      <div className='contentContainer'>
        {videos.map((video) => {
          return (
            <div className='videoContainer' key={video.id}>
              <div className='videoInfo'>
                <h2>{video.title}</h2>
                <p className='overflow'>{video.overview}</p>
              </div>
              <a
                href={video.url}
                target='_blank'
                rel='noreferrer'
                className='videoImg'
              >
                {/* <Image
                  src={video.thumbnail_medium}
                  alt={video.title}
                  width={432}
                  height={252}
                /> */}
              </a>
            </div>
          );
        })}
      </div>
      <style jsx>
        {`
          .videoContainer {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin: 40px 0px;
          }

          .videoInfo {
            width: 50%;
          }

          .overflow {
            overflow-y: scroll;
            height: 225px;
          }

          .videoImg {
            position: relative;
            height: 252px;
          }

          .videoImg::after {
            position: absolute;
            left: 0;
            top: 0;
            background: linear-gradient(#ee2e1d, #ffb1b5);
            opacity: 0.6;
            width: 100%;
            height: 252px;
            content: url(assets/playbtn.png);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          ::-webkit-scrollbar {
            width: 20px;
          }

          ::-webkit-scrollbar-track {
            background-color: transparent;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #d6dee1;
            border-radius: 20px;
            border: 6px solid transparent;
            background-clip: content-box;
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: #a8bbbf;
          }
        `}
      </style>
    </>
  );
}

export default VideosPage;
