import {RightSide} from "@/components/shared/header/right-side/RightSide";
import Navigation from "@/components/shared/header/NavBar/navigation";
import LeftSide from "@/components/shared/header/left-side/LeftSide";

const Header = () => {
    return (
        <header className={'header'}>
            <LeftSide/>
            <Navigation/>
            <RightSide/>
        </header>
    )
};

export default Header;