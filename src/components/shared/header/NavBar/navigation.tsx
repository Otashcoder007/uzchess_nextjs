'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

type NavItem = {
    name: string;
    href: string;
};

const navItems: NavItem[] = [
    {name: "Main", href: "/"},
    {name: "News", href: "/news"},
    {name: "Courses", href: "/courses"},
    {name: "Library", href: "/library"},
    {name: "Contact", href: "/contact"},
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav>
            <ul className={'flex gap-10'}>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative pb-2 text-[#B5B7B8] hover:text-white transition"
                        >
                            {item.name}

                            <span
                                className={`absolute rounded-lg left-0 bottom-0 h-0.5 w-full bg-(--blue) transition-all duration-400 ${
                                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                                } origin-left`}
                            />
                        </Link>
                    );
                })}
            </ul>
        </nav>
    )
}