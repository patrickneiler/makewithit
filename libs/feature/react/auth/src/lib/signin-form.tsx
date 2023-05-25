/* eslint-disable no-irregular-whitespace */
'use client';

import { FormEvent, Fragment, useContext, useState } from "react";
import { signIn } from "@the/util/react/firebase";
import { UserContext } from '@the/makewith/react/data-access';
import { useRouter } from "next/navigation";
import { Loader } from '@the/ui/react';

export const SignInForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [error, seterror] = useState("");
    const { addUser } = useContext(UserContext);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await signIn(email, password);
            if (res.user) {
                addUser(res.user);
                router.push('/proposal');
            }
        } catch (error: any) {
            seterror(error);
            setLoading(false);
        }
    }

    return (
        <Fragment>
            {error ? <div>{error}</div> : null}

            <form className={loading ? "pointer-events-none opacity-30" : "" + " relative"} onSubmit={handleSubmit}>

                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label
                            className="block text-gray-300 text-sm font-medium mb-1"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="form-input w-full text-gray-800"
                            placeholder="you@yourcompany.com"
                            required
                            name="email"
                            autoComplete='false'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                        <label
                            className="block text-gray-300 text-sm font-medium mb-1"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            className="form-input w-full text-gray-800"
                            placeholder="Password (at least 10 characters)"
                            required
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                        <button type="submit" className="btn text-teal-900 bg-teal-600 hover:bg-teal-700 w-full">
                            Sign in
                        </button>
                    </div>
                </div>
            </form>
        </Fragment>
    );
};

export default SignInForm;