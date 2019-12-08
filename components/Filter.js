import React from 'react'


export default class Filter extends React.Component {

    constructor() {
        super()
        this.state = {
            products: [],
            filter: '',
        }
    }
    handleChange(e){
        this.setState({ filter: e.target.value });
      }
    
    render() {
        const { products, filter } = this.state
        let shownProducts = products
        if (filter) {
            shownProducts = products.filter(({ brand }) => brand.includes(filter))
        }

        return (
            <div>
                <select value={filter} onChange={this.handleChange.bind(this)}>
                    <option value="">All</option>
                    <option value="brand">Nike</option>
                    <option value="brand">Adidas</option>
                    <option value="brand">Puma</option>

                </select>
                <div>
                    <ul>
                        {shownProducts.map(({ name, id }) => <li key={id}>{name}</li>)}
                    </ul>
                </div>
            </div>
        )
    }

}