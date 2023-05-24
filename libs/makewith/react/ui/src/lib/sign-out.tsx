'use client';

import { logout } from "@the/util/react/firebase";
import { useRouter } from "next/navigation";

export function SignOut(): JSX.Element {
    const router = useRouter();
    logout().then(_ => router.push('/'));
    return (
        <div>Logging out...</div>
    )
}
export default SignOut;