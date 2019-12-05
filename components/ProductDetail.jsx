import React from 'react'


export default class ProductDetail extends React.Component {


    render() {
        return (
            <div>
                Products info:
                
                <div>
                    <strong>ID</strong>:
                    {this.props.match.params.id}

                </div>

                <div>
                    <strong>Name</strong>:
                    {this.props.match.params.name}

                </div>

                <div>
                    <strong>Price</strong>:
                    {this.props.match.params.price} 
                    <p>VND</p>
                </div>

                <div>
                    <strong>Description</strong>:
                    {this.props.match.params.description}
                </div>

                <div>
                    <strong>Brand</strong>:
                    {this.props.match.params.brand}
                </div>

                <div>
                    <strong>Producer</strong>:
                    {this.props.match.params.producer}
                </div>
                
                <div>
                    <strong>Image</strong>:
                    {this.props.match.params.imgURL} 
                    
                </div>


            </div>
        )
    }

}