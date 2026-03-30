import Image from "next/image";
import Link from "next/link";

const BreadCrumb = () => {
    return (
        <div className={'breadCrumb'}>
            <Image width={24} height={24} src={'/bread-crumb/blueHome.svg'} alt={'home'}/>
            <Link href={'/'}><h1>Home</h1></Link>
            <Image width={8} height={8} src={'/bread-crumb/rook.svg'} alt={'rook'}/>
            <Link href={'/courses'}><p>Courses</p></Link>
        </div>
    )
};

export default BreadCrumb;