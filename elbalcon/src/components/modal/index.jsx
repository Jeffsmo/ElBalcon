import ReactDOM from "react-dom";
import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css"
import { useContext } from 'react'
import { CostsContext, SalesContext } from '../../context'

function Modal({children}){
    
    const costContext = useContext(CostsContext);
    const saleContext = useContext(SalesContext);

    const isOpen = costContext.isModalOpen || saleContext.isModalOpen
    
    return ReactDOM.createPortal(
        <div className={`${isOpen ? 'modal-container' : 'hidden'}`}>
            <div className='modal-container'>
                <div className='modal-card'>
                        <div className='modal-options'>
                        {isOpen ? <h2>{costContext.isModalOpen ? 'Gastos' : 'Ventas'}</h2> : null}
                            <XMarkIcon className='close-icon' onClick={()=>{
                                costContext.closeModal();
                                costContext.closeCreateModal();
                                costContext.closeDeleteModal();
                                saleContext.closeModal();
                                saleContext.closeCreateModal();
                                saleContext.closeDeleteModal();
                                }}/>
                        </div>
                        {children}
                </div> 
            </div>
        </div>, document.getElementById('modal'))
}

export {Modal}
