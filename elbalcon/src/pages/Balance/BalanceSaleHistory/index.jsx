import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../../components/Layout/index';
import { motion } from 'framer-motion'
import './Balance.css'
import { RecordSaleContext, SalesHistorialContext } from '../../../context';
import HistorialSaleTab  from '../../../components/Tabs/historial/HistorialSaleTab';
import { Modal } from '../../../components/modal';
import { ModalDeleteRecordSale } from '../../../components/modal/Delete';
import { ModalCreateRecordSales } from '../../../components/modal/Create';

function BalanceSalesHistory() {
    const context = useContext(SalesHistorialContext);
    const useRecordContext = useContext(RecordSaleContext);
    
    const [requestResult, setRequestResult] = useState(null);
    
    useRecordContext.selectedRecord = context.saleCounter?.filter(sale => sale.selectedHistorialSale);


    //ACTUALIZACIÓN AUTOMÁTICA DE TOTALES

    useEffect(() => {
        const updateRecordSales = async (recordId, totalPrice) => {
            try {
                const response = await fetch(`http://localhost:3000/api/v1/record-sales/${recordId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        totalPrice: totalPrice,
                    }),
                });
    
                if (response.ok) {
                    const result = await response.json();
                    setRequestResult(result);
                    window.location.reload();
                } else {
                    console.error('Error al realizar la petición:', response.statusText);
                }
            } catch (error) {
                console.error('Error al realizar la petición:', error);
            }
        };
    
        const updateRecordedSales = async () => {
            for (const record of context.saleCounter) {
                const result = record.RecordedSales.reduce((acc, sale) => {
                    const price = sale.menu?.price || 0;
                    const id = record.id;
                    acc.sum += price;
                    acc.ids.push(id);
                    return acc;
                }, { sum: 0, ids: [] });
    
                // Aquí puedes ajustar la lógica según tus necesidades
                if (record.totalPrice !== result.sum) {
                    await updateRecordSales(result.ids[0], result.sum);
                }
            }
        };
    
        updateRecordedSales();
    
    }, [requestResult, context.saleCounter]);

  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    >
        <Layout>
        <div className='historial-tab-container-opt'>
            <h1 className='historial-title-costs'>Registro de Ventas</h1>

            </div>

            <div className='historial-container-costs'>

                <div className='tabs-historial-content'>
                    <div className='tab-content-h'>
                        <div className='tabs-record-cost'>
                            {       context.saleCounter?.map(sale => (
                                    <HistorialSaleTab key={sale.id} data={sale} />
                                ))
                            }

                        </div>

                    </div>

                </div>
            </div>
            <div className='options-hist-cost'>
            <ul className='historial-options-cost'>
                            <li className='historial-cost-option'>

                                    <NavLink to={{
                                        pathname: '/balance/sales',
                                    }} className='home-link' >
                                    <div className='historial-option-container'>
                                        Editar Registro
                                    </div>
                                    </NavLink>

                            </li>

                        </ul>
            <ul className='historial-options-cost'>
                <li className='historial-cost-option' >
                    <span  className='home-link' >
                                <div className='historial-option-container'onClick={()=>{
                                    context.openModal();
                                    context.openCreateModal();
                                }}>
                                    Crear Registro
                                </div>
                            </span>
                    </li>
                </ul>
                <ul className='historial-options-cost'>
                <li className='historial-cost-option' >
                    <span  className='home-link' >
                                <div className='historial-option-container'onClick={()=>{
                                    context.openModal();
                                    context.openDeleteModal();
                                }}>
                                    Eliminar Registro
                                </div>
                            </span>
                    </li>
                </ul>
            </div>
            <Modal>
                    {context.isModalDeleteOpen && (
                        <ModalDeleteRecordSale key={context.saleCounter?.map(({key})=>key)} data={context.saleCounter?.filter(cost => cost.selectedHistorialSale)} />
                    )}
                    {context.isModalCreateOpen && <ModalCreateRecordSales/>}
            </Modal>
        </Layout>
    </motion.div>
  );
}

export default BalanceSalesHistory;
