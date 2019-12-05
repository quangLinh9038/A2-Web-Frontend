import React from 'react'

import { Link } from 'react-router-dom'
import style from 'styled-components'

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-dark" >
                    <div className="container-fluid">

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseContent" aria-expanded="false"
                            aria-controls="collapseContent" aria-label="Toggle navigation" style={{ border: 1 }}>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapseContent">

                            <ul className="navbar-nav mr-auto align-item-center mt-2 mt-lg-0">
                                <li className="nav-item ml-5 active">
                                    <Link to="/" className="nav-link text-light">Home</Link>
                                </li>
                                <li className="nav-item ml-5 active">
                                    <Link to="/ProductPage" className="nav-link text-light">Products</Link>
                                </li>
                                <div className="dropdown ml-5 active">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownmenu"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Edit form
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li className="nav-item active">
                                            <Link to="/ProductCategories" className="nav-link text-dark">Product Types</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link to="/ProductList" className="nav-link text-dark">Product List</Link>
                                        </li>
                                    </div>
                                </div>
                            </ul>

                            <form class="form-inline my-2 my-sm-0 " action="http://www.google.com/search" method="GET" role="search" onsubmit="Gsitesearch(this)" >

                                <input class="form-control mb-2 mr-sm-2" type="search" placeholder="Search products..." aria-label="Search" />
                                <button class="btn btn-outline-light my-5 my-sm-3" type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
   
}

