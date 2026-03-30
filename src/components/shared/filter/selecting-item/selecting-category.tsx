'use client'
import {useState} from "react";
import Image from "next/image";

const SelectingCategory = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <h1 className={'uppercase font-medium pb-4 text-[12px] text-(--secondaryLow)'}>Choose your category:</h1>
            <div className={'relative flex justify-between rounded-lg border-2 border-(--stroke) p-3.75 w-full bg-(--dark2)'}>
                <p className={'font-medium text-lg'}>All</p>
                <button onClick={()=>setOpen(true)}>
                    <Image width={24} height={24} src={'/icons/up-down.svg'} alt={'icon'}/>
                </button>
                {open && (
                    <div className={'absolute z-1 w-83.5 top-10 border-2 border-(--stroke) rounded-lg p-3.75 bg-(--dark2)'}>
                        <li onClick={()=>setOpen(false)} className={'font-medium text-lg h-7'}>Strategy</li>
                        <li onClick={()=>setOpen(false)} className={'font-medium text-lg h-7'}>Protecting</li>
                        <li onClick={()=>setOpen(false)} className={'font-medium text-lg h-7'}>Rules</li>
                        <li onClick={()=>setOpen(false)} className={'font-medium text-lg h-7'}>War</li>
                    </div>
                )}
            </div>
        </div>
    )
};

export default SelectingCategory;