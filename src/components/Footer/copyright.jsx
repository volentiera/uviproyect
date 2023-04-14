import './index.css'


export default function Copiright(){
    return(
        <div className="container-fluid text-center copy-config d-flex align-items-center">
            <div className="col-md-3">
                <p>Todos los derechos reservados: ©2023 Uvi</p>
            </div>
            <div className="remove-div col-md-6"></div>
            <div className="col-md-3 brands-size d-flex">
                <a className='m-3' href="">
                    <i className="fa-brands fa-facebook"></i>
                </a>
                <a className='m-3' href="">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a className='m-3' href="">
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>
    )
}