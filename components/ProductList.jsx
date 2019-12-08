import React, { useState } from 'react'

const url = "http://13.251.156.195:8080/products"

export default class ProductList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            id: '',
            name: '',
            description: '',
            brand: '',
            producer: '',
            imageURL: '',
            addNew: true,
        }
    }


    fetchProductList() {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                var list = json.filter(p => typeof p.id === 'string' && p.id.startsWith('s3697110'))
                this.setState({ products: list })
            })
    }

    componentDidMount() {
        this.fetchProductList()
    }

    handleChange(e) {
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    save() {
        if (confirm('Do you want to save?')) {
            if (this.state.addNew === true) {
                fetch(url, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        id: this.state.id, name: this.state.name, price: this.state.price,
                        description: this.state.description, brand: this.state.brand, producer: this.state.producer, imageURL: this.state.imageURL
                    })
                })
                    .then(res => res.json())
                    .then(json => this.fetchProductList())
            }
            else {
                fetch(url, {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        id: this.state.id, name: this.state.name, price: this.state.price,
                        description: this.state.description, brand: this.state.brand, producer: this.state.producer, imageURL: this.state.imageURL
                    })
                })
                    .then(res => res.json())
                    .then(json => this.fetchProductList())
            }
        }
    }

    edit(id, name, price, description, brand, producer, imageURL) {
        if (confirm('Do you want to edit?')) {
            this.setState({ id: id, name: name, price: price, description: description, brand: brand, producer: producer, imageURL: imageURL, addNew: false })
        }
    }

    delete(id) {
        if (confirm('Do you want to delete?')) {
            fetch(url + "/" + id, {
                method: 'delete',
            }
            ).then(res => res.json())
                .then(json => this.fetchProductList())
        }
    }

    add() {
        if (confirm('Do you want to add?')) {
            this.setState({ addNew: true })
        }
    }


    render() {
        return (
            <div className='row justify-content-center' style={{marginTop:30}}>
                <div className='col-md-6'>
                    <div className="card">
                        <div className="card-header"><h1> Product list CRUD</h1></div>
                        <div className="card-body">
                            {this.state.products.map(s =>
                                <div>
                                    <div className='card'>
                                        <div className='card-header'>
                                            <strong>Product ID: </strong>{s.id}
                                        </div>
                                        <ul className='list-group list-group-flush'>
                                            {/* <li className="list-group-item"><strong> ID:</strong> {s.id}</li> */}
                                            <li className="list-group-item"><strong>Name:</strong> {s.name}</li>
                                            <li className="list-group-item"><strong>Price:</strong> {s.price}</li>
                                            <li className="list-group-item"><strong>Description:</strong> {s.description}</li>
                                            <li className="list-group-item"><strong>Brand:</strong> {s.brand}</li>
                                            <li className="list-group-item"><strong>Producer:</strong> {s.producer}</li>
                                            <li className="list-group-item"><strong>Image URL:</strong> {s.imageURL}</li>
                                        </ul>
                                        <div className='btn-group' role="group" aria-label="Button Group List">
                                            <button className='btn btn-outline-primary' type='button' onClick={this.edit.bind(this, s.id, s.name, s.price, s.description, s.brand, s.producer, s.imageURL)}>Edit</button>
                                            <button className='btn btn-outline-primary' type='button' onClick={this.delete.bind(this, s.id)}>Delete</button>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                        <br/>
                        <div className="card">
                            <div className='card-header'><h5>Edit Products</h5></div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Product ID: </span>
                                            <input className='form-control' placeholder='ID...' type="text" id="id" name="id" value={this.state.id}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>

                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Product name:</span>

                                            <input className='form-control' placeholder='Name..' type="text" id="name" name="name" value={this.state.name}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Product price:</span>
                                            <input className='form-control' placeholder='VND...' type="text" id="price" name="price" value={this.state.price}
                                                onChange={this.handleChange.bind(this)}
                                            ></input></div></li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Product description:</span>
                                            <input className='form-control' placeholder='Describe product...' type="text" id="description" name="description" value={this.state.description}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Product brand:</span>
                                            <input className='form-control' type="text" id="brand" name="brand" value={this.state.brand}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Product producer:</span>
                                            <input className='form-control' type="text" id="producer" name="producer" value={this.state.producer}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Product image URL:</span>
                                            <input className='form-control' type="text" id="imageURL" name="imageURL" value={this.state.imageURL}
                                                onChange={this.handleChange.bind(this)}
                                            ></input>
                                        </div>
                                    </li>
                                    <div className='btn-group' role="group" aria-label="Button Group List">
                                        <button className='btn btn-outline-primary' type='button' onClick={this.save.bind(this)}>Save</button>
                                        <button className='btn btn-outline-primary' type='button' onClick={this.add.bind(this)}>Add new</button>
                                    </div>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}