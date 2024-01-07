import './Costs.css';
import Layout from '../../components/Layout/index';
import { useContext } from 'react';
import CostTab  from '../../components/Tabs/costTable/index';
import { ModalCreateCost } from '../../components/modal/Create/index';
import { ModalDeleteCost} from '../../components/modal/Delete/index'
import { Modal } from '../../components/modal';
import { CostsContext} from '../../context';
import { motion } from 'framer-motion';

function Costs() {
    const context = useContext(CostsContext)
   
   const pricesSum = () => {
        // Utiliza reduce en lugar de map para sumar los valores
        const sum = context.costCounter.reduce((acc, item) => acc + item.value, 0);
        console.log(sum);
        return sum; // Retorna el valor sumado
      };
    const selectedCosts = () => {
        return context.costCounter
            .filter(cost => cost.selectedCost)
            .map(cost => ({ key: cost.id, data: cost }));
    }
    const totalSum = pricesSum();
    console.log(context.costCounter)
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
                    <div className='cost-options-3'>Modificar Gasto</div>
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
                    {
                            context.costCounter?.map(cost => (
                                <CostTab key={cost.id} data={cost}/>
                            ))
                        }
                    </div>
                </div>

                    <div className='total-cost-container'>
                        <div className='total-cost'>
                            TOTAL: {totalSum}
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
  