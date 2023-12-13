import { ReactDOM } from "react";
import "./styles.css"

function Modal({children}){
    return ReactDOM.createPortal(

        <div className="Modal-container">
            {children}
        </div>
    )
}

export {Modal}