import { useContext, useState } from "react";
import {SalesContext } from '../../../context';

import './saleTab.css'


useContext


function SaleTab(data){
    
   const context = useContext(SalesContext)
   const [isSelected, setSelected] = useState(false);
   
   const handleToggleSelect = () =>{
    if (isSelected){
        context.undoSelectSale(data.data.listnum);
    }else{
        context.selectSale(data.data.listnum);
    }
    setSelected(!isSelected)
   }


    return(
        <div className="tab-container">
            <div 
            className={`${data.data.selectedSale ? ' sale-tab-selected sale-tab': 'sale-tab'}`}
            onClick={handleToggleSelect}
            >
            <ul className= {`${data.data.selectedSale ? 'sale-name  cel-num-sale sale-font sale-counter cel-num-selected-sale': 'sale-name cel-num sale-font sale-counter cel-num-sale'}`}>
                    <li>
                         {data.data?.listnum}
  
                    </li>
            </ul>
                <ul className="sale-name  sale-cel">
                    <li>
                        <span className="sale-font  ">
                         {data.data?.menu.name}
                        </span>
                    </li>
                </ul>
                <ul className="sale-name  sale-cel">
                    <li>
                        <span className="sale-font  ">
                         {data.data.boardId}
                        </span>
                    </li>
                </ul>
                <ul className="sale-name   decription-cel-sale">
                    <li>
                        <span className="sale-font  sale-description">
                         {data.data.sale ?? "No hay descripción"}
                        </span>
                    </li>
                </ul>

                <ul className="sale-font sale-value sale-cel">
                    <li>
                        <span>
                         {data.data.menu.price}
                        </span>
                    </li>
                </ul>
                <ul className="sale-cel">
                    <li>
                        <span className="sale-font ">
                         {data.data.day}
                        </span>
                    </li>
                </ul>

                <ul className="sale-cel">
                    <li>
                        <span className="sale-font ">
                         {data.data.month} 
                        </span>
                    </li>
                </ul>

                <ul className="sale-cel">
                    <li>
                        <span className="sale-font ">
                         {data.data.year}
                        </span>
                    </li>
                </ul>


                <ul className="img-cel">
                    <li>
                        <img className='image-sale' src={`http://localhost:3000/api/v1/image/public/${data.data.menu.images?.fileName}`} alt={data.data.menu.images?.name} />
                    </li>
                </ul>


            </div>
        </div>

        

    )
}

export default SaleTab;