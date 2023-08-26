import { useEffect, useState } from 'react';

interface ApiResponse {
    // Define the properties you expect in the API response object
    // For example: id, message, etc.
    id: string;
    // Add more properties as needed
}

function useExternalApiCallback(callbackUrl: string) {
    const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(callbackUrl);
                if (response.ok) {
                    const data: ApiResponse = await response.json();
                    setApiResponse(data);
                } else {
                    console.error('Failed to fetch data from API');
                }
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        };

        fetchData();
    }, [callbackUrl]);

    return apiResponse;
}

export default useExternalApiCallback;
