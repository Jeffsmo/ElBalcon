import './Sales.css';
import Layout from '../../components/Layout/index';
import { useContext, useEffect, useState } from 'react';
import SaleTab  from '../../components/Tabs/saleTable/index';
import { ModalCreateSale } from '../../components/modal/Create/index';
import { ModalDeleteSale} from '../../components/modal/Delete/index'
import { Modal } from '../../components/modal';
import { RecordSaleContext, SalesContext} from '../../context';
import { motion } from 'framer-motion';

function Sales() {
    const context = useContext(SalesContext);

    
    let useRecordContext= useContext(RecordSaleContext);
    
    //Identificadores de Registro.....

    let recordIdentifiers = useRecordContext.selectedRecord.map(record => record.id);


   const pricesSum = () => {
        // Utiliza reduce en lugar de map para sumar los valores
        const sum = context.saleCounter.filter(sale=>recordIdentifiers.includes(sale.recordSaleId)).reduce((acc, item) => acc + item.menu?.price, 0);
       
        return sum; // Retorna el valor sumado
      };


    const selectedSales = () => {
        return context.saleCounter
            .filter(sale => sale.selectedSale)
            .map(sale => ({ key: sale.id, data: sale }));
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
                    const response = await fetch(`http://localhost:3000/api/v1/record-sales/${id}`, {
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
                alert('Totales actualizados')
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
                className='title'>Ventas</h1>
                <div className='sale-options'>
                    <div className='sale-options-1' onClick={() => {
                        context.openModal();
                        context.openCreateModal();
                       
                        } }>Registrar Nueva Venta</div>
                    <div className='sale-options-2'
                        onClick={()=>{
                            context.openModal();
                            context.openDeleteModal();
                        }}
                    >Eliminar Venta</div>
                </div>


                <div className='sale-container'>
                    <div className='tab-columns-sale'>
                    <ul className='num-tab-cel'>
                            <li>
                                #
                            </li>
                        </ul>
                        <ul className='main-tab-cel-sale'>
                            <li>
                                Producto
                            </li>
                        </ul>
                        <ul className='main-tab-cel-sale'>
                            <li>
                                Mesa
                            </li>
                        </ul>
                        <ul className=' description-title-sale'>
                            <li>
                                Descripción
                            </li>
                        </ul>
                        <ul  className='main-tab-cel-sale'>
                            <li>
                                Precio
                            </li>
                        </ul>
                        <ul  className='main-tab-cel-sale'>
                            <li>
                                Día
                            </li>
                        </ul>
                        <ul  className='main-tab-cel-sale'>
                            <li>
                                Més
                            </li>
                        </ul>
                        <ul  className='main-tab-cel-sale'>
                            <li>
                                Año
                            </li>
                        </ul>
                        <ul  className='img-tab-cel-sale'>
                            <li>
                                Imagen
                            </li>
                        </ul>
                    </div>
                    <div className='tabs-content-sale'>
                    {
                            context.saleCounter?.filter(sale=> recordIdentifiers.includes(sale.recordSaleId)).map(sale => (
                                <SaleTab key={sale.id} data={sale}/>
                            ))
                        }
                    </div>

                        
                </div>
                <div className='total-sale-container'>
                        <div className='total-sale'>
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
                        <ModalDeleteSale key={selectedSales().map(({key})=>key)} data={selectedSales().map(({ data }) => data)} />
                    )}
                    {context.isModalCreateOpen && <ModalCreateSale/>} 
                </Modal>

            </Layout>
        </motion.div>
    )
  }
  
  export default Sales
  