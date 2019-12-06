import React, { Component } from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import ProductPage from './ProductPage.jsx'

const url = "http://13.251.156.195:8080/products"


const Wrapper = styled.section`
    padding: 4em;
    background-color: "white-smoke";
`


export default class GridProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
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

    renderCardData() {
        return this.state.products.map((p) => {
            const { brand, name, price, imageURL } = p
            return (
                <div>
                    <div className='card-header'>{brand}</div>
                    <div className='car-body'>
                        <div className='card-img-top'>
                            <img src={imageURL} className='img-fluid' height={300} width={300} />
                        </div>
                        <ul>
                            <li>
                                <strong>Name:</strong>
                                {name}
                            </li>
                            <li>
                                <strong>Price: </strong>
                                {price} VND
                        </li>
                            <li>
                                <Link to={`/ProductDetail/${p.id}/${p.name}/${p.price}/${p.description}/${p.brand}/${p.producer}/${p.imageURL}`}>
                                    <button className='btn btn-outline-secondary'>Details</button>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row' style={{ marginTop: 10 }}>
                    <img src="https://wallpapercave.com/wp/wp2835830.jpg" alt="imgList" className="img-fluid rounded mx-auto d-block" />
                </div>
                <Wrapper style={{ marginTop: -20 }}>
                    <h3 className='m-3 d-flex justify-content-center'>Available products:</h3>
                    <div className='d-flex justify-content-end'>
                        <div className='btn-group' role='group' aria-label='view button' style={{ marginTop: 30 }}>
                            <Link to='/ListProduct'>
                                <button className='btn btn-secondary'><i className='fa fa-list'></i></button>
                            </Link>

                            <Link to='/GridProduct'>
                                <button className='btn btn-secondary'><i className='fa fa-th'></i></button>
                            </Link>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            Filter
                        </div>
                        <div className='col-lg-9'>
                            <div className='row'>
                                <div className='card-columns'>
                                    <div class='card rounded' >
                                        {/* <div className='card-header'>{p.brand}</div>
                                        <div className='card-body'>
                                            <div className='card-img-top'>
                                                <img src={p.imageURL} className='img-fluid' height={300} width={300} />
                                            </div>
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
                                        </div> */}
                                        {this.renderCardData()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}



