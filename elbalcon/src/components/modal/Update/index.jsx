//import ReactDOM from "react-dom";
import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css"
import { useContext } from 'react'
import { CostsContext } from '../../context'

function ModalUpdateCost({children}){
    
    const context = useContext(CostsContext)
    
    return (
        <div className={`${context.isModalDeleteOpen ? 'modal-container' : 'hidden'}`}>
            <div >
            <div >
                    <div>
                        <h2>Gastos</h2>
                        <XMarkIcon className='close-icon' onClick={context.closeDeleteModal}/>
                    </div>
                    {children}
            </div>
                
            </div>
        </div>
)
}

export {ModalUpdateCost}
