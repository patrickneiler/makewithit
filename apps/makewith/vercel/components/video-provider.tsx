'use client'
import React, { createContext, useContext, useState, useCallback } from 'react';

export interface Video {
    id: string;
    status: string;
    source_url?: string;
    result_url?: string;
}

export interface Config {
    url: string;
    key: string | undefined;
}

interface VideoContextValue {
    video: Video | null;
    currentVideo: Video | null;
    nextVideo: Video | null;
    uploadVideo: (script: string) => Promise<void>;
    fetchVideoStatus: (id: string) => Promise<void>;
    completedVideo: (video: Video) => Promise<void>
}

const VideoContext = createContext<VideoContextValue | undefined>(undefined);

export const useVideoContext = () => {
    const context = useContext(VideoContext);
    if (!context) {
        throw new Error('useVideoContext must be used within a VideoProvider');
    }
    return context;
};

interface VideoProviderProps {
    children: React.ReactNode;
    config: Config
}

const VideoProvider: React.FC<VideoProviderProps> = ({ children, config }) => {
    const [video, setVideo] = useState<Video | null>(null);
    const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
    const [nextVideo, setNextVideo] = useState<Video | null>(null);

    const uploadVideo = useCallback(async (script: string) => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    Authorization: `Basic ${config.key}`,
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    script: {
                        type: 'text',
                        subtitles: 'false',
                        provider: { type: 'elevenlabs', voice_id: 'TxGEqnHWrfWFTfGW9XjX' },
                        ssml: 'false',
                        input: script
                    },
                    config: {
                        fluent: 'true',
                        pad_audio: '2.0',
                    },
                    source_url: 'https://firebasestorage.googleapis.com/v0/b/make-with-it-firebase.appspot.com/o/IMG_3685.JPG?alt=media&token=0fb89e69-d1dd-4913-9006-7f928071cab2'
                })
            };
            const response = await fetch(`${config.url}`, options)
                .then(response => (response.json()))
                .then(data => (setCurrentVideo(null), setNextVideo({
                    id: data.id,
                    status: data.id
                })))
                .catch(err => console.error(err));
            return response;
        } catch (error) {
            console.error('An error occurred while uploading video:', error);
        }
    }, []);

    const fetchVideoStatus = useCallback(async (id: string) => {
        try {
            let status = '';

            do {
                await new Promise(resolve => setTimeout(resolve, 2000));
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/json',
                        Authorization: `Basic ${config.key}`,
                    },
                };

                const response = await fetch(`${config.url}/${id}`, options)
                    .then(response => (response.json()))
                    .then(data => (status = data.status, setNextVideo(prevVideo => ({
                        ...prevVideo!,
                        status: data.status,
                        source_url: data.source_url,
                        result_url: data.result_url,
                    }))))
                    .catch(err => console.error(err));

                return response;
            } while (status !== 'done');
        } catch (error) {
            console.error('An error occurred while fetching video status:', error);
        }
    }, []);

    const completedVideo = useCallback(async (video: Video) => {
        setCurrentVideo(video);
        setVideo(video);
    }, []);

    const contextValue: VideoContextValue = {
        video,
        uploadVideo,
        fetchVideoStatus,
        currentVideo,
        nextVideo,
        completedVideo
    };

    return (
        <VideoContext.Provider value={contextValue}>{children}</VideoContext.Provider>
    );
};

export default VideoProvider;



