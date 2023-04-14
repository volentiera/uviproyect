import Card from "./card";
import './index.css'
import Services from "./services";
import Testimonials from "./testimonials";


export default function Mainsection() {
    const testimonials = [{ name: 'Miyah Myles', position: 'Marketing', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.' }, { name: 'June Cha', position: 'Softwere Engr', photo: 'https://randomuser.me/api/portraits/women/44.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.' }, { name: 'Iida Niskanen', position: 'Data Entry', photo: 'https://randomuser.me/api/portraits/women/68.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.' }, { name: 'Jhonathan Nunfiez', position: 'Graphic Designer', photo: 'https://randomuser.me/api/portraits/women/43.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.' }, { name: 'Sasha Ho', position: 'Accountant', photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.' }, { name: 'Veeti Seppanen', position: 'Director', photo: 'https://randomuser.me/api/portraits/men/97.jpg', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repellendus inventore hic quo ipsum nihil.Incidunt qui ipsum quisquam sequi maxime architecto similique reiciendis quidem facilis corporis libero nam nemo ratione id necessitatibus ab debitis nulla harum.Optio corrupti dolorum debitis incidunt est architecto voluptas aut nobis amet corporis accusamus.' }]

    const planes = [
        {
            name: 'Plan Básico',
            price: 2500,
            desc: 'Este plan ofrece asesoramiento básico en áreas específicas, brindando soluciones y orientación en un área de especialización particular.',
            array: ['Asesoramiento uno a uno.', 'Análisis de situación actual.', 'Recomendaciones.', 'Seguimiento limitado.']
        },
        {
            name: 'Plan Premium',
            price: 4500,
            desc: 'Este plan ofrece asesoramiento completo y personalizado en múltiples áreas, abordando una amplia gama de necesidades y brindando un enfoque integral para el crecimiento y la mejora.',
            array: ['Asesoramiento uno a uno.', 'Análisis profundo de situación.', 'Plan de acción detallado.', 'Seguimiento ilimitado.', 'Soporte por correo electrónico.', 'Recursos exclusivos.']
        },
        {
            name: 'Plan Empresarial',
            price: 6500,
            desc: 'Este plan está diseñado para empresas y organizaciones que buscan un asesoramiento estratégico a nivel empresarial para optimizar su rendimiento y lograr sus objetivos de negocio.',
            array: ['Análisis exhaustivo de la empresa.', 'Desarrollo de estrategias personalizadas.', 'Asesoramiento en áreas clave.', 'Seguimiento y soporte continuo.', 'Informes y análisis periódicos.']
        }];

    return (
        <div className='container'>
            <Services/>
            <div className='row padding'>
                {planes.map((plan, index) => {
                    return <Card plan={plan} key={index} />
                })}
            </div>
            <div className="padding">
                <Testimonials testimonials={testimonials} />
            </div>
        </div>
    )
}