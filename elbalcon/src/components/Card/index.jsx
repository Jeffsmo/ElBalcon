
/*import { useContext } from 'react';
import { MenuContext } from '../../context';
*/
import './Card.css';



function Card(data){
   // const context = useContext(MenuContext)

    return(
        <div className='card-container'>
            <figure>
                <span className='category'>
                    {data.data.category.name}
                </span>
                <img className='image' src={`http://localhost:3000/api/v1/image/public/${data.data.images.fileName}`} alt={data.data.images.name} />
                <div className='Add' 
                    >
                    {data.data.id}
                </div>
                <span className='name-price '>
                    
                        <span className='text-name'> {data.data.name}</span>
                    
                    
                    <div className='price-container'>
                    <span className='price'>${` ${data.data.price}`}</span>
                    </div>
                    
                </span>
            </figure>
        </div>
    )
}

export default Card