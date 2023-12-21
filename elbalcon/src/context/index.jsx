import { createContext, useState } from "react";


export const MenuContext = createContext();


export const MenuProvider = ({children}) =>{
    const [items, setItems] = useState(null);
    const [count, setCount] = useState(0);

    console.log('COUNT', count)

    return(
        <MenuContext.Provider value={{
            count,
            items,
            setItems,
            setCount
        }}>
            {children}
        </MenuContext.Provider>

    )
}