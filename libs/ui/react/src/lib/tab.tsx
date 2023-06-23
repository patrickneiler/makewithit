'use client'

import { useEffect, useCallback, ReactNode, RefObject } from 'react'

import { Transition } from '@headlessui/react'

type TabProps = {
    children: ReactNode,
    show: boolean,
    tabs: RefObject<HTMLDivElement | null>
}

export function Tab({ show = false, tabs, children }: TabProps) {

    const heightFix = useCallback(() => {
        const transtionEl = tabs.current?.querySelector<HTMLDivElement>('.transition-all');
        const itemsEl = tabs.current?.querySelector<HTMLDivElement>('.children-items');
        if (tabs && tabs.current && transtionEl && itemsEl) {
            transtionEl.style.height = `${itemsEl.clientHeight}px`
        }
    }, [tabs])

    useEffect(() => {
        heightFix()
    }, [heightFix])

    return (
        <Transition
            show={show}
            className="w-full"
            enter="transition ease-in-out duration-500 transform order-first"
            enterFrom="opacity-0 scale-98"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-300 transform absolute"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-98"
            beforeEnter={() => heightFix()}
        >
            <article className="relative max-w-md mx-auto md:max-w-none">
                {children}
            </article>
        </Transition>
    )
}
export default Tab