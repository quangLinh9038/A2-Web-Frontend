import React from 'react'
import { BrowserRouter,Route, Link, Switch } from 'react-router-dom'
import ProductCategories from './ProductCategories.jsx'
import ProductList from './ProductList.jsx'
import ProductPage from './ProductPage.jsx'
import ProductDetail from './ProductDetail.jsx'


export default class App extends React.Component {
    render() {
        return (
                <div className='app'>
                    
                    <div>
                        <BrowserRouter>
                            <ul>
                                <li>
                                    <Link to ='/ProductPage'>All available product</Link>
                                    
                                    
                                </li>
                                <li><Link to ='ProductCategories'>Product Type</Link></li>
                                <li><Link to ='ProductList'>Product List</Link></li>
                            </ul>
                            <Switch>
                                <Route path='/ProductPage' component={ProductPage} />
                                <Route path={`/ProductDetail/:id/:name/:price/:description/:brand/:producer/:imageURL`} component={ProductDetail}/>
                                <Route path='/ProductCategories' component={ProductCategories} />
                                <Route path='/ProductList' component={ProductList} />

                            </Switch>
                        </BrowserRouter>
                     
                        
                    </div>
                </div>
        )
    }
}