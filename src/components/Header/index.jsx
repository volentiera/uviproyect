import './index.css'

import logo from '../../assets/logo2.png'

export default function Header() {
    return (
        <div id='sobre-nosotros' className='container-fluid text-center background-header d-flex justify-content-center align-items-center'>
            <div className='row'>
                <div className="d-flex col-md-12 col-lg-6 text  p-5 ">
                    <div className='m-5'>
                        <h1>Hola! Somos Uvi</h1>
                        <p>¡Bienvenidos a nuestra empresa de asesoramiento profesional! Nos dedicamos a brindar servicios de alta calidad para ayudar a nuestros clientes en distintas áreas de sus vidas.</p>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center col-md-12 col-lg-6 text p-5 ">
                    <img className='logo-size' src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}