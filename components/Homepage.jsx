import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import ProductCategories from './ProductCategories.jsx'
import ProductList from './ProductList.jsx'
import ProductPage from './ProductPage.jsx'
import ProductDetail from './ProductDetail.jsx'



export default class Homepage extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <h1 className='m-3 d-flex justify-content-center'> Welcome to our store</h1>
                </div>

                <div class="d-flex justify-content-center">
                    <div id="carousel" className="carousel-slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://s3.amazonaws.com/nikeinc/assets/38830/Mercurial-Magista-Tiempo-Hypervenom-Brighten-Pitch_hd_1600.jpg?1426117820"
                                    className="img-fluid mx-auto d-block w-100"
                                    alt="First slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="https://2.bp.blogspot.com/-uOdegqT5zRk/XKxcFzjNtZI/AAAAAAAB22E/rjE8kQ9N96YAyl2OCZFMkHF3M-8o_CazACLcBGAs/s738/nike-euphoria-pack-2019-football-boots-1.jpg"
                                    class="img-fluid mx-auto d-block w-100"
                                    alt="Second slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="http://www.soccer365.com/wp-content/uploads/2018/09/adidas-spectral-mode-pack-1-1080x675.jpg"
                                    class="img-fluid mx-auto d-block w-100"
                                    alt="Third slide" />
                            </div>
                            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <i class="fal fa-angle-left"></i>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                <i class="fal fa-angle-right"></i>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

