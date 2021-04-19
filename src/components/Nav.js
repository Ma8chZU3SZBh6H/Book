import NavLogo from './NavLogo';
import NavPager from './NavPager';
import NavSocials from './NavSocials';

function Nav() {
    return <nav className="mb-4 bg-mc2  flex  flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-stretch">
        <NavLogo />
        <NavPager />
        <NavSocials />
    </nav>
}

export default Nav;