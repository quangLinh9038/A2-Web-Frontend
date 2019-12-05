import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames';


const url = "http://13.251.156.195:8080/products"



export default class ProductPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            listView: true,
            gridview: false,
            modalVisibility: false,
        }
    }
   


    fetchProducts() {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                var list = json.filter(p => typeof p.id === 'string' && p.id.startsWith("s3697110"))
                this.setState({ products: list })
            })
    }

    componentDidMount() {
        this.fetchProducts()
    }


    render() {
            return (


            <div>
                <h1>Available products:</h1>
                <div>
            
                    {this.state.products.map(p =>
                        <div>
                            <div>
                                <img src={p.imageURL} />
                                <li>
                                    <strong>Name: </strong>
                                    {p.name}
                                </li>
                                <li>
                                    <strong>Price: </strong>
                                    {p.price}
                                </li>
                            </div>
                            <Link to={`/ProductDetail/${p.id}/${p.name}/${p.price}/${p.description}/${p.brand}/${p.producer}/${p.imageURL}`}>
                                <button>Details</button>
                            </Link>

                        </div>
                    )}


                </div>
            </div>
        )
    }
}