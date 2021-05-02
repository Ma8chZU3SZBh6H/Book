import { Stripe } from './NavSvgs';

function NavPagerCounter({ children, className, theme }) {
    return <div className="relative h-full">
        <div className="absolute pointer-events-none">
            <Stripe color={theme ? "#005681" : "rgba(0, 98, 174, 1)"} />
        </div>
        <div className="relative z-10 h-full  w-12 grid items-center">
            <div className={`select-none text-center font-bold text-xl ${theme ? "text-nc3" : "text-nc3"} ${className}`}>
                {children}
            </div>
        </div>
    </div>
}

export default NavPagerCounter;