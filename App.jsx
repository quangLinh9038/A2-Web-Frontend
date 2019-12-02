import React from 'react'
import ProductType from './ProductType.jsx'
import ProductList from './Pages/ProductList.jsx'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className='app'>
                    <div>
                        <ProductList></ProductList>
                        <ProductType></ProductType>
                    </div>
                </div>
            </div>
        )
    }
}