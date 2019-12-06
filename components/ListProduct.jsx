import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Filter from './Filter.jsx'
const url = "http://13.251.156.195:8080/products"

const Wrapper = styled.section`
    padding: 4em;
    background-color: "white-smoke"
`


export default class ListProduct extends Component {

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

    renderTableData() {
        return this.state.products.map((p,index) => {
            const { id, name, price, imageURL } = p
            return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>
                            <img src={imageURL} alt="imgTable" className='img-fluid' height={200} width={200} />
                        </td>
                        <td>
                            {name}
                        </td>
                        <td>
                            {price}
                        </td>
                        <td>
                            <Link to={`/ProductDetail/${p.id}/${p.name}/${p.price}/${p.description}/${p.brand}/${p.producer}/${p.imageURL}`}>
                                <button className='btn btn-outline-secondary'> More details...</button>
                            </Link>
                        </td>
                    </tr>
             
            )

        }
        )
    }
   

    render() {

        return (
            <div className='container-fluid'>
                <div className='row' style={{ marginTop: 10 }}>
                    <img src="https://wallpapercave.com/wp/wp2567605.jpg" alt="imgList" className="img-fluid rounded mx-auto d-block" />

                </div>
                <Wrapper style={{ marginTop: -20 }}>
                    <h3 className='m-3 d-flex justify-content-center'>Available products:</h3>
                    <div className='d-flex justify-content-md-end'>
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
                        <div className='col-lg-2'>
                            filter
                    </div>
                        <div className='col-lg-10'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderTableData()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}
