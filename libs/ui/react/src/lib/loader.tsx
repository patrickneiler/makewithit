'use client';

type LoaderProps = {
    shown?: boolean;
}

export function Loader({
    shown = false
}: LoaderProps): JSX.Element {
    return (
        <div className="absolute h-full w-full z-50 bg-gray-900 opacity-80">
        </div>
    )
}
export default Loader;