

export default function Card({ plan }) {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="col-md-12 col-lg-4 d-flex justify-content-center p-5">
            <div className="card">
                <h3 className="text-center pricing-block-content d-flex align-items-center pricing-plan">{plan.name}<br/><br/>${plan.price}/mes</h3>
                <div className="pricing-block-content d-flex align-items-center">
                    <ul className="check-list" role="list">
                        {plan.array.map((e, index) => {
                            return <li key={index} className="check-list-item"><i className="fa-solid fa-check"></i>{e}</li>
                        })}
                    </ul>
                    <a onClick={() => scrollToSection('contacto')}>
                        <button className="btn btn-lg button-config">
                            Contactate
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}