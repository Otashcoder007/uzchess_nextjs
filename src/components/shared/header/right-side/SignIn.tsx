import Image from 'next/image'

export const SignIn = () => {
    return (
        <button
            className='
                    flex gap-2.5
                    justify-center items-center
                    w-33 h-10 bg-(--blue)
                    rounded-lg shrink-0
                    text-[1rem] text-(--white)
                    hover:cursor-pointer
                    transition-transform
                    duration-150 ease-in
                    active:transform active:scale-95
                '
        >
            Sign In
            <Image width={20} height={20} src={'/icons/signIn.svg'} alt={'Sign In'}/>
        </button>
    )
}