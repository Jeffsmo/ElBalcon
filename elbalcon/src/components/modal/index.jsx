import ReactDOM from "react-dom";
import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css"
import { useContext } from 'react'
import { CostsContext } from '../../context'

function Modal({children}){
    
    const context = useContext(CostsContext)
    
    return ReactDOM.createPortal(
        <div className={`${context.isModalOpen ? 'modal-container' : 'hidden'}`}>
            <div className='modal-container'>
                <div className='modal-card'>
                        <div className='modal-options'>
                            <h2>Gastos</h2>
                            <XMarkIcon className='close-icon' onClick={()=>{
                                context.closeModal();
                                context.closeCreateModal();
                                context.closeDeleteModal();
                                }}/>
                        </div>
                        {children}
                </div> 
            </div>
        </div>, document.getElementById('modal'))
}

export {Modal}
