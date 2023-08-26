import { NextApiRequest, NextApiResponse } from 'next';

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

const createTalk = async (input: string) => {
    try {
        const response = await fetch(`${DID_API.url}/talks`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: `Basic ${DID_API.key}`,
            },
            body: JSON.stringify({
                "script": {
                    "type": "text",
                    "subtitles": "false",
                    "provider": {
                        "type": "microsoft",
                        "voice_id": "en-US-ChristopherNeural"
                    },
                    "ssml": "false",
                    "input": input
                },
                "config": {
                    "fluent": true,
                    "pad_audio": 4
                },
                "source_url": "https://firebasestorage.googleapis.com/v0/b/make-with-it-firebase.appspot.com/o/IMG_3685.JPG?alt=media&token=0fb89e69-d1dd-4913-9006-7f928071cab2"
            })
        })
        if (response.ok) {
            return response;
        } else {
            console.error('Failed to fetch data from API');
        }
    } catch (error) {
        console.error('An error occurred while fetching data:', error);
    }
};

const getTalk = async (id: string) => {
    try {
        const response = await fetch(`${DID_API.url}/chats/${id}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Failed to fetch data from API');
        }
    }  catch (error) {
        console.error('An error occurred while fetching data:', error);
    }
}

export default async function POST(
    req: Request
) {
    const {script} = await req.json();
    const response = await fetch(DID_API.url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Basic ${DID_API.key}`, // Replace with your token
        },
        body: JSON.stringify({
            "script": {
                "type": "text",
                "subtitles": "false",
                "provider": {
                    "type": "microsoft",
                    "voice_id": "en-US-ChristopherNeural"
                },
                "ssml": "false",
                "input": script
            },
            "config": {
                "fluent": true,
                "pad_audio": 4
            },
            "source_url": "https://firebasestorage.googleapis.com/v0/b/make-with-it-firebase.appspot.com/o/IMG_3685.JPG?alt=media&token=0fb89e69-d1dd-4913-9006-7f928071cab2"
        })
    });
    return response;
}
    