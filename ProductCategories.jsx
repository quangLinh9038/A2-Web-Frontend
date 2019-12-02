import React from 'react'


const url = 'http://13.251.156.195:8080/productTypes'

export default class ProductType extends React.Component {

    constructor() {
        super()
        this.state = {
            productTypes: [],
            id: '',
            name: ''
        }
    }

    fetchProductTypes() {
        fetch(url).then(res => res.json())
            .then(json => {
                var list = json.filter(s => typeof s.id === 'string' && s.id.startsWith("s3697110"))
                this.setState({ productTypes: list })})
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
        this.setState({ id: id, name: name, addNew: false })

    }
    add() {
        this.setState({ addNew: true })
    }


    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header"><h1>This is categories</h1></div>
                    <div className="card-body">
                        {this.state.productTypes.map(p =>
                            <div>
                                <ul>
                                    <li>{p.id} | {p.name}
                                        - <button onClick={this.delete.bind(this, p.id)}>Delete</button>
                                        - <button onClick={this.edit.bind(this, p.id)}>Edit</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="card-body">
                        <strong>Edit form</strong>
                        <div>
                            Type ID: <input type="text" name="id" id="id" value={this.state.id}
                                onChange={this.handleChange.bind(this)} />

                            Type name: <input type="text" name="name" id="name" value={this.state.name}
                                onChange={this.handleChange.bind(this)} />

                            - <button onClick={this.save.bind(this)}>Save</button>
                            - <button onClick={this.add.bind(this)}>Add new</button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}