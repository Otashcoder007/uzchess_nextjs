'use client'
import Image from 'next/image'
import {useState} from "react";
import SignUp from "@/app/auth/sign-up/page";

export const SignUpButton = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button
                className='flex gap-2.5 justify-center items-center w-33 h-10 bg-(--blue) rounded-lg shrink-0 text-[1rem] text-(--white) hover:cursor-pointer transition-transform duration-150 ease-in active:transform active:scale-95'
                onClick={() => setOpen(true)}>
                Sign Up
                <Image width={20} height={20} src={'/icons/signIn.svg'} alt={'Sign In'}/>
            </button>
            {open && (
                <div className={'fixed w-full pt-20 pl-78.25 h-full z-50 top-0 left-0 bg-(--bgMatte)'} onClick={() => setOpen(false)}>
                    <div
                        className={'flex justify-center items-start relative w-227.5 h-149.25'}
                         onClick={(e) => e.stopPropagation()}
                    >
                        <SignUp/>
                        <button
                            className={'absolute -right-13 w-10 h-10 bg-(--dark) flex items-center justify-center rounded-lg hover:cursor-pointer active:scale-95'}
                            onClick={() => setOpen(false)}>
                            <Image width={32} height={32} src={'/icons/exit.svg'} alt={'exit'}/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}