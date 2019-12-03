import React from 'react'

export default class ProductDetail extends React.Component {


    render() {
        return (
            <div>
                Products info:
                <div>Image
                    {this.props.match.params.imageURL}
                </div>
                <div>ID
                {this.props.match.params.id}

                </div>
                <div>Name
                {this.props.match.params.name}

                </div>
                <div>Price
                {this.props.match.params.price}

                </div>
                <div>Description
                {this.props.match.params.description}

                </div>
                <div>Brand
                {this.props.match.params.brand}

                </div>
                <div>Producer
                {this.props.match.params.producer}
                </div>

            </div>
        )
    }

}