import React from 'react'
import {Link} from 'react-router-dom'
const url = "http://13.251.156.195:8080/products"



export default class ProductPage extends React.Component {

    constructor() {
        super()
        this.state = {
            products: []
        }
    }


    fetchProducts() {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                var list = json.filter(p => typeof p.id === 'string' && p.id.startsWith("s3697110"))
                this.setState({ products: json })
            })
    }

    componentDidMount() {
        this.fetchProducts()
    }


    render() {
        return (
            <div>
                <h1>All of available products:</h1>
                <div>
                    <ul>
                        {this.state.products.map()(p =>
                            <div>
                                <li>{p.name}</li>
                                <li>{p.price}</li>
                                <li>{p.imageURL}</li>
                                <Link to={`/ProductDetail/${p.imageURL}/${p.id}/${p.name}/${p.price}/${p.description}/${p.brand}/${p.producer}`}>
                                <button>Detail</button>
                                </Link>
                            </div>
                        )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}