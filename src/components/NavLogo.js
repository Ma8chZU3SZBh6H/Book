import { Stripe } from './NavSvgs';
import KITM_LOGO from "../images/kitm-v2.png";
import { useState } from 'react';

function NavLogo({setTheme, theme}) {

    return <div className="hidden sm:flex" >
        <div className="relative flex h-full">
            <div className=" absolute flex" >
                <Stripe color={theme ? "#005681" : "rgba(0, 151, 217, 1)"} />
                <Stripe color={theme ? "#005681" : "rgba(0, 151, 217, 1)"} />
                <Stripe color={theme ? "#005681" : "rgba(0, 151, 217, 1)"} />
                <Stripe color={theme ? "#005681" : "rgba(0, 151, 217, 1)"} />
            </div>
        </div>
        <div className="flex relative z-10">
            <img className="select-none border bg-white" width={40} src={KITM_LOGO} alt="KITM LOGO" />
            <h1 className={`select-none ml-2 tracking-wider text-3xl font-bold ${theme ? "text-nc3" : "text-white"}`}>KITM</h1>
            <div onClick={()=>setTheme(!theme)} className={`transform rotate-45 ml-3 transition-all rounded-full bg-mc1 w-5 flex  flex-col ${theme ? 'justify-start' : 'justify-end'} `}>
                <div className={`bg-mc3 w-4 h-4 rounded-full mx-auto my-1`}>
                    
                </div>
            </div>
        </div>
    </div>
}

export default NavLogo;