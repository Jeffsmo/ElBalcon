import './Costs.css';
import Layout from '../../components/Layout/index';
import { useContext, useEffect, useState } from 'react';
import CostTab  from '../../components/Tabs/costTable/index';
import { ModalCreateCost } from '../../components/modal/Create/index';
import { ModalDeleteCost} from '../../components/modal/Delete/index'
import { Modal } from '../../components/modal';
import { CostsContext} from '../../context';
import { motion } from 'framer-motion';
import {  RecordCostContext } from '../../context';

function Costs() {
    const context = useContext(CostsContext);

    
    let useRecordContext= useContext(RecordCostContext);
    
    //Identificadores de Registro.....

    let recordIdentifiers = useRecordContext.selectedRecord.map(record => record.id);


   const pricesSum = () => {
        // Utiliza reduce en lugar de map para sumar los valores
        const sum = context.costCounter.filter(cost=>recordIdentifiers.includes(cost.recordCostId)).reduce((acc, item) => acc + item.value, 0);
       
        return sum; // Retorna el valor sumado
      };


    const selectedCosts = () => {
        return context.costCounter
            .filter(cost => cost.selectedCost)
            .map(cost => ({ key: cost.id, data: cost }));
    }


    const totalSum = pricesSum();


    const [requestResult, setRequestResult] = useState(null);

    useEffect(() => {
        if (requestResult !== null) {
            // Aquí puedes manejar el resultado de la petición POST
            console.log('Resultado de la petición:', requestResult);
        }
    }, [requestResult]);
    
    const handleGuardarClick = async () => {
        try {
            // Recorrer los elementos de recordIdentifiers y realizar una petición PATCH para cada uno
            if (recordIdentifiers.length <= 1) {
                for (const id of recordIdentifiers) {
                    const response = await fetch(`http://localhost:3000/api/v1/record-costs/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            totalPrice: totalSum,
                        }),
                    });
    
                    // Validar si la petición fue exitosa antes de recargar la página
                    if (response.ok) {
                        const result = await response.json();
                        setRequestResult(result);
                    } else {
                        console.error('Error al realizar la petición:', response.statusText);
                    }
                }
    
                // Recargar la página después de completar todas las solicitudes PATCH
                window.location.reload();
            } else {
                alert('Para guardar solamente debe haber seleccionado un Registro');
            }
        } catch (error) {
            console.error('Error al realizar la petición:', error);
        }
    };
    



    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <Layout>
                <h1 
                className='title'>Gastos</h1>
                <div className='cost-options'>
                    <div className='cost-options-1' onClick={() => {
                        context.openModal();
                        context.openCreateModal();
                        } }>Registrar Nuevo Gasto</div>
                    <div className='cost-options-2'
                        onClick={()=>{
                            context.openModal();
                            context.openDeleteModal();
                        }}
                    >Eliminar Gasto</div>
                    
                </div>


                <div className='cost-container'>
                    <div className='tab-columns'>
                    <ul className='num-tab'>
                            <li>
                                #
                            </li>
                        </ul>
                        <ul className='main-tab-cel'>
                            <li>
                                Producto
                            </li>
                        </ul>
                        <ul className='description-title'>
                            <li>
                                Descripción
                            </li>
                        </ul>
                        <ul  className='main-tab-cel'>
                            <li>
                                Precio
                            </li>
                        </ul>
                        <ul  className='main-tab-cel'>
                            <li>
                                Día
                            </li>
                        </ul>
                        <ul  className='main-tab-cel'>
                            <li>
                                Més
                            </li>
                        </ul>
                        <ul  className='main-tab-cel'>
                            <li>
                                Año
                            </li>
                        </ul>
                    </div>
                        <div className='tabs-content'>
                            {context.costCounter?.filter(cost => recordIdentifiers.includes(cost.recordCostId)).map(cost => (
                                <CostTab key={cost.id} data={cost} />
                            ))}
                        </div>
                    </div>

                    <div className='total-cost-container'>
                        <div className='total-cost'>
                            TOTAL: $ {totalSum}
                        </div>
                        
                    </div>

                    <div>
                        <div>
                        <button className='save-cost' onClick={handleGuardarClick}>REGISTRAR TOTALES</button>
                        </div>
                    </div>

                <Modal> 
                    {context.isModalDeleteOpen && (
                        <ModalDeleteCost key={selectedCosts().map(({key})=>key)} data={selectedCosts().map(({ data }) => data)} />
                    )}
                    {context.isModalCreateOpen && <ModalCreateCost/>} 
                </Modal>

            </Layout>
        </motion.div>
    )
  }
  
  export default Costs
  