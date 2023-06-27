'use client';

import { useState } from "react";

type LoaderProps = {
    shown?: boolean;
}

export function Loader({
    shown = false
}: LoaderProps): JSX.Element {
    const [active, setActive] = useState(true);

    return (

        <div className='absolute h-24 w-24 z-50 bg-red-500 flex items-center justify-center'>
            <div onClick={() => setActive(!active)} className={(active ? 'active' : '') + " loader"}>
                <div className="panel bg-red-500"></div>
                <div className="gears"></div>
            </div>
        </div>
    )
}
export default Loader;