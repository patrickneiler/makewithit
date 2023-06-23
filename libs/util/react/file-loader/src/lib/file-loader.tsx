import React, { useEffect, useState } from "react";

type FileContent = { [key: string]: any };

interface FileLoaderProps {
    fileName: string;
    filePath: string;
}

export const FileLoader: React.FC<FileLoaderProps> = ({ fileName, filePath }) => {
    const [fileContent, setFileContent] = useState<FileContent | null>(null);

    useEffect(() => {
        const fetchFileContent = async () => {
            try {
                const response = await fetch(`${filePath}/${fileName}`);
                const data = await response.json();
                setFileContent(data);
            } catch (error) {
                console.error("Error loading file:", error);
            }
        };

        fetchFileContent();
    }, [fileName, filePath]);

    if (fileContent === null) {
        return <div>Loading file...</div>;
    }

    return (
        <div>
            <pre>{JSON.stringify(fileContent, null, 2)}</pre>
        </div>
    );
};

export default FileLoader;
