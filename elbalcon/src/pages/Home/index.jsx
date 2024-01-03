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
                            <div className='option-container'>
                                <NavLink to='/costs' className='home-link'>
                                Registrar Gastos
                                </NavLink>
                            </div>

                        </li>

                        <li>
                            <div className='option-container'>
                                <NavLink to='/sales' className='home-link'>
                                Registrar Ventas
                                </NavLink>
                            </div>

                        </li>
                    </ul>
            </div>
    
        </Layout>
    </motion.div>
  );
}

export default Home;
