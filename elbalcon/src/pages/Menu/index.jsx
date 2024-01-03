import Layout from '../../components/Layout/index';
import Card from '../../components/Card/index';
import { useContext } from 'react'; ///PERMITE ALMACENAR LA INFORMACION DE LA API LOS EFECTOS TAMBIEN SON PARA EL CONSUMO DE LA API
import './Menu.css';
//import { MenuProvider } from '../../context/menuContext';
import {  MenuContext } from '../../context';
import { motion } from 'framer-motion';


function Menu() {
    const menuContext = useContext(MenuContext)


    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            <Layout>
                <div className='items-container'>
                    <h1>Menu</h1>
                    <div className='items'>
                    {
                        menuContext.items?.map(item =>(
                            <Card key={item.id} data={item}/>
                        ))
                    }
                    </div>
                </div>


            </Layout>
        </motion.div>
    )
  }
  
  export default Menu
  