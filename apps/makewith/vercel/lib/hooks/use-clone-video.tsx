import { useState, useEffect } from 'react';
import useExternalApiCallback from './external-api-response';

const DID_API = {
    key: process.env.DID_API,
    url: "https://api.d-id.com"
}

interface VideoResponse {
    // Define the properties you expect in the API response object
    // For example: id, message, etc.
    id: string;
    status: string;
    result_url?: string
    // Add more properties as needed
}

export const useCloneVideo = (script: string | undefined) => {
    const [apiData, setApiData] = useState<VideoResponse | null>();
    useEffect(() => {
        const getVideo = async () => {
            if (script) {
                const response = await fetch(`/video`, {
                    method: 'POST',
                    headers: {
                        accept: 'application/json',
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        script
                    })
                })
                if (response.ok) {
                    const data: VideoResponse = await response.json();
                    setApiData(data);
                }
                // const videoResponse = await fetch('/video', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify({
                //         script
                //     })
                // })
                // if (videoResponse.ok) {
                //     const response = await videoResponse.json();
                //     setApiData(response);
                //     console.log('Response:', response);
                //     response?.status === 'done' && setApiData(response as VideoResponse);
                // } else {
                //     console.error('Failed to fetch data from API');
                // }
            }
        }
        // Simulate receiving a callback from the external API
        // const simulateExternalAPICallback = () => {
        getVideo();
        // };

        // Simulate the callback after a timeout (for demonstration purposes)
        // const callbackTimeout = setTimeout(() => {
        //     simulateExternalAPICallback();
        // }, 3000); // Simulating callback after 3 seconds

        // // Clean up the timeout when the component unmounts or if the callback is received
        // return () => {
        //     clearTimeout(callbackTimeout);
        // };
    }, [script]);

    return apiData;
};

export default useCloneVideo;
