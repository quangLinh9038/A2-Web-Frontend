import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Filter from './Filter.jsx'
const url = "http://13.251.156.195:8080/products"

const Wrapper = styled.section`
    padding: 4em;
    background-color: "white-smoke";
`


export default class ProductPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            filteredProducts: [],
        }
    }

    handleChange(e){
        this.setState({filteredProducts: e.target.value});
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
        const {products, filteredProducts} = this.state;
        let shownProducts = products;
        if(filteredProducts){
            shownProducts = products.filter(({id}) => id.includes(filterredProducts))
        }
        return (
            <Wrapper>

                <h3 className='m-3 d-flex justify-content-center'>Available products:</h3>
                <div className='row'>
                    <div className='card'>
                        <div className='card-body'> Grid and list</div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-2'>
                        <div>
                            <select value={filteredProducts} onChange={this.handleChange}>
                                <option value="">All</option>
                                <option value="id">{p.id}</option>
                                <option value="id">{p.id}</option>
                                <option value="id">{p.id}</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-7'>

                        {this.state.products.map(p =>

                            <div class='card' >
                                <div className='card-header'>{p.brand}</div>
                                <div className='card-body'>
                                    <img src={p.imageURL} className='img-responsive' height={600} width={600} />
                                    <ul>
                                        <li>
                                            <strong>Name:</strong>
                                            {p.name}
                                        </li>
                                        <li>
                                            <strong>Price: </strong>
                                            {p.price} VND
                                        </li>
                                        <li>
                                            <Link to={`/ProductDetail/${p.id}/${p.name}/${p.price}/${p.description}/${p.brand}/${p.producer}/${p.imageURL}`}>
                                                <button className='btn btn-outline-secondary'>Details</button>
                                            </Link>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Wrapper>
        )
    }
}