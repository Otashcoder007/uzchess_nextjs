"use client";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

type Language = {
    code: string;
    label: string;
};

const languages: Language[] = [
    {code: "en", label: "English"},
    {code: "uz-cy", label: "Ўзбекча"},
    {code: "ru", label: "Русский"},
];

export default function LanguageSwitcher() {
    const [selected, setSelected] = useState(languages[0]);
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const selectLanguage = (lang: Language) => {
        setSelected(lang);
        setOpen(false);
    };

    // close popup when clicking outside
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={ref} className="relative w-28 text-(--white) text-lg font-medium">
            <button
                className={`absolute -left-4 top-8 overflow-hidden w-44 origin-top rounded-lg ml-auto bg-(--dark1) border border-[#232B2F] 
        transition-all duration-200 ease-out
        ${
                    open
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
            >
                {languages.map((lang) => (
                    <div
                        key={lang.code}
                        onClick={() => selectLanguage(lang)}
                        className={`flex w-full h-11 sm:text-left border-b border-[#232B2F] items-center p-4 text-lg hover:cursor-pointer hover:bg-(--langHover) 
            ${
                            selected.code === lang.code
                        }`}
                    >
                        {lang.label}
                    </div>
                ))}
            </button>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 transition"
            >
                {selected.label}
                <span
                    className={`transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                >
                    <Image
                        src="/icons/up-down.svg"
                        alt="down"
                        width={24}
                        height={24}
                    />
                </span>
            </button>
        </div>
    );
}