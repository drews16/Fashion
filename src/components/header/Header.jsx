import logoImg from './../../img/icons/logo.svg';
import './header.css';

function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-content'>
                    <div className='header__logo'>
                        <img src={logoImg} alt='Logo' />
                        <span>Fashion</span>
                    </div>
                    <nav className='header__nav'>
                        <ul>
                            <li><a href='#!'>Lifestyle</a></li>
                            <li><a href='#!'>Catalogue</a></li>
                            <li><a href='#!'>Favorites</a></li>
                            <li><a href='#!'>Fashion</a></li>
                            <li><a href='#!' className='header__nav-btn'>Sign up</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;