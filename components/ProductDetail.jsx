import React from 'react'


export default class ProductDetail extends React.Component {


    render() {
        return (
            <div className='row justify-content-center' style={{marginTop: 100}}>
                <div className='col-md-6'>
                    <div className='card rounded bg-dark text-white '>
                        {/* <img className='card-img' src={this.props.match.params.imageURL} alt="Card Image" /> */}
                       
                            <h4 className='card-title'>{this.props.match.params.name}</h4>
                            </div>
                            <div className='card-text'>
                                <strong>ID: {this.props.match.params.id}</strong>
                            </div>
                            <div className='card-text'>
                                <strong>Price: {this.props.match.params.price}VND</strong>
                                
                            </div>
                            <div className='card-text'>
                                <strong>Description:</strong>
                                {this.props.match.params.description}
                            </div>
                            <div className='card-text'>
                                <strong>Brand:</strong>
                                {this.props.match.params.brand}
                            </div>
                            <div className='card-text'>
                                <strong>Producer:</strong>
                                {this.props.match.params.producer}
                            </div>
                        </div>
                    </div>
    
        )
    }

}