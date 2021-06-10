import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Productos en la Base de Datos',
    color: 'primary', 
    cuantity: 60,
    icon: 'fa-gift'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:'Usuarios en la Base de Datos', 
    color:'success', 
    cuantity: '4',
    icon:'fa-users'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Franquicias en la Base de Datos' ,
    color:'warning',
    cuantity:'5',
    icon:'fa-tags'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;