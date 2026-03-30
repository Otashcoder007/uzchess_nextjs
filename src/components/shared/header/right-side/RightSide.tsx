import {SignIn} from "@/components/shared/header/right-side/SignIn";
import {Icons} from "@/components/shared/header/right-side/icons";
import Divider from "@/components/shared/header/divider";

export const RightSide = () => {
    return (
        <div className={'flex items-center gap-5'}>
            <Icons/>
            <Divider/>
            <SignIn/>
        </div>
    )
}