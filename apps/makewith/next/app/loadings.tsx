// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// export const LoadingOverlay: React.FC = () => {
//     const [loading, setLoading] = useState<boolean>(false);
//     const router = useRouter();
//     useEffect(() => {
//         const handleStart = () => {
//             setLoading(true);
//         };

//         const handleComplete = () => {
//             setLoading(false);
//         };

//         router.events.on('routeChangeStart', handleStart);
//         router.events.on('routeChangeComplete', handleComplete);
//         router.events.on('routeChangeError', handleComplete);

//         return () => {
//             router.events.off('routeChangeStart', handleStart);
//             router.events.off('routeChangeComplete', handleComplete);
//             router.events.off('routeChangeError', handleComplete);
//         };
//     }, [router]);

//     return loading ? (
//         <div
//             style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 background: 'rgba(0, 0, 0, 0.5)',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 zIndex: 9999,
//             }}
//         >
//             <h2>Loading...</h2>
//         </div>
//     ) : null;
// };

// export default LoadingOverlay;
