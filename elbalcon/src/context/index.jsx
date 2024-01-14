import { createContext,  useEffect, useState } from "react";


const MenuContext = createContext();
const CostsHistorialContext = createContext();
const CostsContext = createContext();
const SalesContext = createContext();
const RecordCostContext = createContext();


const RecordCostProvider = ({children})=>{
    const [selectedRecord, setSelectedRecord] = useState([]);

    useEffect(() => {
        console.log("Selected Record actualizado:", selectedRecord);
    }, [selectedRecord]);

    return(
        <RecordCostContext.Provider value={{selectedRecord, setSelectedRecord}}>
            {children}
        </RecordCostContext.Provider>
    )
}




const MenuProvider = ({children}) =>{
    const [items, setItems] = useState(null);


    // Fetching Menu Table

    useEffect(()=>{

        fetch('http://localhost:3000/api/v1/menu/')
        .then(response => {
            if(!response.ok){
                throw new Error('Network was not ok')
            }
            return response.json()
        })
        .then(data => setItems(data) /*console.log(data)*/)
        .catch(error =>{
            console.error('Error fetching menu', error)
        })
    }, [])

    return(
        <MenuContext.Provider value={{
            items,
            setItems,
        }}>
            {children}
        </MenuContext.Provider>

    )
}

const SalesProvider = ({children})=>{
   

    // Modal * Show Modal

    // General Modal 
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal= () =>setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    //Create Sale Modal

    const [isModalCreateOpen, setModalCreateOpen] = useState(false);
    const openCreateModal= () =>setModalCreateOpen(true);
    const closeCreateModal = () => setModalCreateOpen(false);

    //Delete Sale Modal

    const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);
    const openDeleteModal = () => setModalDeleteOpen(true);
    const closeDeleteModal = () => setModalDeleteOpen(false);

    //Fetching * Sale
    const [sales, setSales] = useState()


   // IsSaleSelected? * State

   const [selectedSales, setSelectedSales] = useState([]);

   const selectSale = (listnum) => {
       setSelectedSales(prevSelected => [...prevSelected, listnum]);
   };
   
   const undoSelectSale = (listnum) => {
       setSelectedSales(prevSelected => prevSelected.filter(item => item !== listnum));
   };
    //Cost Cunter * State

    const [saleCounter, setSaleCounter ] = useState([]);
    useEffect(() => {
        if (sales) {
            const numCost = sales.map((sale, index) => {
                const listnum = index + 1;
                return {
                    ...sale,
                    listnum: listnum,
                    selectedSale: selectedSales.includes(listnum)
                };
            });
            setSaleCounter(numCost);
        }
    }, [sales, selectedSales]);


    //Fetching Sale Table

    useEffect(()=>{
        fetch('http://localhost:3000/api/v1/sales')
        .then(response => {
            if(!response.ok){
                throw new Error('Network was not ok')
            }
            return response.json()
        })
        .then(data => setSales(data) /*console.log(data)*/)
        .catch(error =>{
            console.error('Error fetching costs', error)
        })
    }, [])

    //Posting Data * Sale
    const [formData, setFormData] = useState(null);

    useEffect(()=>{
        if(formData){
            fetch('http://localhost:3000/api/v1/sales',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(formData),
            })
            .then((response)=>{
                if (!response.ok){
                    throw new Error('Network was not ok');
                }
                alert('Gasto Registrado con exito');
                window.location.href ='/balance-sale';
                window.location.reload();
            })
            .catch((error)=>{
                console.error('Error posting costs', error);
            });
        }
    }, [formData])


    //Deleting Data * Cost
    




    return(
        <SalesContext.Provider value={{
            sales,
            setSales,
            isModalOpen,
            openModal,
            closeModal,
            isModalCreateOpen,
            openCreateModal,
            closeCreateModal,
            formData,
            setFormData,
            saleCounter,
            setSaleCounter,
            selectSale,
            undoSelectSale,
            isModalDeleteOpen,
            openDeleteModal,
            closeDeleteModal,

        }}>
            {children}
        </SalesContext.Provider>
    )
}



