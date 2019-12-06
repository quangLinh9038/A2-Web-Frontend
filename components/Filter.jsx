import React from 'react'
import ProductPage from './ProductPage.jsx'


export default class Filter extends React.Component {

    constructor(){
        super()
        this.state = {
        filterProducts: [this.props.products],
        filter: '',
    }}
    
    handleChange(e) {
        this.setState({ filter: e.target.value });
    }


    render() {
        const { filterproducts, filter } = this.state;
        let shownProducts = filterproducts;
        if (filter) {
            shownProducts = filterproducts.filter(({ brand }) => brand.includes(filter))
        }
        return (
            <div>
                <div className='card'>
                    <div className='card-header'><p>Filter</p></div>
                    <div className='card-body'>
                        <div>
                            <select value={filter} onChange={this.handleChange}>
                                <option value="">All</option>
                                <option value="brand">{brand}</option>
                            </select>
                        </div>
                        <div>
                            <ul>
                                {shownProducts.map(({ name, id }) =>
                                    <li key={id}> {name} </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}