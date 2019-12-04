import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import ProductCategories from './components/ProductCategories.jsx'
import ProductList from './components/ProductList.jsx'
import ProductPage from './components/ProductPage.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Homepage from './components/Homepage.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
export default class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter> 
                    <Navigation/> 
                    <Switch>
                        <Route exact path='/' component={Homepage}/>
                        <Route path='/ProductPage' component={ProductPage} />
                        <Route path={`/ProductDetail/:id/:name/:price/:description/:brand/:producer/:imageURL`} component={ProductDetail}/>
                        <Route path='/ProductCategories' component={ProductCategories} />
                        <Route path='/ProductList' component={ProductList} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}