import React from 'react'

export default class ProductDetail extends React.Component {


    render() {
        return (
            <div>
                Products info:
                <div>Image
                    {this.props.match.params.id}
                </div>
                <div>ID</div>
                <div>Name</div>
                <div>Price</div>
                <div>Description</div>
                <div>Brand</div>
                <div>Producer</div>
                
            </div>
        )
    }

}