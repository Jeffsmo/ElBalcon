//import ReactDOM from "react-dom";
//import { XMarkIcon } from '@heroicons/react/24/solid';
import "./styles.css";
import { useContext } from 'react';
import { CostsContext } from '../../../context';
import {useForm} from 'react-hook-form';


function ModalCreateCost() {
    const { register, handleSubmit, formState : {errors} } = useForm();
    const context = useContext(CostsContext);
    const onSubmit = handleSubmit((data) => {
        // Verificar si hay una fecha y realizar la división
        if (data.Fecha) {
            const [year, month, day] = data.Fecha.split('-');
            // Agregar las partes de la fecha al objeto data
            data.year = ~~year;
            data.month = ~~month;
            data.day = ~~day;
            delete data.Fecha
        }
        
        if(data.precio){
            data.precio = ~~ data.precio
        }

        
        context.setFormData(data);
        
        
    });

    return (
        <div className={`${context.isModalCreateOpen ? 'modal-create-container' : 'hidden'}`}>
            <div className='modal-create-card'>
                <div className='modal-create-options'>
                    <h2>Registrar nuevo gasto</h2>
                </div>
                <div>
                    <form className="create-cost-form" onSubmit={onSubmit}>
                        {/* Ingresar Datos del Producto*/}
                        <label htmlFor="product" className='register-product-name'>
                            Producto
                        </label>
                        <input
                            type="text"
                            className="cost-input"
                            {...register("product", {
                                required:{
                                    value: true,
                                    message: "Nombre requerido"
                                },
                                maxLength: {
                                    value:250,
                                    message: "Nombre debe tener máximo 250 caracteres"
                                },
                                minLength:{
                                    value:4,
                                    message: "Nombre debe tener mínimo 4 caracteres"
                                }
                            })}
                        />
                        {
                            errors.product?.message  && <span className="error">{errors.product?.message}</span>
                        }
                        

                        <label htmlFor="description" className='register-product-name'>
                            Descripción
                        </label>
                        <textarea
                            type="text"
                            className="cost-input-description"
                            {...register("description")}
                        />


                        <label htmlFor="value">
                            Precio
                        </label>
                        <input
                            type="number"
                            className="cost-input"
                            id=""
                            {...register("value", {
                                required:{
                                    value:true,
                                    message:"Precio requerido"
                                },
                                min:{
                                    value: 1000,
                                    message: "El valor mínimo para facturar es $1000 COP"
                                }

                            })}
                        />
                        {
                            errors.value?.message && <span className="error">{errors.value?.message}</span>
                        }

                        <label htmlFor="Fecha">
                            Fecha
                        </label>
                        <input
                            type="date"
                            className="cost-input"
                            {...register("Fecha", {
                                required: {
                                    value:true,
                                    message: "Fecha requerida"
                                },
                            })}
                        />

{
                            errors.Fecha?.message && <span className="error">{errors.Fecha?.message}</span>
                        }

                        <div className="save-cost-container">
                            <button className="save-cost" type="submit">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { ModalCreateCost };