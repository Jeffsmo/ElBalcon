import Layout from '../../components/Layout/index';
import Card from '../../components/Card/index';
import { useState , useEffect } from 'react'; ///PERMITE ALMACENAR LA INFORMACION DE LA API LOS EFECTOS TAMBIEN SON PARA EL CONSUMO DE LA API
import './Menu.css';


function Menu() {
    const [items , setItems] = useState(null);

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
    return (
        <Layout>
            <h1>Menu</h1>
            <div className='items'>
            {
                items?.map(item =>(
                    <Card key={item.id} data={item}/>
                ))
            }
            </div>

        </Layout>

    )
  }
  
  export default Menu
  