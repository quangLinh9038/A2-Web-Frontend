// import React from 'react'
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
// import styled from 'styled-components'
// import Filter from './Filter.jsx'
// import GridProduct from './GridProduct.jsx'
// import ListProduct from './ListProduct.jsx'

// const url = "http://13.251.156.195:8080/products"

// const Wrapper = styled.section`
//     padding: 2em;
//     background-color: "white-smoke"
// `
// export default class ProductPage extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             products: [],
//         }
//     }

//     fetchProducts() {
//         fetch(url)
//             .then(res => res.json())
//             .then(json => {
//                 var list = json.filter(p => typeof p.id === 'string' && p.id.startsWith("s3697110"))
//                 this.setState({ products: list })
//             })
//     }

//     componentDidMount() {
//         this.fetchProducts()
//     }

//     render() {
//         return (
//             <div className='container-fluid'>
//                 <div className='row'>
//                     <div className='col-lg-10'></div>
//                     <div className='col-lg-2'>
//                         <div className='btn-group' role='group' aria-label='view button' style={{ marginTop: 30 }}>
//                             <Link to='/ListProduct'>
//                                 <button className='btn btn-secondary'><i className='fa fa-list'></i></button>
//                             </Link>

//                             <Link to='/GridProduct'>
//                                 <button className='btn btn-secondary'><i className='fa fa-th'></i></button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//                 <Wrapper>
//                     <h3 className='m-3 d-flex justify-content-center'>Available products:</h3>
//                     <div className='row'>
//                         <div className='col-lg-3'>
//                             filter
//                 </div>
//                         <div className='col-lg-9'>
//                             {this.state.products.map(p =>
//                                 <div class='card' >
//                                     <div className='card-header'>{p.brand}</div>
//                                     <div className='card-body'>
//                                         <img src={p.imageURL} className='img-fluid' height={600} width={600} />
//                                         <ul>
//                                             <li>
//                                                 <strong>Name:</strong>
//                                                 {p.name}
//                                             </li>
//                                             <li>
//                                                 <strong>Price: </strong>
//                                                 {p.price} VND
//                                     </li>
//                                             <li>
//                                                 <Link to={`/ProductDetail/${p.id}/${p.name}/${p.price}/${p.description}/${p.brand}/${p.producer}/${p.imageURL}`}>
//                                                     <button className='btn btn-outline-secondary'>Details</button>
//                                                 </Link>

//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </Wrapper>
//             </div>
//         )
//     }

// }