import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import ProductCategories from './components/ProductCategories.jsx'
import ProductList from './components/ProductList.jsx'
import ProductPage from './components/ProductPage.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Homepage from './components/Homepage.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import ListProduct from './components/ListProduct.jsx'
import GridProducts from './components/GridProduct.jsx'
import styled from 'styled-components'

const Wrapper = styled.section`
    background-color :#edffed;
    font-family:'Century Gothic'
`

export default class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <BrowserRouter> 
                    <Navigation/> 
                    <Switch>
                        <Route exact path='/' component={Homepage}/>
                        <Route path='/ProductPage' component={ProductPage} />
                        <Route path={`/ProductDetail/:id/:name/:price/:description/:brand/:producer:imageURL`} component={ProductDetail}/>
                        <Route path='/ProductCategories' component={ProductCategories} />
                        <Route path='/ProductList' component={ProductList} />
                        <Route path='/ListProduct' component={ListProduct}/>
                        <Route path='/GridProduct' component={GridProducts}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </Wrapper>
        )
    }
}