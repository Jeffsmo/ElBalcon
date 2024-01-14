import ReactDOM from "react-dom";
import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css"
import { useContext } from 'react'
import { CostsContext, CostsHistorialContext, SalesContext } from '../../context'

function Modal({children}){
    
    const costContext = useContext(CostsContext);
    const saleContext = useContext(SalesContext);
    const recordCostContext = useContext(CostsHistorialContext)

    const isOpen = costContext.isModalOpen || saleContext.isModalOpen || recordCostContext.isModalOpen;
    
    return ReactDOM.createPortal(
        <div className={`${isOpen ? 'modal-container' : 'hidden'}`}>
            <div className='modal-container'>
                <div className='modal-card'>
                        <div className='modal-options'>
                        {isOpen ? <h2>{costContext.isModalOpen ? 'Gastos' : (saleContext.isModalOpen ? 'Ventas' : (recordCostContext.isModalOpen ? 'Registro de Gastos' : null))}</h2> : null}
                            <XMarkIcon className='close-icon' onClick={()=>{
                                costContext.closeModal();
                                costContext.closeCreateModal();
                                costContext.closeDeleteModal();
                                saleContext.closeModal();
                                saleContext.closeCreateModal();
                                saleContext.closeDeleteModal();
                                recordCostContext.closeModal();
                                recordCostContext.closeCreateModal();
                                }}/>
                        </div>
                        {children}
                </div> 
            </div>
        </div>, document.getElementById('modal'))
}

export {Modal}
