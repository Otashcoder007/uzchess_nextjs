import Link from "next/link";
import Image from "next/image";

const Library = () => {
    return (
        <Link href={'/library'}>
            <button
                className={'buttons'}
            >
                <Image width={326} height={108} src={'/icons/bg_library.svg'} alt={''} loading={'eager'}/>
                <p>
                    <Image width={44} height={44} src={'/icons/books.svg'} alt={'sad'}/>
                    Library
                </p>
            </button>
        </Link>
    )
};

export default Library;