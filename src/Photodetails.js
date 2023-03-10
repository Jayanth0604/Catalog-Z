import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function photodetails() {
  return (
    <div>
        <Fragment>
        <div id="loader-wrapper">
        <div id="loader"></div>

        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>

    </div>
    <Navbar/>

    <div className="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" data-image-src="assets/img/hero.jpg">
        <form className="d-flex tm-search-form">
            <input className="form-control tm-search-input" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success tm-search-btn" type="submit">
                <i className="fas fa-search"></i>
            </button>
        </form>
    </div>

    <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
            <h2 className="col-12 tm-text-primary">Photo title goes here</h2>
        </div>
        <div className="row tm-mb-90">            
            <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                <img src="assets/img/img-01-big.jpg" alt="Image" className="img-fluid"/>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                <div className="tm-bg-gray tm-video-details">
                    <p className="mb-4">
                        Please support us by making <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a PayPal donation</a>. Nam ex nibh, efficitur eget libero ut, placerat aliquet justo. Cras nec varius leo.
                    </p>
                    <div className="text-center mb-5">
                        <a href="#" className="btn btn-primary tm-btn-big">Download</a>
                    </div>                    
                    <div className="mb-4 d-flex flex-wrap">
                        <div className="mr-4 mb-2">
                            <span className="tm-text-gray-dark">Dimension: </span><span className="tm-text-primary">1920x1080</span>
                        </div>
                        <div className="mr-4 mb-2">
                            <span className="tm-text-gray-dark">Format: </span><span className="tm-text-primary">JPG</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h3 className="tm-text-gray-dark mb-3">License</h3>
                        <p>Free for both personal and commercial use. No need to pay anything. No need to make any attribution.</p>
                    </div>
                    <div>
                        <h3 className="tm-text-gray-dark mb-3">Tags</h3>
                        <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Cloud</a>
                        <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Bluesky</a>
                        <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Nature</a>
                        <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Background</a>
                        <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Timelapse</a>
                        <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Night</a>
                        <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Real Estate</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-4">
            <h2 className="col-12 tm-text-primary">
                Related Photos
            </h2>
        </div>
        <div className="row mb-3 tm-gallery">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-01.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Hangers</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">16 Oct 2020</span>
                    <span>12,460 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-02.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Perfumes</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">12 Oct 2020</span>
                    <span>11,402 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-03.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Clocks</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">8 Oct 2020</span>
                    <span>9,906 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-04.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Plants</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">6 Oct 2020</span>
                    <span>16,100 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-05.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Morning</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">26 Sep 2020</span>
                    <span>16,008 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-06.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Pinky</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">22 Sep 2020</span>
                    <span>12,860 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-07.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Bus</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">12 Sep 2020</span>
                    <span>10,900 views</span>
                </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src="assets/img/img-08.jpg" alt="Image" className="img-fluid"/>
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>New York</h2>
                        <a href="#">View more</a>
                    </figcaption>                    
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">4 Sep 2020</span>
                    <span>11,300 views</span>
                </div>
            </div>        
        </div> 
    </div> 

    <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
        <div className="container-fluid tm-container-small">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
                    <h3 className="tm-text-primary mb-4 tm-footer-title">About Catalog-Z</h3>
                    <p>Integer ipsum odio, pharetra ac massa ac, pretium facilisis nibh. Donec lobortis consectetur molestie. Nullam nec diam dolor. Fusce quis viverra nunc, sit amet varius sapien.</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                    <h3 className="tm-text-primary mb-4 tm-footer-title">Our Links</h3>
                    <ul className="tm-footer-links pl-0">
                        <li><a href="#">Advertise</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Our Company</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                    <ul className="tm-social-links d-flex justify-content-end pl-0 mb-5">
                        <li className="mb-2"><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
                        <li className="mb-2"><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                        <li className="mb-2"><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li className="mb-2"><a href="https://pinterest.com"><i className="fab fa-pinterest"></i></a></li>
                    </ul>
                    <a href="#" className="tm-text-gray text-right d-block mb-2">Terms of Use</a>
                    <a href="#" className="tm-text-gray text-right d-block">Privacy Policy</a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-7 col-12 px-5 mb-3">
                    Copyright 2020 Catalog-Z Company. All rights reserved.
                </div>
                <div className="col-lg-4 col-md-5 col-12 px-5 text-right">
                    Designed by <a href="https://templatemo.com" className="tm-text-gray" rel="sponsored" target="_parent">TemplateMo</a>
                </div>
            </div>
        </div>
    </footer>
    
        </Fragment>
    </div>
  )
}

export default photodetails