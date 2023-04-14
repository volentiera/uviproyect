
import './index.css'
import logo2 from '../../assets/logo2.png'


export default function Footer() {
    return (
        <div className='container-fluid text-center p-5 footer-config d-flex align-items-center'>
            <div className="row">
                <div className="d-md-none col-sm-3"></div>
                <div className="col-sm-6 col-md-6 col-lg-3 ">
                    <img className='d-flex align-items-center justify-content-center logo-size' src={logo2} alt="logo2" />
                </div>
                <div className="d-md-none col-sm-3"></div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, neque quam eius, perferendis esse, doloribus cumque vel magni eum at modi odio voluptas laudantium necessitatibus reiciendis qui in quisquam vitae.
                    </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, neque quam eius, perferendis esse, doloribus cumque vel magni eum at modi odio voluptas laudantium necessitatibus reiciendis qui in quisquam vitae.
                    </p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, neque quam eius, perferendis esse, doloribus cumque vel magni eum at modi odio voluptas laudantium necessitatibus reiciendis qui in quisquam vitae.
                    </p>
                </div>
            </div>
        </div>
    )
}