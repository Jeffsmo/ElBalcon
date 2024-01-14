import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../../components/Layout/index';
import { motion } from 'framer-motion'
import './Home.css'

function Home() {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
    >
        <Layout>
            <h1 className='main'>Sistema de Facturación</h1>
            <div className='main-container'>
                

                    <ul className='main-options'>
                        <li className='costs-option'>
                            
                                <NavLink to='/balance-cost' className='home-link'>
                                    <div className='option-container'>
                                        Registrar Gastos
                                    </div>
                                </NavLink>
                            

                        </li>

                        <li>
                            
                                <NavLink to='/balance-sale' className='home-link'>
                                    <div className='option-container'>
                                        Registrar Ventas
                                    </div>
                                </NavLink>


                        </li>
                    </ul>
            </div>
    
        </Layout>
    </motion.div>
  );
}

export default Home;
