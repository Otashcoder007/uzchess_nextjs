import LanguageSwitcher from "@/components/shared/header/left-side/LangSwitcher";
import Divider from "@/components/shared/header/divider";
import Image from "next/image";
import Link from "next/link";

export default function LeftSide() {
    return (
        <div className={'flex items-center h-6 gap-3 mr-auto ml-auto shrink-0'}>
            <Link href={'/'}>
                <Image
                    className={'pb-2.25'}
                    src="/logos/headerLogo.png"
                    alt="main logo"
                    width={104}
                    height={40}
                    loading={'eager'}
                />
            </Link>
            <Divider/>
            <LanguageSwitcher/>
        </div>
    )
}