import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import ProductPage from './ProductPage.jsx'

const url = "http://13.251.156.195:8080/products"


const Wrapper = styled.section`
    padding: 4em;
    background-color: "white-smoke";
`
const PageNumber = styled.span`
    color: rgb(62, 140, 204);
    user-select: none;
    cursor: pointer;
    margin: 0 3px;
    padding: 0 5px;
    border: 1px solid rgb(62, 140, 204);
    text-align: center;
    border-radius: 2px;
`
class GridItem extends React.Component {
    render() {
        return (
            <div className='card rounded' key={this.props.stt}>
                <div className='card-header'>{this.props.stt}</div>
                <div className='card-body'>
                    <div className='card-img'>
                        <img src={this.props.data.imageURL} alt="imgTable" className='img-fluid' height={300} width={300} />
                    </div>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <strong>Name:</strong>
                            {this.props.data.name}
                        </li>
                        <li className='list-group-item'>
                            <strong>Price</strong>
                            {this.props.data.price} VND
                </li>
                        <li className='list-group-item'>
                            <Link to={`/ProductDetail/${this.props.data.id}/${this.props.data.name}/${this.props.data.price}
                    /${this.props.data.description}/${this.props.data.brand}/${this.props.data.producer}/${this.props.data.imageURL}`}>
                                <button className='btn btn-outline-secondary'> More details...</button>
                            </Link>
                        </li >
                    </ul>
                </div>
            </div>
        )
    }
}

export default class GridProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            currentPage: 1,
            productsPerPage: 3
        }
        this.chosePage = this.chosePage.bind(this)

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

    chosePage(event) {
        this.setState({
            currentPage: Number(event.target.id)
        })
    }

    render() {
        //get current posted products
        var productList = this.state.products
        const currentPage = this.state.currentPage
        const productsPerPage = this.state.productsPerPage

        const indexOfLastProduct = currentPage * productsPerPage
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage
        //get a new list for present page
        const currentNewList = productList.slice(indexOfFirstProduct, indexOfLastProduct)
        //set stt for pages
        const renderNewList = currentNewList.map((todo, index) => {
            return <GridItem stt={index + 1 + (currentPage - 1) * productsPerPage} key={index} data={todo} />
        })

        //get page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(productList.length / productsPerPage); i++) {
            pageNumbers.push(i);
        }
        return (
            <div className='container-fluid'>
                <div className='row' style={{ marginTop: 10 }}>
                    <img src="https://wallpapercave.com/wp/wp2835830.jpg" alt="imgList" className="img-fluid rounded mx-auto d-block" height={500} width={650}/>
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
                        <div className='col-md-2'>
                        </div>
                        <div className='col-md-9'>
                            <div className='card-columns'>
                                {renderNewList}
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className="pagination-custom">
                            <ul id="page-numbers">
                                {pageNumbers.map(number => {
                                    if (this.state.currentPage === number) {
                                        return (
                                            <PageNumber>
                                                <span key={number} id={number} className="active">
                                                    {number}
                                                </span>
                                            </PageNumber>
                                        )
                                    }
                                    else {
                                        return (
                                            <PageNumber>
                                                <span key={number} id={number} onClick={this.chosePage}>
                                                    {number}
                                                </span>
                                            </PageNumber>
                                        )
                                    }
                                }
                                )}
                            </ul>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}



