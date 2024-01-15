import React, { useContext, useState } from "react";
import { SalesHistorialContext } from '../../../../context';
import './costTab.css';

function HistorialSaleTab(data) {




    const context = useContext(SalesHistorialContext);
    const [isSelected, setSelected] = useState(false);

    const handleToggleSelect = () => {
        if (isSelected) {
            context.undoSelectSale(data.data.listnum);
        } else {
            context.selectSale(data.data.listnum);
        }
        setSelected(!isSelected);
    };

    return (
        <div className={`tab-historial-container${data.data.selectedHistorialSale ? ' tab-historial-selected-h' : ''}` } onClick={handleToggleSelect}>
            <div className={`cost-tab-h${data.data.selectedHistorialSale ? '' : ''}`} onClick={handleToggleSelect}>
                <figure className="tab-cont">
                <span className="small-id">id:{data.data.id}</span>
                    <div className={`cel-num-h cost-font-h ${data.data.selectedHistorialSale ? ' cel-num-selected-h ' : ''}`}>
                        {data.data?.listnum}
                    </div>

                    
                            <ul className="list-record-cont">
                            <div className="recorded-costs-container" >
                                {data.data.RecordedSales?.map((record, index) => (
                                    <li className=" cost-cel-list" style={{
                                        justifyContent: 'space-between',
                                    }}key={index}>
                                            <span style={{
                                                textAlign: 'right',
                                            }}
                                             className="record-value">${record.menu?.price}</span>
                                            <span style={{
                                                textAlign : 'left',
                                            }} className="record-name">{record.menu?.name}</span>

                                      
                                    </li>
                                ))}
                            </div>
                            </ul>



                    <ul className="cost-name-h cost-cel-h">
                        <li>
                            <span className="cost-font">{data.data.week}</span>
                        </li>
                    </ul>

                    <ul className="cost-name-h cost-cel-h">
                        <li>
                           <span className={`cost-font ${data.data.totalPrice == null ? 'error' : ''}`}>
                                {data.data.totalPrice != null ? `TOTAL : $${data.data.totalPrice}` : 'Hace falta calcular los totales'}
                            </span>
                        </li>
                    </ul>
                </figure>
            </div>
        </div>
    );
}


export default HistorialSaleTab;