import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png'
import './index.css'





export default function Navbar() {
    const [scrollBgColor, setScrollBgColor] = useState('initial');
    const [scrollSticky, setScrollSticky] = useState('initial');

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 400) {
                setScrollBgColor(`#270b3d`);
                setScrollSticky('sticky')
            } else {
                setScrollBgColor('initial');
                setScrollSticky('initial')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='container-fluid navbar-position' style={{ backgroundColor: scrollBgColor, position: scrollSticky }}>
            <div className="row">
                <div className='col-4 p-1 d-flex justify-content-center align-items-center'>
                    <img className='logo-config' src={logo} alt="logo" />
                </div>
                <div className="col-8 d-flex justify-content-center align-items-center">
                    <a className='m-2 main-nav-link' onClick={() => scrollToSection('sobre-nosotros')}>
                        Sobre Nosotros
                    </a>
                    <a className='m-2 main-nav-link' onClick={() => scrollToSection('servicios')}>
                        Servicios
                    </a>
                    <a className='m-2 main-nav-link' onClick={() => scrollToSection('contacto')}>
                        Contacto
                    </a>
                </div>
            </div>
        </div>
    );
}


