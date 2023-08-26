import { useMemo } from 'react';

function useGeneratedUrl(baseURL: string, id: number | string) {
    const generatedUrl = useMemo(() => `${baseURL}/${id}`, [baseURL, id]);
    return generatedUrl;
}

export default useGeneratedUrl;
