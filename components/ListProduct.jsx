import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Filter from './Filter.js'
import ProductList from './ProductList.jsx'
const url = "http://13.251.156.195:8080/products"

const Wrapper = styled.section`
    padding: 4em;
    background-color: "white-smoke"
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

class TableItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>
                    <span>{this.props.data.id}</span>
                </td>
                <td>
                    <span>
                        <img src={this.props.data.imageURL} alt="imgTable" className='img-fluid' height={200} width={200} />
                    </span>
                </td>
                <td>
                    <span>{this.props.data.name}</span>

                </td>
                <td>
                    <span>{this.props.data.price}</span>
                </td>
                <td>
                    <Link to={`/ProductDetail/${this.props.data.id}/${this.props.data.name}/${this.props.data.price}
                    /${this.props.data.description}/${this.props.data.brand}/${this.props.data.producer}/${this.props.data.imageURL}`}>
                        <button className='btn btn-outline-secondary'> More details...</button>
                    </Link>
                </td>
            </tr>
        )
    }
}

export default class ListProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            currentPage: 1,
            productsPerPage: 2
        };
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
        this.fetchProducts();
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
            return <TableItem stt={index + 1 + (currentPage - 1) * productsPerPage} key={index} data={todo} />
        })

        //get page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(productList.length / productsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div className='container-fluid'>
                <div className='row' style={{ marginTop: 10 }}>
                    <img src="https://wallpapercave.com/wp/wp2567605.jpg" alt="imgList" className="img-fluid rounded mx-auto d-block" height={500} width={650}/>

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
                            {/* <Filter/> */}
                        </div>
                        <div className='col-lg-10'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th >STT</th>
                                        <th >ID</th>
                                        <th >IMAGE</th>
                                        <th >NAME</th>
                                        <th >PRICE (VND)</th>
                                        <th ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderNewList}
                                </tbody>
                            </table>
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
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}
