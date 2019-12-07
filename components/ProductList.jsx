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
                var list = json.filter(p=>typeof p.id === 'string' && p.id.startsWith('s3697110'))
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

    edit(id, name, price, description, brand, producer, imageURL) {
        this.setState({ id: id, name: name, price: price, description: description, brand: brand, producer: producer, imageURL: imageURL, addNew: false })
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
        this.setState({ addNew: true })
    }


    render() {
        return (
            <div className="card">
                <div className="card-header"><h1> This is product list to CRUD</h1></div>
                <div className="card-body">
                    {this.state.products.map(s =>
                        <div>
                            <ul>
                                <li>{s.id}</li>
                                <li>{s.name}</li>
                                <li>{s.price}</li>
                                <li>{s.description}</li>
                                <li>{s.brand}</li>
                                <li>{s.producer}</li>
                                <li>{s.imageURL}</li>
                            </ul>
                            - <button onClick={this.edit.bind(this, s.id, s.name, s.price, s.description, s.brand, s.producer, s.imageURL)}>Edit</button>
                            - <button onClick={this.delete.bind(this, s.id)}>Delete</button>
                        </div>
                    )}
                </div>
                <div className="card-body">
                    <strong>Add new product</strong>
                    <div>
                        <ul>
                            <li>
                                Product ID: <input type="text" id="id" name="id" value={this.state.id}
                                    onChange={this.handleChange.bind(this)}
                                ></input></li>

                            <li>
                                Product name: <input type="text" id="name" name="name" value={this.state.name}
                                    onChange={this.handleChange.bind(this)}
                                ></input>
                            </li>
                            <li>
                                Product price: <input type="text" id="price" name="price" value={this.state.price}
                                    onChange={this.handleChange.bind(this)}
                                ></input></li>
                            <li>
                                Product description: <input type="text" id="description" name="description" value={this.state.description}
                                    onChange={this.handleChange.bind(this)}
                                ></input>
                            </li>
                            <li>
                                Product brand: <input type="text" id="brand" name="brand" value={this.state.brand}
                                    onChange={this.handleChange.bind(this)}
                                ></input>
                            </li>
                            <li>
                                Product producer: <input type="text" id="producer" name="producer" value={this.state.producer}
                                    onChange={this.handleChange.bind(this)}
                                ></input>
                            </li>
                            <li>
                                Product image: <input type="text" id="imageURL" name="imageURL" value={this.state.imageURL}
                                    onChange={this.handleChange.bind(this)}
                                ></input>
                            </li>
                        </ul>

                        -<button onClick={this.save.bind(this)}>Save</button>
                        -<button onClick={this.add.bind(this)}>Add new</button>
                    </div>
                </div>
            </div>
        )
    }
}