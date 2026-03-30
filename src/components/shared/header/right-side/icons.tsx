'use client'
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export function Icons() {
    const [open, setOpen] = useState(false)
    return (
        <div className={'flex gap-6 shrink-0'}>
            <Image className={'hover:cursor-pointer active:transform active:scale-97'} width={24} height={24}
                   src='/icons/search.svg' alt={'search'}/>
            <Link href={'/cart'}>
                <Image className={'hover:cursor-pointer active:transform active:scale-97'} width={24} height={24}
                       src='/icons/cart.svg' alt={'cart'}/>
            </Link>
            <button onClick={() => setOpen(true)}>
                <Image className={'hover:cursor-pointer active:transform active:scale-97'} width={24} height={24}
                       src='/icons/notification.svg' alt={'notification'}/>
            </button>
            {open && (
                <div className={'fixed z-50 right-0 top-0 w-screen h-screen bg-(--bgMatte)'}>
                    <div className={'absolute  w-118.75 h-full right-0 bg-(--dark)'}>
                        <div
                            className={'flex h-20 gap-55 text-2xl justify-around items-center border-b border-(--border)'}
                        >
                            <h1 className={'font-bold'}>Notifications</h1>
                            <button className={'hover:cursor-pointer active:scale-95 transition-all'}
                                    onClick={() => setOpen(false)}>
                                <Image width={32} height={32} src={'/icons/exit.svg'} alt={'exit'}/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}