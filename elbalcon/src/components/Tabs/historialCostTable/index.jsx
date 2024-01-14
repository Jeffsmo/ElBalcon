import React, { useContext, useState } from "react";
import { CostsHistorialContext } from '../../../context';
import './costTab.css';

function HistorialCostTab(data) {
    const context = useContext(CostsHistorialContext);
    const [isSelected, setSelected] = useState(false);

    const handleToggleSelect = () => {
        if (isSelected) {
            context.undoSelectCost(data.data.listnum);
        } else {
            context.selectCost(data.data.listnum);
        }
        setSelected(!isSelected);
    };

    return (
        <div className={`tab-historial-container${data.data.selectedHistorialCost ? ' tab-historial-selected-h' : ''}` } onClick={handleToggleSelect}>
            <div className={`cost-tab-h${data.data.selectedHistorialCost ? '' : ''}`} onClick={handleToggleSelect}>
                <figure className="tab-cont">
                <span className="small-id">id:{data.data.id}</span>
                    <div className={`cel-num-h cost-font-h ${data.data.selectedHistorialCost ? ' cel-num-selected-h ' : ''}`}>
                        {data.data?.listnum}
                    </div>

                    
                            <ul className="list-record-cont">
                            <div className="recorded-costs-container" >
                                {data.data.RecordedCosts.map((record, index) => (
                                    <li className=" cost-cel-list" style={{
                                        justifyContent: 'space-between',
                                    }}key={index}>
                                            <span style={{
                                                textAlign: 'right',
                                            }}
                                             className="record-value">${record.value}</span>
                                            <span style={{
                                                textAlign : 'left',
                                            }} className="record-name">{record.product}</span>

                                      
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

export default HistorialCostTab;
