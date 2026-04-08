'use client'
import {useEffect, useState} from "react";
import Image from "next/image";


const TimeReset = () => {
    const [time, setTime] = useState(60)

    useEffect(() => {
        if (time <= 0) return
        const timeout = setTimeout(() => {
            setTime((prev) => prev - 1)
        }, 1000)
        return () => clearTimeout(timeout)
    }, [time])

    const handleReset = () => {
        setTime(60)
    }
    return (
        <div className={'flex items-center gap-2 w-fit h-6.5'}>
            <p>Resend: </p>
            {time > 0 ? (
                <span
                    className={`p-0.5 rounded-sm border ${time > 29 ? 'text-(--green) bg-[#82CC2735]' : time > 9 ? 'text-(--yellow) bg-[#E0B53135]' : 'text-(--red) bg-[#DC2D2D35]'}`}>00:{String(time).padStart(2, '0')}</span>
            ) : (
                <button className={'flex gap-2'}>
                    <div
                        className={'flex items-center justify-center w-6.5 h-6.5 rounded-sm bg-(--borderStroke) cursor-pointer active:scale-95'}
                    >
                        <Image
                            onClick={handleReset}
                            width={22} height={22}
                            src={'/icons/resend.svg'} alt={'resend'}/>
                    </div>
                </button>
            )}
        </div>
    )
};

export default TimeReset;