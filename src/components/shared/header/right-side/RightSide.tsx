import {SignUpButton} from "@/components/shared/header/right-side/SignUpButton";
import {Icons} from "@/components/shared/header/right-side/icons";
import Divider from "@/components/shared/header/divider";

export const RightSide = () => {
    return (
        <div className={'flex items-center gap-5'}>
            <Icons/>
            <Divider/>
            <SignUpButton/>
        </div>
    )
}