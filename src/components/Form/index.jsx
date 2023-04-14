import { useForm } from 'react-hook-form';

import './index.css'

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div  className='container-fluid form-background mt-5'>
            <h2 id='contacto'  className='p-5 text-center'>Contactate con Nosotros:</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row ">
                    <div className="col-6">
                        <div className='p-3'>
                            <label className="form-label" htmlFor="name">Nombre:</label>
                            <input className="form-control" id="name" name="name" type="text" placeholder="Nombre" {...register("Nombre", { required: true, maxLength: 80 })} />
                        </div>

                        <div className='p-3'>
                            <label className="form-label" htmlFor="apellido">Apellido:</label>
                            <input className="form-control" id="apellido" name="apellido" type="text" placeholder="Apellido" {...register("Apellido", { required: true, maxLength: 100 })} />
                        </div>

                        <div className='p-3'>
                            <label className="form-label" htmlFor="email">Email:</label>
                            <input className="form-control" id="email" name="email" type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                        </div>

                    </div>
                    <div className="col-6">
                        <div className='p-3'>
                            <label className="form-label" htmlFor="tel">Telefono:</label>
                            <input className="form-control" id="tel" name="tel" type="tel" placeholder="Numero de Telefono" {...register("Numero", { required: true, minLength: 6, maxLength: 12 })} />
                        </div>

                        <div className='p-3'>
                            <label className="form-label" htmlFor="plan">Tipo de Plan:</label>
                            <select className="form-control" id="plan" name='plan' {...register("Plan", { required: true })}>
                                <option value="Plan1">Plan1</option>
                                <option value="Plan2">Plan2</option>
                                <option value="Plan3">Plan3</option>
                            </select>
                        </div>

                        <div className='p-3'>
                            <label className="form-label" htmlFor="fileUpload">Documento:</label>
                            <input className="form-control" type="file" id="fileUpload" name="fileUpload" accept='.pdf' onChange={(e) => register("Documento", { required: true, value: e.target.files[0] })} />
                        </div>

                    </div>
                    <div className='p-5 d-flex justify-content-center'>
                            <input className="btn btn-lg btn-config" type="submit" />
                        </div>
                </div>
            </form>

        </div>
    );
}