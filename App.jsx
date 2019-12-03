import React from 'react'
import { BrowserRouter,Route, Link, Switch } from 'react-router-dom'
import ProductCategories from './ProductCategories.jsx'
import ProductList from './ProductList.jsx'
import ProductPage from './ProductPage.jsx'
import ProductDetail from './ProductDetail.jsx'


export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className='app'>
                    <div>
                        <BrowserRouter>
                            <ul>
                                <li>
                                    <Link to ='/ProductPage'>Product</Link>
                                </li>
                            
                            </ul>
                            <Switch>
                                <Route path='/ProductPage' component={ProductPage} />
                                <Route path={`/ProductDetail/:imageURL/:id/:name/:price/:description/:brand/:producer`} 
                                component={ProductDetail} />

                            </Switch>
                        </BrowserRouter>
                        <ProductCategories/>
                        <ProductList/>
                        
                    </div>
                </div>
            </div>
        )
    }
}