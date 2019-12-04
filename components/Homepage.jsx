import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import ProductCategories from './ProductCategories.jsx'
import ProductList from './ProductList.jsx'
import ProductPage from './ProductPage.jsx'
import ProductDetail from './ProductDetail.jsx'



export default class Homepage extends React.Component {

    render() {
        return (
            <div>
                <h1 className='m-3 d-flex justify-content-center'> Welcome to our store</h1>
                
            </div>


        )
    }

}