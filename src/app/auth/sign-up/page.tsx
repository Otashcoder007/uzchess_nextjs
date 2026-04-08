'use client'
import {useState} from "react";
import ByPhoneNumber from "@/components/sign-up/by-phone-number";
import ByEmail from "@/components/sign-up/by-email";
import Verification from "@/components/sign-up/verification";

export default function SignUpPage() {
    const [page, setPage] = useState('register')
    const [activeTab, setActiveTab] = useState('phone')
    return (
        <div className={'bg-(--dark) w-227.5 h-149.25 rounded-lg overflow-hidden flex'}>
            {page === 'register' && (
                <div className={'min-w-116.75 '}>
                    <div className="max-w-116.75 p-6 flex flex-col gap-5 border-b border-(--borderStroke)">
                        <h1 className={'font-bold text-xl leading-[130%]'}>Sign up</h1>
                        <div className={'flex w-max justify-between rounded-lg gap-2 bg-(--dark2) p-1 tabs'}>
                            <button
                                className={`w-50.25 h-8.75 rounded-sm text-(--secondary) ${activeTab === 'phone' ? 'w-50.25 h-8.75 rounded-sm bg-[#323639] text-(--white)' : ''}`}
                                onClick={() => setActiveTab('phone')}>
                                Via Phone Number
                            </button>
                            <button
                                className={`w-50.25 h-8.75 rounded-sm text-(--secondary) ${activeTab === 'email' ? 'w-50.25 h-8.75 rounded-sm bg-[#323639] text-(--white)' : ''}`}
                                onClick={() => setActiveTab('email')}>
                                Via E-Mail
                            </button>
                        </div>
                    </div>
                    <div className={'p-6 h-114.75 flex flex-col justify-between'}>
                        <div className={'h-41.5 pb-8'}>
                            {activeTab === 'phone' && (<ByPhoneNumber tel={''} setTel={() => {
                            }}/>)}
                            {activeTab === 'email' && (<ByEmail/>)}
                        </div>
                        <div>
                            <p className={'h-fit  text-sm font-normal w-105 pb-9.25'}>
                                By clicking the Register button, I accept the <span
                                className={'text-(--blue) hover:cursor-pointer'}>terms and conditions</span> of use.
                            </p>
                            <div className={'flex flex-col'}>
                                <button
                                    className={'bg-(--blue) h-11 rounded-lg hover:cursor-pointer active:scale-97'}
                                    onClick={() => setPage('verification')}
                                >
                                    Register
                                </button>
                                <div className={'flex items-center gap-6 pt-3.5 pb-6.5'}>
                                    <div className={'h-px w-full bg-(--secondary)'}/>
                                    or
                                    <div className={'h-px w-full bg-(--secondary)'}/>
                                </div>
                                <button className={'bg-(--blur) h-11 rounded-lg hover:cursor-pointer active:scale-97'}>
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {page === 'verification' && (
                <Verification page={page} setPage={setPage}/>
            )}
            <div className={'w-full h-full bg-(--blue) opacity-30'}/>
        </div>
    )
};