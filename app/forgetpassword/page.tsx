"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { resetPassword, confirmResetPassword, AuthError } from 'aws-amplify/auth';
import { Toast } from '@/components/toast';

const ForgetPassportPage = () => {
    const router = useRouter()
    const [step, setStep] = useState(1);

    const [forgotUsername, setForgotUsername] = useState('');
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const handleForgotPassword = async () => {
        if (!forgotUsername && step === 1) {
            Toast.fire({
                icon: 'error',
                title: 'Please enter username'
            });
            return;
        }
        try {
            const output = await resetPassword({ username: forgotUsername });
            console.log(output)
            const { nextStep } = output;
            if (nextStep.resetPasswordStep === 'CONFIRM_RESET_PASSWORD_WITH_CODE') {
                Toast.fire({
                    icon: 'success',
                    title: 'Code sent to your email'
                });
                setStep(2);
            }
        } catch (error) {
            if (error instanceof AuthError) {
                console.log('Auth error')
                Toast.fire({
                    icon: 'error',
                    title: error.message
                });
            }
            else {
                Toast.fire({
                    icon: 'error',
                    title: `Something went wrong - ${error}`
                });
            }
        }
    }

    const handleResetPassword = async () => {
        if (!code && step === 2) {
            Toast.fire({
                icon: 'error',
                title: 'Please enter code'
            });
            return;
        }
        if (!newPassword && step === 2) {
            Toast.fire({
                icon: 'error',
                title: 'Please enter new password'
            });
            return;
        }
        try {
            const res = await confirmResetPassword({ username: forgotUsername, confirmationCode: code, newPassword: newPassword });
            Toast.fire({
                icon: 'success',
                title: 'Password reset successfully'
            });
            router.push('/login');
        } catch (error) {
            if (error instanceof AuthError) {
                Toast.fire({
                    icon: 'error',
                    title: error.message
                });
            }
            console.log('error reset password', error);
        }
    }
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="w-4/12 p-6 bg-white/30 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-5 text-center">Reset Password</h2>
                <div className="w-full px-8 py-4">
                    <div className="relative flex items-center justify-between w-full">
                        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
                        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-900 transition-all duration-500">
                        </div>
                        <div
                            className={`relative z-10 grid w-10 h-10 font-bold ${step === 1 ? "text-white bg-primary" : "text-gray-900 bg-gray-300"} transition-all duration-300 rounded-full place-items-center`}>
                            1
                        </div>
                        <div
                            className={`relative z-10 grid w-10 h-10 font-bold ${step === 2 ? "text-white bg-primary" : "text-gray-900 bg-gray-300"} transition-all duration-300 rounded-full place-items-center`}>
                            2
                        </div>
                    </div>
                    <div className="mt-8">
                        {step === 1 && (
                            <div>
                                <label className="block text-sm font-bold text-gray-700">Username</label>
                                <input
                                    type="text"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                    value={forgotUsername}
                                    onChange={(e) => setForgotUsername(e.target.value)}
                                />
                            </div>
                        )}
                        {step === 2 && (
                            <div>
                                <label className="block text-sm font-bold text-gray-700">Code</label>
                                <input
                                    type="text"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                />
                                <label className="block text-sm font-bold text-gray-700">New Password</label>
                                <input
                                    type="password"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </div>
                        )}
                    </div>
                    <div className='flex justify-end mt-8'>
                        {step === 1 && (
                            <button
                                className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                onClick={handleForgotPassword}
                            >
                                Send Code
                            </button>
                        )}
                        {step === 2 && (
                            <button
                                className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                onClick={handleResetPassword}
                            >
                                Reset Password
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </main>
    )
}

export default ForgetPassportPage