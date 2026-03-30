import Image from "next/image";

const PageHeader = () => {
    return (
        <div className={'pageHeader'}>
            <div className={'relative w-11 h-11'}>
                <Image
                    className={'absolute top-0 '}
                    width={44} height={44} loading={'eager'} src={'/icons/cap.svg'} alt={'cap'}/>
                <Image
                    className={'absolute top-0 opacity-100 blur-xl'}
                    width={44} height={44} loading={'eager'} src={'/icons/cap.svg'} alt={'cap'}/>
            </div>
            Courses
        </div>
    )
};

export default PageHeader;