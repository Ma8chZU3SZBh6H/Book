import { Stripe } from './NavSvgs';
import KITM_LOGO from "../images/kitm-v2.png";

function NavLogo() {
    return <div className="hidden sm:flex" >
        <div className="relative flex h-full">
            <div className=" absolute flex" >
                <Stripe />
                <Stripe />
                <Stripe />
                <Stripe />
            </div>
        </div>
        <div className="flex relative z-10">
            <img className="select-none" width={40} src={KITM_LOGO} alt="KITM LOGO" />
            <h1 className="select-none ml-2 tracking-wider text-3xl font-bold text-nc3">KITM</h1>
        </div>
    </div>
}

export default NavLogo;