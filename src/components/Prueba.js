import React, { Component }from 'react';
import ChartRow from './ChartRow';
import TagName from './TagName';

class Prueba extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			productsList:[]
		 }
	}

// let url = "http://localhost:3030/api/users"
// let url = "http://localhost:3030/api/products"

    getProducts(){
        fetch("/api/categories")
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
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Categorias en la Base de Datos
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
                {this.state.productsList.map( (movie, i) => {
                    return <TagName {...movie} key={i} />
                })}
            </div>
          </div>
        </div>
      </div>

    )}
}

export default Prueba;