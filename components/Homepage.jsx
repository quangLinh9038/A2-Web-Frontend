import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Wrapper = styled.div`
    padding: 4em;
`
const ImgCarousel = styled.div`
    width: 100%;
    height: 100%;
`


export default class Homepage extends React.Component {


    render() {
        return (
            <div>
                <div>
                    <h1 className='m-3-fluid d-flex justify-content-center' style={{ marginTop: 30 }}> Welcome to our store</h1>
                </div>
                <Wrapper>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li className="active" data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <ImgCarousel>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://s3.amazonaws.com/nikeinc/assets/38830/Mercurial-Magista-Tiempo-Hypervenom-Brighten-Pitch_hd_1600.jpg?1426117820"
                                        className="img-fluid d-block w-100 "
                                        alt="First Slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <p>"The lastest pack of Nike boots made by ancient design with high technology!"</p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src="https://2.bp.blogspot.com/-uOdegqT5zRk/XKxcFzjNtZI/AAAAAAAB22E/rjE8kQ9N96YAyl2OCZFMkHF3M-8o_CazACLcBGAs/s738/nike-euphoria-pack-2019-football-boots-1.jpg"
                                        className="img-fluid d-block w-100"
                                        alt="Second Slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <p>"The incoming Nike's pack introduced to you with advanced techniques and modern design."</p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src="http://www.soccer365.com/wp-content/uploads/2018/09/adidas-spectral-mode-pack-1-1080x675.jpg"
                                        className="img-fluid d-block w-100"
                                        alt="Third Slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <p>"In competition with Nike, Adidas continue releasing the newest football pack which is inspired of Messi who recently took the sixth Ballon D'or"</p>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#myCarousel" data-slide="prev" role="button">
                                    <i className="fa fa-angle-left"></i>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#myCarousel" data-slide="next" role="button">
                                    <i className="fa fa-angle-right"></i>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </ImgCarousel>
                    </div>
                </Wrapper>
                <div>
                        <Link to='./ProductPage'  className='m-3-fluid justify-content-center d-flex ' style={{ color: "black" }}>
                          More products here...
                        </Link>
                    
                </div>
            </div>
        )
    }

}

