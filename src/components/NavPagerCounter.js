import { Stripe } from './NavSvgs';

function NavPagerCounter({ children, className }) {
    return <div className="relative h-full">
        <div className="absolute pointer-events-none">
            <Stripe />
        </div>
        <div className="relative z-10 h-full  w-12 grid items-center">
            <div className={`select-none text-center font-bold text-xl text-nc3 ${className}`}>
                {children}
            </div>
        </div>
    </div>
}

export default NavPagerCounter;