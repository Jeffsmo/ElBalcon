import './Sales.css';
import Layout from '../../components/Layout/index';
import { useContext } from 'react';
import SaleTab  from '../../components/Tabs/saleTable/index';
import { ModalCreateSale } from '../../components/modal/Create/index';
import { ModalDeleteSale} from '../../components/modal/Delete/index'
import { Modal } from '../../components/modal';
import { SalesContext} from '../../context';
import { motion } from 'framer-motion';

function Sales() {
    const context = useContext(SalesContext)
    const selectedCosts = () => {
        return context.saleCounter
            .filter(sale => sale.selectedSale)
            .map(sale => ({ key: sale.id, data: sale }));
    }

    const pricesSum = () => {
        // Utiliza reduce en lugar de map para sumar los valores
        const sum = context.saleCounter.reduce((acc, item) => acc + item.menu.price, 0);
        console.log(sum);
        return sum; // Retorna el valor sumado
      };

      const totalSum = pricesSum();
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
                    <div className='sale-options-3'>Modificar Venta</div>
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
                            context.saleCounter?.map(sale => (
                                <SaleTab key={sale.id} data={sale}/>
                            ))
                        }
                    </div>

                        
                </div>
                <div className='total-sale-container'>
                        <div className='total-sale'>
                            TOTAL: {totalSum}
                        </div>
                    </div>

                <Modal> 
                    {context.isModalDeleteOpen && (
                        <ModalDeleteSale key={selectedCosts().map(({key})=>key)} data={selectedCosts().map(({ data }) => data)} />
                    )}
                    {context.isModalCreateOpen && <ModalCreateSale/>} 
                </Modal>

            </Layout>
        </motion.div>
    )
  }
  
  export default Sales
  