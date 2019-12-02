import React from 'react'

const url = "http://13.251.156.195:8080/products"
export default class ProductList extends React.Component{
    
    constructor(){
        super()
        this.state={
            products:[],
            id:'',
            name:'',
            description:'',
            brand:'',
            producer:'',
            image:'',
            addNew: true,
        }
    }
    
    fetchProductList(){
        fetch(url)
        .then(res=> res.json())
        .then(json=>{
            // var list = json.filter(p=>typeof p.id!=='undefined' && p.id!=="")
            this.setState({products: json})} )
    }

    componentDidMount(){
        this.fetchProductList()
    }

    handleChange(e){
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    


    edit(id,name,price, description, brand, producer, image){
        this.setState({id:id, name: name, price:price,description:description,brand:brand,producer:producer,image:image,addNew:false})
    }

    delete(id){
        if(confirm('Do you want to delete?')){
            fetch(url + "/" + id, {
                method: 'delete',
            }
            ).then(res=> res.json())
            .then(json => this.fetchProductList())
        }
    }

    add() {
        this.setState({addNew: true })
    }


    render() {
        return (
            <div className="card">
                <div className="card-header">This is product list</div>
                <div className="card-body">
                    {this.state.products.map(s =>
                        <div>
                            <ul>
                                <li>{s.id}</li>
                                <li>{s.name}</li>
                                <li>{s.price}</li>
                                <li>{s.description}</li>
                                <li>{s.brand}</li>
                                <li>{s.producer}</li>
                                <li>{s.image}</li>
                            </ul>
                            - <button onClick={this.edit.bind(this, s.id, s.name, s.price, s.description, s.brand, s.producer, s.image)}>Edit</button>
                            - <button onClick={this.delete.bind(this, s.id)}>Delete</button>
                        </div>
                     )}
                </div>
                <div className="card-body">
                    <strong>Add new product</strong>
                    Product ID: <input type="text" id="id" name="id" value= {this.state.id}
                        onChange={this.handleChange.bind(this)}
                    ></input>
                    Product name: <input type="text" id="name" name="name" value= {this.state.name}
                        onChange={this.handleChange.bind(this)}
                    ></input>

                    <button onClick={this.save.bind(this)}>Save</button>
                    <button onClick={this.add.bind(this)}>Add new</button>
                </div>            
            </div>
        )
    }
}