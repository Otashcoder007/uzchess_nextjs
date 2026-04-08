'use client'
import {ChangeEvent, KeyboardEvent, useRef} from "react";
import TimeReset from "@/components/sign-up/time-reset";
import Image from "next/image";

const OtpCodeSpecial = () => {
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>, index: number): void => {
        const value = e.target.value;

        if (value.length > 1) return;

        if (value && index < 5) {
            inputsRef.current[index + 1]?.focus();
        }
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        const current = inputsRef.current[index];
        if (e.key === "Backspace") {
            if (current?.value) {
                current.value = "";
            } else if (index > 0) {
                const prev = inputsRef.current[index - 1];
                if (prev) {
                    prev.focus();
                    prev.value = "";
                }
            }
        }
    }

    const number: string = '+998 88 033 18 05'

    return (
        <div>
            <div className={'flex flex-col gap-[20.5px] pb-[31.5px]'}>
                <h1 className={'text-xl font-bold'}>
                    A special code has been sent to the following number for verification
                </h1>
                <div
                    className={'flex items-center justify-center w-fit h-8.5 gap-2 pl-2 pr-1 bg-(--dark2) rounded-lg border border-(--borderStroke)'}>
                    <p className={'text-(--secondary)'}>{number}</p>
                    <div
                        className={'flex items-center justify-center w-6.5 h-6.5 rounded-sm bg-(--borderStroke) cursor-pointer active:scale-95'}>
                        <Image
                            width={22} height={22}
                            src={'/icons/editing.svg'} alt={'editing number'}/>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col gap-y-2'}>
                <p className={'text-(--secondary)'}>Enter the special code: </p>
                <div className={'flex flex-row gap-4 justify-between'}>
                    {[...Array(6)].map((_, number) => (
                        <input
                            className={'bg-(--dark2) w-14 h-13 text-center border border-(--borderStroke) rounded-lg text-3xl font-bold outline-none'}
                            type={'text'}
                            inputMode={'numeric'}
                            key={number}
                            maxLength={1}

                            ref={(el) => {
                                inputsRef.current[number] = el
                            }}
                            onChange={(e) => handleChange(e, number)}
                            onKeyDown={(e) => handleKeyDown(e, number)}
                        />
                    ))}
                </div>
                <TimeReset/>
            </div>
        </div>
    )
};

export default OtpCodeSpecial;