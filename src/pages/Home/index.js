import React, { useEffect, useState } from 'react';
import VideoPlayer from '~/components/VideoPlayer';
import * as videosService from '~/services/videosService';

const Home = () => {
    const [videosList, setVideosList] = useState([]);

    useEffect(() => {
        videosService
            .getVideosList({ type: 'for-you', page: 1 })
            .then((data) => {
                setVideosList((prevVideosList) => [...prevVideosList, ...data]);
                // console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const fakeApi = new Array(9).fill(0);
    console.log(videosList);

    return (
        <div style={{ paddingTop: '20px' }}>
            {videosList.map((video, index) => (
                <VideoPlayer video={video} key={index} />
            ))}
        </div>
    );
};

export default Home;
