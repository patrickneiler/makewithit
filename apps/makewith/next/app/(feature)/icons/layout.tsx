'use client'

export default function IconsLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <section>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10">
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {children}
                </div>
            </section>
        </>
    );
}
