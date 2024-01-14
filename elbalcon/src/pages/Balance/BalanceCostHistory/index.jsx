import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../../components/Layout/index';
import { motion } from 'framer-motion'
import './Balance.css'
import HistorialCostTab from '../../../components/Tabs/historialCostTable';
import {  CostsHistorialContext } from '../../../context';
import {RecordCostContext } from '../../../context';
import { Modal } from '../../../components/modal';
import { ModalCreateRecordCosts } from '../../../components/modal/Create';
import { ModalDeleteRecordCost } from '../../../components/modal/Delete';

function BalanceCostHistory() {
    
    const context = useContext(CostsHistorialContext);
    let useRecordContext= useContext(RecordCostContext);
    
    useRecordContext.selectedRecord = context.costCounter?.filter(cost => cost.selectedHistorialCost);
   
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


                <div >

                    
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
