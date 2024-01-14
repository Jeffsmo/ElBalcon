import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../../components/Layout/index';
import { motion } from 'framer-motion'
import './Balance.css'

function BalanceSalesHistory() {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    >
        <Layout>
            <h1 className='historial-title'>Historial</h1>
            <div className='historial-container'>
                
                <div className='historial-tab-container'>
                    <ul className='historial-options'>

                            <li>
                                
                                    <NavLink to='/balance/sales' className='home-link'>
                                    <div className='option-container'>
                                        Registrar Ventas
                                    </div>
                                    </NavLink>
                                

                            </li>
                        </ul>
                    
                </div>

            </div>
    
        </Layout>
    </motion.div>
  );
}

export default BalanceSalesHistory;
