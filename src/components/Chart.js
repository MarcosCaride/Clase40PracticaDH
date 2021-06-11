import React, { Component }from 'react';
import ChartRow from './ChartRow';

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
        fetch("/api/products")
            .then(r => r.json())
                .then(productos =>{
                    this.setState({ productsList: productos.data})
                })
    }

    componentDidMount(){
        return this.getProducts();
    }


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
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Franquicia</th>
                                <th>Categoria</th>
                                <th>Androide del Mes</th>
                                <th>Heroína</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>N°</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Franquicia</th>
                                <th>Categoria</th>
                                <th>Androide del Mes</th>
                                <th>Heroína</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            this.state.productsList.map(( row , i) => {
                                return <ChartRow { ...row} key={i}/>
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