import { useContext, useState } from "react";
import {CostsContext } from '../../../context';

import './costTab.css'


useContext


function HistorialCostTab(data){
    
   const context = useContext(CostsContext)
   const [isSelected, setSelected] = useState(false);
   
   const handleToggleSelect = () =>{
    if (isSelected){
        context.undoSelectCost(data.data.listnum);
    }else{
        context.selectCost(data.data.listnum);
    }
    setSelected(!isSelected)
   }


    return(
        <div className="tab-container">
            <div 
            className={`${data.data.selectedCost ? ' cost-tab-selected cost-tab': 'cost-tab'}`}
            onClick={handleToggleSelect}
            >
            <ul className= {`${data.data.selectedCost ? 'cost-name  cel-num cost-font cost-counter cel-num-selected': 'cost-name cel-num cost-font cost-counter cel-num'}`}>
                    <li>
                         {data.data?.listnum}
  
                    </li>
            </ul>
                <ul className="cost-name  cost-cel">
                    <li>
                        <span className="cost-font  ">
                         {data.data.product}
                        </span>
                    </li>
                </ul>
                <ul className="cost-name   decription-cel">
                    <li>
                        <span className="cost-font  cost-description">
                         {data.data.description ?? "No hay descripción"}
                        </span>
                    </li>
                </ul>

                <ul className="cost-font cost-value cost-cel">
                    <li>
                        <span>
                         {data.data.value}
                        </span>
                    </li>
                </ul>
                <ul className="cost-cel">
                    <li>
                        <span className="cost-font ">
                         {data.data.day}
                        </span>
                    </li>
                </ul>

                <ul className="cost-cel">
                    <li>
                        <span className="cost-font ">
                         {data.data.month} 
                        </span>
                    </li>
                </ul>

                <ul className="cost-cel">
                    <li>
                        <span className="cost-font ">
                         {data.data.year}
                        </span>
                    </li>
                </ul>


            </div>
        </div>

        

    )
}

export default HistorialCostTab;