"use client";
import React, { useState } from 'react'
import { signIn, type SignInInput, confirmSignIn } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation'

import { Toast } from "@/components/toast"

function LoginPage() {
    const router = useRouter()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<any>(null);

    const handleSignIn = async ({ username, password }: SignInInput) => {
        if (!username || !password) {
            setError('Username and password are required');
            return;
        }
        try {
            const { isSignedIn, nextStep } = await signIn({ username, password });
            console.log(isSignedIn, nextStep)
            if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
                // const userAttributes = {};

                // const res = await confirmSignIn({
                //     challengeResponse: 'newPassword',
                //     options: {
                //         userAttributes
                //     }
                // });
                // console.log(res)
            }
            else if (nextStep.signInStep === 'RESET_PASSWORD') {
                Toast.fire({
                    icon: 'error',
                    title: 'Please reset your password',
                    html: `
                        You will need to reset your password before you can sign in.
                        <a href="/forgetpassword" class="text-primary" autofocus>Reset now -></a>
                    `,
                    showCloseButton: true,
                    toast: false,
                    position: 'center',
                    timer: 0,
                });

            }
            else if (nextStep.signInStep === 'DONE') {
                Toast.fire({
                    icon: 'success',
                    title: 'Sign in successful',
                });
                router.push('/admin')
                setTimeout(() => {
                    router.refresh()
                }, 1500);
            }
        } catch (error) {
            console.log('error signing in', error);
            setError(`Error signing in: ${error}`);
        }
    }
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="w-4/12 p-6 bg-white/30 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-5 text-center">Sign In</h2>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    <div>
                        <a href="/forgetpassword" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={() => {
                                handleSignIn({
                                    username: username,
                                    password: password,
                                })
                            }}
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginPage