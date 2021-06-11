class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			productsList: [],
            usersLength: [],
		 }
	}

// let url = "http://localhost:3030/api/users"
// let url = "http://localhost:3030/api/products"

    getProducts(){
        fetch("/api/products")
            .then(r => r.json())
                .then(productos =>{
                    this.setState({ productsList: productos.meta.lenth})
                })
    }

    getUsers(){
        fetch("/api/users")
            .then(r => r.json())
                .then(productos =>{
                    this.setState({ productsList: productos.meta.lenth})
                })
    }

    componentDidMount(){
        this.getProducts();
        this.getUsers();
    }

 render(){
    return (
        <div className="row">
            
            {this.state.usersLength.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )}
}