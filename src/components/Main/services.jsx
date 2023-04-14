

import circle1 from '../../assets/circle1.png'
import circle2 from '../../assets/circle2.png'
import circle3 from '../../assets/circle3.png'
import circle4 from '../../assets/circle4.png'



export default function Services() {
    return (
        <div id="servicios" className="services-container d-flex align-items-center justify-items-center">
            <div className="row">
                <div className="separator col-sm-6 col-md-6 col-lg-3">
                    <div>
                        <img className='d-flex justify-items-center align-items-start circle-size' src={circle1} alt="" />
                    </div>
                    <p>
                        Asesoramiento en finanzas personales: Nuestro equipo de expertos en finanzas personales está listo para ayudarte en la administración de tus recursos financieros. Te brindamos asesoramiento personalizado para elaborar un presupuesto, planificar inversiones, manejar tus ahorros y deudas, y planificar tu jubilación, entre otros aspectos importantes de tus finanzas personales.
                    </p>
                </div>
                <div className="separator-2 col-sm-6 col-md-6 col-lg-3 ">
                    <div>
                        <img className='d-flex justify-items-center align-items-start circle-size' src={circle2} alt="" />
                    </div>
                    <p>
                        Asesoramiento en desarrollo de carreras: ¿Quieres avanzar en tu carrera profesional? Nuestros asesores te brindarán orientación y apoyo en el desarrollo de tu carrera. Te ayudamos a identificar tus fortalezas, habilidades y metas profesionales, y te ofrecemos estrategias de búsqueda de empleo, elaboración de currículums y cartas de presentación, preparación para entrevistas laborales, y desarrollo de habilidades de liderazgo y gestión.
                    </p>
                </div>
                <div className="separator col-sm-6 col-md-6 col-lg-3 ">
                    <div>
                        <img className='d-flex justify-items-center align-items-start circle-size' src={circle3} alt="" />
                    </div>
                    <p>
                        Asesoramiento en desarrollo empresarial: Si eres emprendedor o dueño de un negocio, nuestro equipo de asesores empresariales te ofrece un servicio integral de asesoramiento en desarrollo empresarial. Te ayudamos en la elaboración de planes de negocios, identificación de oportunidades de mercado, análisis de la competencia, gestión de recursos humanos, y asesoría en estrategias de marketing y ventas, para que puedas hacer crecer tu negocio de manera exitosa.
                    </p>
                </div>
                <div className="padding-serv col-sm-6 col-md-6 col-lg-3 ">
                    <div>
                        <img className='d-flex justify-items-center align-items-start circle-size' src={circle4} alt="" />
                    </div>
                    <p>
                        Asesoramiento en desarrollo personal y habilidades de comunicación: Nos preocupamos por tu desarrollo personal y tus habilidades de comunicación. Te brindamos herramientas para mejorar tu autoconocimiento, autoestima, habilidades sociales y habilidades de comunicación verbal y no verbal. Además, te ofrecemos apoyo para superar barreras personales, desarrollar habilidades de liderazgo y negociación, y gestionar conflictos y relaciones interpersonales de manera efectiva.
                    </p>
                </div>
            </div>
        </div>
    )
}