import React, { Component }from 'react';
import ChartRowUsers from './ChartRowUsers';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			productsList:[]
		 }
	}

// let url = "http://localhost:3030/api/users"
// let url = "http://localhost:3030/api/products"

    getProducts(){
        fetch("/api/users")
            .then(r => r.json())
                .then(productos =>{
                    this.setState({ productsList: productos.data})
                })
    }

    componentDidMount(){
        this.getProducts();
    }

// let tableRowsData = [
//     {
//         Title: 'Marvel Black Widow Funko Pop',
//         Length: 'Figura de colección Black Widow',
//         Rating: '3500',
//         Categories: ['Drama','Comedia'],
//         Awards: 'Marvel'
//     },
//     {
//         Title: 'Scarlet Witch',
//         Length: 'Figura coleccionable de Marvel, Scarlet Witch. La cabeza de la figura tiene 9cm de alto y 7cm',
//         Rating: 3500,
//         Categories: ['Drama','Acción','Comedia'],
//         Awards: 'Marvel'
//     },
//     {
//         Title: 'Captain Marvel',
//         Length: 'Figura coleccionable de Marvel, Capitana Marvel. La cabeza de la figura tiene 9cm de alto y 7cm',
//         Rating: 3500,
//         Categories: ['Drama','Acción','Comedia'],
//         Awards: 'Marvel'
//     },
//     {
//         Title: 'Razor Crest LEGO',
//         Length: 'Este kit de construcción de una nave estelar de 1023 piezas, un desafiante modelo para mayores de 10 años, incluye 5 personajes LEGO Star Wars coleccionables, entre ellos el Mandaloriano y el Niño. Es fantástico para jugar a interpretar y puede combinarse con otros sets LEGO Star Wars para disfrutar de más dosis de acción todavía.',
//         Rating: 6000,
//         Categories: ['Drama','Acción','Comedia'],
//         Awards: 'Star Wars'
//     },
    
// ]


 render(){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Domicilio</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Telefono</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>N°</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Domicilio</th>
                                <th>Fecha de Nacimiento</th>
                                <th>Telefono</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            this.state.productsList.map(( row , i) => {
                                return <ChartRowUsers { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )}
}

export default Chart;