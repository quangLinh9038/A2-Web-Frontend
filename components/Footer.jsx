import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import ProductCategories from './ProductCategories.jsx'
import ProductList from './ProductList.jsx'
import ProductPage from './ProductPage.jsx'
import ProductDetail from './ProductDetail.jsx'
import styled from 'styled-components'


const Wrapper = styled.section`
    background-color: #00203FFF;
    color: white;
`
const IconSize = styled.i`
    font-size: 25px;
    color: white;
`



export default class Homepage extends React.Component {

    render() {
        return (
            <Wrapper>
                <footer class="mt-5 pt-5 pb-5 footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-xs-12 about-blog">
                                <h2>About blog</h2>
                                <p class="pr-4 text-white"> "We do not promise the cheapest price but we promise for the best high quality of football gunner!" </p>
                                <p><a href="https://www.facebook.com/RMITUniversityVietnam"><i class="fab fa-facebook-square"></i></a>
                                    <a href="https://www.instagram.com/rmituniversityvietnam/"><i class="fab fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/c/RMITUniversityVietnam/"><i class="fab fa-youtube"></i></a>
                                </p>
                            </div>

                            <div class="col-lg-3 col-xs-12 links">
                                <h4 class="mt-lg-0 mt-sm-3">Source Links</h4>
                                <ul class="m-0 p-0">
                                    <li>- <a href="https://theathletic.com/">The Athletic</a></li>
                                    <li>- <a href="https://betweentheposts.net">Between The Posts</a></li>
                                    <li>- <a href="https://www.thefalse9.com/">The False9</a></li>
                                    <li>- <a href="https://www.fourfourtwo.com/">Four Four Two</a></li>
                                    <li>- <a href="https://www.offthepost.tr">offthepost</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-xs-12 location">
                                <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                                <p>702 Nguyen Van Linh, District 7, Ho Chi Minh City</p>
                                <p class="mb-0"><i class="fa fa-phone mr-3"></i>(+848) 3776 1300</p>
                                <p><i class="fa fa-envelope mr-3"></i>enquiries@rmit.edu.vn</p>

                                <div class="mapouter">
                                    <div class="gmap_canvas"><iframe width="172" height="166" id="gmap_canvas" src="https://maps.google.com/maps?q=RMIT%20Nam&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                    </iframe><a href="https://www.embedgooglemap.net/blog/private-internet-access-coupon/"></a>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col copyright">
                                    <p class=""><small class="text-white-50">© 2019. All Rights Reserved.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </Wrapper>


        )
    }

}