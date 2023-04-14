
import './index.css'
import logo2 from '../../assets/logo2.png'


export default function Footer() {
    return (
        <div className='container-fluid p-5 footer-config d-flex align-items-center'>
            <div className="row">
                <div className="d-md-none col-sm-3"></div>
                <div className="col-sm-6 col-md-6 col-lg-3 ">
                    <img className='d-flex align-items-center justify-content-center logo-size' src={logo2} alt="logo2" />
                </div>
                <div className="d-md-none col-sm-3"></div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3 className='pb-5 text-center'>Contacto:</h3>
                    <ul>
                        <li><p>Telefono: +54 1234567</p></li>
                        <li><p>Pais: Argentina</p></li>
                        <li><p>Ciudad: Rosario</p></li>
                        <li><p>Direccion: Av Cordoba 1234</p></li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3 className='pb-5 text-center'>Menu:</h3>
                    <ul>
                        <li><a href="#contacto"><p>Contacto</p></a></li>
                        <li><a href="#sobre-nosotros"><p>Sobre Nosotros</p></a></li>
                        <li><a href="#servicios"><p>Servicios</p></a></li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <h3 className='pb-5 text-center'>Redes:</h3>
                    <ul>
                        <li className='m-3'><a className='m-3' href=""><i className="fa-brands fa-facebook"></i></a></li>
                        <li className='m-3'><a className='m-3' href=""><i className="fa-brands fa-instagram"></i></a></li>
                        <li className='m-3'><a className='m-3' href=""><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}