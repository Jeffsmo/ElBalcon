import './Card.css';


function Card(){
    return(
        <div className='card-container'>
            <figure>
                <span className='category'>
                    Entrantes
                </span>
                <img className='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3DOe77qPCuy8UkeUNQKyomDJWuqwJBh8RsQ&usqp=CAU' alt="Salchipapa" />
                <div className='Add'>
                    +
                </div>
                <p className='name-price '>
                    <span className='text-name'> Salchipapa</span>
                    <span className='price'>9500 $</span>
                </p>
            </figure>
        </div>
    )
}

export default Card