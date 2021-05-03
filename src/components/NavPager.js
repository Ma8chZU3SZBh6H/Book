import { ArrowLeft, ArrowRight } from './NavSvgs';
import NavPagerCounter from './NavPagerCounter';

function NavPager({theme}) {
    return <div className="relative flex overflow-hidden sm:overflow-visible ">
        <div className=" grid items-center mr-5">
            <ArrowLeft color={theme ? "rgba(174, 222, 248, 1)" : "white"} className="btn-prev cursor-pointer" />
        </div>
        <div className="mr-2 ">
            <NavPagerCounter theme={theme} className="page-current">1</NavPagerCounter>
        </div>
        <div className="ml-2">
            <NavPagerCounter theme={theme} className="page-total">10</NavPagerCounter>
        </div>
        <div className=" grid items-center ml-5">
            <ArrowRight color={theme ? "rgba(174, 222, 248, 1)" : "white"} className="btn-next cursor-pointer" />
        </div>
    </div>
}

export default NavPager;