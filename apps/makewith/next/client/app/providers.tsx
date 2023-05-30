"use client";

import { PropsWithChildren } from "react";
import { ReduxProvider } from "@the/makewith/react/data-access";
import { AuthProvider } from "@the/feature/react/auth";
import { CaseStudiesProvider } from "@the/makewith/react/ui";

type P = PropsWithChildren;

export function Providers({ children }: P) {

    return ( // you can have multiple client side providers wrapped, in this case I am also using NextUIProvider
        <>
            <ReduxProvider>
                <AuthProvider>
                    <CaseStudiesProvider>
                        {children}
                    </CaseStudiesProvider>
                </AuthProvider>

            </ReduxProvider>
        </>
    );
}
export default Providers;