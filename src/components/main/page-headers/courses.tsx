import Link from "next/link";
import Image from "next/image";

const Courses = () => {
    return (
        <Link href={'/courses'}>
            <button
                className={'buttons'}
            >
                <Image width={326} height={108} src={'/icons/bg_cap.svg'} alt={''} loading={'eager'}/>
                <p>
                    <Image width={44} height={44} src={'/icons/cap.svg'} alt={'sad'}/>
                    Courses
                </p>
            </button>
        </Link>
    )
};

export default Courses;