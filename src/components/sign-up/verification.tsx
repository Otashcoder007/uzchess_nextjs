import Image from "next/image";
import OtpCodeSpecial from "@/components/sign-up/otp-code-special";

interface VerificationProps {
    page?: string,
    setPage?: (value: (((prevState: string) => string) | string)) => void
}

const Verification = ({page, setPage}: VerificationProps) => {
    return (
        <div className={'min-w-116.75'}>
            <div className={'flex items-center w-full gap-6 p-6 border-b border-(--borderStroke)'}>
                <button
                    onClick={() => setPage?.('register')}
                    className={'p-1 w-8 h-13 bg-(--bgBack) rounded-bl-lg rounded-br-xs rounded-tl-lg rounded-tr-xs hover:cursor-pointer active:scale-95'}>
                    <Image
                        width={24} height={24}
                        src={'/icons/back.svg'} alt={''}
                    />
                </button>
                <h1 className={'font-bold text-xl'}>Verification of number</h1>
            </div>

            <div className={'p-6'}>
                <OtpCodeSpecial/>
            </div>
        </div>
    )
}

export default Verification;