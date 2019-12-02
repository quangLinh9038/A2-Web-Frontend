import React from 'react'


const url = 'http://13.251.156.195:8080/productTypes'

export default class ProductType extends React.Component{
    
    constructor(){
        super()
        this.state={
            productTypes:[]
        }
    }
    
    fetchProductTypes(){
        fetch(url)
        .then(res=> res.json())
        .then(json=> this.setState({productTypes: json}))

    }

    componentDidMount(){
        this.fetchProductTypes()
    }

    render(){
        return(
        <div>
            <div className="card">
                <div className="card-header">This is product type list</div>
                <div className="card-body">
                    {this.state.productTypes.map(p =>
                        <li>
                            {p.id} | {p.name}
                        </li>
                        )}
                </div>
            </div>
        </div>
        )
    }
}