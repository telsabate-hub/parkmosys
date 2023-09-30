import { useRef, MouseEvent } from 'react';
import logo from '../assets/logo_smaller.png';
import '../styles/navbar.css';

function Menu(){
    const navRef = useRef<HTMLDivElement>(null);

    const showNavbar = (): void => {
        navRef.current?.classList.toggle("active");
    };

    const selectLink = (e: MouseEvent): void => {
        const elem = (e.target as HTMLElement);

        resetSelectedLink();
        elem.classList.toggle("active");
    };

    const resetSelectedLink = (): void => {
        document.getElementById("homeLink")?.classList.remove("active");
        document.getElementById("contactLink")?.classList.remove("active");
    };

    return (
        <>
            <header className='menu'>
                <div id="logo-div">
                    <img src={logo} className="logo" alt="Company logo" />
                </div>
                <nav className='nav-container'>
                    <div id='toggle-btn' onClick={showNavbar}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                    <div id='navbar-links' ref={navRef}>
                        <ul>
                            <li><a href="#" id='homeLink' className='active' onClick={selectLink}>HOME</a></li>
                            <li><a href="#" id='contactLink' onClick={selectLink}>CONTACT</a></li>
                        </ul>
                        <button style={{marginLeft: '5px'}}>BOOK NOW!</button>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Menu;