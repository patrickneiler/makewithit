import React, { ReactNode, useRef, useState } from 'react';

type Props = {
    children: ReactNode
};

export const CopyCodeToClipboard: React.FC<Props> = ({ children }) => {
    const codeRef = useRef<HTMLDivElement>(null);
    const [copied, setCopied] = useState<boolean>();

    const handleCopyClick = () => {
        if (codeRef.current) {
            const combinedCode = Array.from(codeRef.current.getElementsByTagName('code'))
                .map((codeElement) => codeElement.innerText)
                .join('\n');

            navigator.clipboard.writeText(combinedCode)
                .then(() => {
                    console.log('Code copied to clipboard:', combinedCode);
                    setCopied(true);
                })
                .catch((error) => {
                    console.error('Failed to copy code to clipboard:', error);
                    setCopied(false);
                });
        }
    };

    return (
        <pre className="language-html p2 mt-0 relative">
            {children}
            <button className='text-white absolute opacity-50 hover:opacity-100 top-0 right-0 p-2' onClick={handleCopyClick}>
                {copied ?
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 flex items-center justify-center" height="16" width="16" viewBox="0 0 16 16"><title>Copied!</title><g fill="currentColor" className="nc-icon-wrapper"><path data-color="color-2" d="M2,7H1A.945.945,0,0,0,0,8v7a.945.945,0,0,0,1,1H2Z"></path><path d="M14,6H9V2A1.89,1.89,0,0,0,7,0L4,7v9h8a2.908,2.908,0,0,0,2.9-2.4l1-5.2A1.937,1.937,0,0,0,14,6Z" fill="currentColor"></path></g></svg>
                    ) :
                    (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 flex items-center" height="16" width="16" viewBox="0 0 16 16"><title>Copy to Clipboard</title><g fill="currentColor" className="nc-icon-wrapper"><path fill="currentColor" d="M15,15V5l-5-5H2C1.4,0,1,0.4,1,1v14c0,0.6,0.4,1,1,1h12C14.6,16,15,15.6,15,15z M3,2h6v4h4v8H3V2z"></path></g></svg>
                    )}
            </button>
            <div style={{ display: 'none' }} ref={codeRef}>
                {children}
            </div>
        </pre>
    );
};

export default CopyCodeToClipboard;
