import { Stripe } from './NavSvgs';

function NavSocials({theme}) {
    return <div className="relative hidden sm:block ">
        <div className="absolute ">
            <Stripe color={theme ? "#005681" : "rgba(0, 151, 217, 1)"} />
        </div>
        <div className=" w-14   relative h-full grid items-center ">
            <a className=" " target="_blank" href="https://www.facebook.com/kaunoitmokykla/" >
                <svg className={`${theme ? "text-nc3" : "text-white"}  shadow-2xl mx-auto relative z-10`} width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0103 12.3743L11.6215 8.393H7.80106V5.80937C7.80106 4.72038 8.33456 3.65819 10.0457 3.65819H11.7824V0.268813C11.7824 0.268813 10.2066 0 8.69963 0C5.55362 0 3.49731 1.90713 3.49731 5.35906V8.39369H0V12.375H3.49731V22H7.80106V12.375L11.0103 12.3743Z" fill="currentColor" />
                </svg>
            </a>
        </div>
    </div>
}

export default NavSocials;