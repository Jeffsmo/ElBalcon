import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../../components/Layout/index';
import { motion } from 'framer-motion'
import './Balance.css'
import HistorialCostTab from '../../../components/Tabs/historial/HistorialCostTab';
import {  CostsHistorialContext } from '../../../context';
import {RecordCostContext } from '../../../context';
import { Modal } from '../../../components/modal';
import { ModalCreateRecordCosts } from '../../../components/modal/Create';
import { ModalDeleteRecordCost } from '../../../components/modal/Delete';

function BalanceCostHistory() {
    
    const context = useContext(CostsHistorialContext);
    const useRecordContext = useContext(RecordCostContext);
    
    const [requestResult, setRequestResult] = useState(null);
    
    useRecordContext.selectedRecord = context.costCounter?.filter(cost => cost.selectedHistorialCost);

    //ACTUALIZACIÓN AUTOMÁTICA DE COSTOS
    
    useEffect(() => {
        const updateRecordCosts = async (recordId, totalPrice) => {
            try{
                const response = await fetch(`http://localhost:3000/api/v1/record-costs/${recordId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        totalPrice:totalPrice,
                    }),
                });
                if(response.ok){
                    const result = await response.json();
                    setRequestResult(result);
                    window.location.reload();
                } else{
                    console.error('Error al realizar la petición', response.statusText);
                }
            } catch(error){
                console.error('Error al realizar la petición:', error);
            }
        };

        const updateRecordedCosts = async () =>{
            for (const record of context.costCounter){
                const result = record.RecordedCosts.reduce((acc, cost) => {
                    const price = cost?.value || 0;
                    const id = record.id;
                    acc.sum += price;
                    acc.ids.push(id);
                    return acc;
                }, {sum: 0, ids:[]});

                if(record.totalPrice !== result.sum){
                    await updateRecordCosts(result.ids[0], result.sum)
                }
            }
        };
        updateRecordedCosts();
    }, [requestResult, context.costCounter])
   
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    >
        <Layout>
            <div className='historial-tab-container-opt'>
            <h1 className='historial-title-costs'>Registro de Gastos</h1>

            </div>
            
            <div className='historial-container-costs'>

                <div className='tabs-historial-content'>
                    <div className='tab-content-h'>
                        <div className='tabs-record-cost'>
                            {       context.costCounter?.map(cost => (
                                    <HistorialCostTab key={cost.id} data={cost} />
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
                                        pathname: '/balance/costs',
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
                        <ModalDeleteRecordCost key={context.costCounter?.map(({key})=>key)} data={context.costCounter?.filter(cost => cost.selectedHistorialCost)} />
                    )}
                    {context.isModalCreateOpen && <ModalCreateRecordCosts/>} 
                </Modal>
    
        </Layout>
    </motion.div>
  );
}

export default BalanceCostHistory;