const CostsProvider = ({children})=>{
   

    // Modal * Show Modal

    // General Modal 
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal= () =>setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    //Create Cost Modal

    const [isModalCreateOpen, setModalCreateOpen] = useState(false);
    const openCreateModal= () =>setModalCreateOpen(true);
    const closeCreateModal = () => setModalCreateOpen(false);

    //Delete Cost Modal

    const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);
    const openDeleteModal = () => setModalDeleteOpen(true);
    const closeDeleteModal = () => setModalDeleteOpen(false);

    //Fetching * Cost
    const [costs, setCosts] = useState()


   // IsCostSelected? * State

   const [selectedCosts, setSelectedCosts] = useState([]);

   const selectCost = (listnum) => {
       setSelectedCosts(prevSelected => [...prevSelected, listnum]);
   };
   
   const undoSelectCost = (listnum) => {
       setSelectedCosts(prevSelected => prevSelected.filter(item => item !== listnum));
   };
    //Cost Cunter * State

    const [costCounter, setCostCounter ] = useState([]);
    useEffect(() => {
        if (costs) {
            const numCost = costs.map((cost, index) => {
                const listnum = index + 1;
                return {
                    ...cost,
                    listnum: listnum,
                    selectedCost: selectedCosts.includes(listnum)
                };
            });
            setCostCounter(numCost);
        }
    }, [costs, selectedCosts]);


    //Fetching Cost Table

    useEffect(()=>{
        fetch('http://localhost:3000/api/v1/costs')
        .then(response => {
            if(!response.ok){
                throw new Error('Network was not ok')
            }
            return response.json()
        })
        .then(data => setCosts(data) /*console.log(data)*/)
        .catch(error =>{
            console.error('Error fetching costs', error)
        })
    }, [])

    //Posting Data * Cost
    const [formData, setFormData] = useState(null);

    useEffect(()=>{
        if(formData){
            fetch('http://localhost:3000/api/v1/costs',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(formData),
            })
            .then((response)=>{
                if (!response.ok){
                    throw new Error('Network was not ok');
                }
                alert('Gasto Registrado con exito');
                window.location.reload();
                window.location.href= '/balance-cost';
            })
            .catch((error)=>{
                console.error('Error posting costs', error);
            });
        }
    }, [formData])


    //Deleting Data * Cost
    




    return(
        <CostsContext.Provider value={{
            costs,
            setCosts,
            isModalOpen,
            openModal,
            closeModal,
            isModalCreateOpen,
            openCreateModal,
            closeCreateModal,
            formData,
            setFormData,
            costCounter,
            setCostCounter,
            selectCost,
            undoSelectCost,
            isModalDeleteOpen,
            openDeleteModal,
            closeDeleteModal,

        }}>
            {children}
        </CostsContext.Provider>
    )
}




const CostsHistorialProvider = ({children})=>{
   

    // Modal * Show Modal

    // General Modal 
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal= () =>setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    //Create Cost Modal

    const [isModalCreateOpen, setModalCreateOpen] = useState(false);
    const openCreateModal= () =>setModalCreateOpen(true);
    const closeCreateModal = () => setModalCreateOpen(false);

    //Delete Cost Modal

    const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);
    const openDeleteModal = () => setModalDeleteOpen(true);
    const closeDeleteModal = () => setModalDeleteOpen(false);

    //Fetching * Cost
    const [costsHistorial, setCostsHistorial] = useState()


   // IsCostSelected? * State

   const [selectedHistorialCosts, setSelectedHistorialCosts] = useState([]);

   const selectCost = (listnum) => {
       setSelectedHistorialCosts(prevSelected => [...prevSelected, listnum]);
   };
   
   const undoSelectCost = (listnum) => {
       setSelectedHistorialCosts(prevSelected => prevSelected.filter(item => item !== listnum));
   };
    //Cost Cunter * State

    const [costCounter, setCostCounter ] = useState([]);
    useEffect(() => {
        if (costsHistorial) {
            const numCost = costsHistorial.map((cost, index) => {
                const listnum = index + 1;
                return {
                    ...cost,
                    listnum: listnum,
                    selectedHistorialCost: selectedHistorialCosts.includes(listnum)
                };
            });
            setCostCounter(numCost);
        }
    }, [costsHistorial, selectedHistorialCosts]);


    //Fetching Cost Table

    useEffect(()=>{
        fetch('http://localhost:3000/api/v1/record-costs')
        .then(response => {
            if(!response.ok){
                throw new Error('Network was not ok')
            }
            return response.json()
        })
        .then(data => setCostsHistorial(data) /*console.log(data)*/)
        .catch(error =>{
            console.error('Error fetching costs', error)
        })
    }, [])

    //Posting Data * Cost
    const [formData, setFormData] = useState(null);

    useEffect(()=>{
        if(formData){
            fetch('http://localhost:3000/api/v1/record-costs',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(formData),
            })
            .then((response)=>{
                if (!response.ok){
                    throw new Error('Network was not ok');
                }
                alert('Gasto Registrado con exito');
                
                window.location.reload();
            })
            .catch((error)=>{
                console.error('Error posting costs', error);
            });
        }
    }, [formData])


    //Deleting Data * Cost
    




    return(
        <CostsHistorialContext.Provider value={{
            costsHistorial,
            setCostsHistorial,
            isModalOpen,
            openModal,
            closeModal,
            isModalCreateOpen,
            openCreateModal,
            closeCreateModal,
            formData,
            setFormData,
            costCounter,
            setCostCounter,
            selectCost,
            undoSelectCost,
            isModalDeleteOpen,
            openDeleteModal,
            closeDeleteModal,

        }}>
            {children}
        </CostsHistorialContext.Provider>
    )
}




export {MenuContext, MenuProvider, CostsContext, CostsProvider, SalesContext, SalesProvider, CostsHistorialProvider, CostsHistorialContext, RecordCostProvider , RecordCostContext}