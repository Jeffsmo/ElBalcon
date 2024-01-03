//import ReactDOM from "react-dom";
//import { XMarkIcon } from '@heroicons/react/24/solid';
import "./styles.css";
import {  useContext } from 'react';
import { CostsContext } from '../../../context';
import {useForm} from 'react-hook-form';


function ModalDeleteCost(data) {
    const { handleSubmit } = useForm();
    const context = useContext(CostsContext);

    
    const onSubmit = handleSubmit(async () => {
        try {
          const items = data.data.map(item => item);
    
          if (items.length > 0) {
            const deleteRequests = items.map(async (item) => {
              const response = await fetch(
                `http://localhost:3000/api/v1/costs/${item.id}`,
                {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(item),
                }
              );
    
              if (!response.ok) {
                throw new Error(`Failed to delete cost with ID ${item.id}`);
              }
            });
    
            // Esperar a que todas las solicitudes de eliminación se completen antes de recargar la página
            await Promise.all(deleteRequests);
    
            alert("Gastos Borrados con éxito");
            window.location.reload();
          }
        } catch (error) {
          console.error("Error deleting cost", error);
        }
      });

    return (
        <div className={`${context.isModalDeleteOpen ? 'modal-delete-container' : 'hidden'}`}>
            <div className='modal-delete-card'>
                <div className='modal-delete-options'>
                    <h2>Eliminar gastos</h2>
                </div>
                <div>
                    <form className="delete-cost-form" onSubmit={onSubmit}>
                        {/* Ingresar Datos del Producto*/}

    
                        <label htmlFor="product">
                           <span className="selection-title">
                                Gastos Seleccionados:
                            </span>
                            
                        </label>

                        <div className="selection-columns">
                            <ul className="selection-columns-item">
                                <li>
                                    Nombre
                                </li>
                            </ul> 

                            <ul className="selection-columns-item">
                                <li>
                                    #
                                </li>
                            </ul>

                            <ul className="selection-columns-date selection-columns-item">
                                <li>
                                    Fecha
                                </li>
                            </ul>

                            <ul className="selection-columns-item">
                                <li>
                                    Precio
                                    
                                </li>
                            </ul>
                        </div>
                            <div className="selection-container">
                                {data.data?.map((item) => (
                                    <span key={item.id} htmlFor={`product-${item.id}`} className="selection-items">
                                        <ul className="selection-item">
                                            <li>
                                                {item.product}
                                            </li>
                                        </ul>
                                       

                                       <ul className="selection-item">
                                            <li>
                                            {item.listnum}
                                            </li>
                                       </ul>

                                       <ul className="selection-item selection-item-date">
                                            <li>
                                                {`${item.year}-${item.month}-${item.day}`}
                                            </li>
                                       </ul>

                                       <ul className="selection-item">
                                            <li>
                                                {item.value}
                                            </li>
                                       </ul>
                                       
                                    </span>
                                ))}
                            </div>


    
                        <div className="delete-cost-container">
                            <button className="cancel-delete" onClick={()=>{
                                context.closeModal();
                                context.closeDeleteModal();
                                }}>Cancelar</button>
                            <button className="delete-cost" type="submit">Eliminar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { ModalDeleteCost };