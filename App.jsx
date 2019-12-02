import React from 'react'
import ProductType from './ProductCategories.jsx'
import ProductList from './ProductList.jsx'



export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className='app'>
                    <div>
                        <ProductType></ProductType>
                        <ProductList></ProductList>
                        
                    </div>
                </div>
            </div>
        )
    }
}