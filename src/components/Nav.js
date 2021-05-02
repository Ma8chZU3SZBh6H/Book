import NavLogo from './NavLogo';
import NavPager from './NavPager';
import NavSocials from './NavSocials';

function Nav({setTheme, theme}) {
    return <nav className={`mb-4 ${theme ? 'bg-mc1' : 'bg-gradient-to-b from-mc2 to-transparent'} flex  flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-stretch`}>
        <NavLogo setTheme={setTheme} theme={theme} />
        <NavPager theme={theme} />
        <NavSocials theme={theme} />
    </nav>
}

export default Nav;