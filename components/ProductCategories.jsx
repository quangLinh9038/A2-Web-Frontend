import React from 'react'


const url = 'http://13.251.156.195:8080/productTypes'

export default class ProductCategories extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            productTypes: [],
            id: '',
            name: ''
        }
    }

    fetchProductTypes() {
        fetch(url).then(res => res.json())
            .then(json => {
                var list = json.filter(s => typeof s.id === 'string' && s.id.startsWith('s3697110'))
                this.setState({ productTypes: list })
            })
    }

    handleChange(e) {
        var obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    componentDidMount() {
        this.fetchProductTypes()
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
                        id: this.state.id, name: this.state.name
                    })
                })
                    .then(res => res.json())
                    .then(json => this.fetchProductTypes())
            }
            else {
                fetch(url, {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        id: this.state.id, name: this.state.name
                    })
                })
                    .then(res => res.json())
                    .then(json => {
                        this.fetchProductTypes()
                    })
            }
        }
    }

    delete(id) {
        if (confirm('Do you want to delete?')) {
            fetch(url + "/" + id, {
                method: 'delete',
            }
            ).then(res => res.json())
                .then(json => this.fetchProductTypes())
        }
    }

    edit(id, name) {
        if (confirm('Do you want to edit?')) {
            this.setState({ id: id, name: name, addNew: false })

        }
    }
    add() {
        if (confirm('Do you want to add?')) {
            this.setState({ addNew: true })
        }
    }


    render() {
        return (
            <div className='row justify-content-center' style={{ marginTop: 30 }}>
                <div className='col-md-6'>
                    <div className="card">
                        <div className="card-header"><h1>Categories list CRUD</h1></div>
                        <div className="card-body">
                            {this.state.productTypes.map(p =>
                                <div className='card'>
                                    <div className='card-header'></div>
                                    <ul className='list-group list-group-flush'>
                                        <li className="list-group-item">
                                            <strong>Type ID:</strong> {p.id}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Type name:</strong>
                                            {p.name}
                                        </li>
                                    </ul>
                                    <div className='btn-group' role="group" aria-label="Button Group Cat">
                                        <button className='btn btn-outline-primary' onClick={this.delete.bind(this, p.id)}>Delete</button>
                                        <button className='btn btn-outline-primary' onClick={this.edit.bind(this, p.id)}>Edit</button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <br />
                        <div className='card'>
                            <div className='card-header'><h5>Edit Categories</h5></div>

                            <div className="card-body">
                                <ul className='list-group list-group-flush'>
                                    <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Type ID: </span>

                                            <input className='form-control' placeholder='ID...' type="text" name="id" id="id" value={this.state.id}
                                                onChange={this.handleChange.bind(this)} />
                                        </div></li>
                                        <li className="list-group-item">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1">Type name: </span>

                                            <input className='form-control' placeholder='ID...' type="text" name="name" id="name" value={this.state.name}
                                                onChange={this.handleChange.bind(this)} />
        
                                        </div>
                                        </li> 
                                        <br/>
                                        <button className='btn btn-outline-primary' onClick={this.save.bind(this)}>Save</button>
                                        <button className='btn btn-outline-primary' onClick={this.add.bind(this)}>Add new</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}