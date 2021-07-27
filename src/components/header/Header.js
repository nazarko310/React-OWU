import './Header.css'

export default function Header() {
    return (
        <div className='header'>
                <div className='header__inner'>
                    <div className='header__logo'>Logo</div>
                    <nav className='header__menu'>
                        <a href="#" className='header__menu-link'>Home</a>
                        <a href="#" className='header__menu-link'>Community</a>
                        <a href="#" className='header__menu-link'>Discovery</a>
                        <a href="#" className='header__menu-link'>Coming soon</a>
                    </nav>
                </div>
        </div>
    )
}