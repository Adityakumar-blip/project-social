 

import React, { Component } from 'react'
import  {Link} from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
       <>
         <nav className="navbar navbar-expand-lg navbar-light   navbar-container">
            <div className="container-fluid fluid">
              <a className="navbar-brand brand-name" href="#">   SocialPubli </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                  <Link  className='nav-link'  to={'/'}>
                    <h5>Home</h5>
                  </Link>
                  <Link className='nav-link'  to={'/influencer'}>
                    <h5> Influencer</h5>
                  </Link>
                  <Link  className='nav-link' to={'/brands'}>
                    <h5> Brands</h5>
                  </Link>
                  <Link  className='nav-link' to={'/ourwork'}>
                    <h5>Our Work</h5>
                  </Link>
                  <Link className='nav-link'  to={'/tools'}>
                    <h5>Tools</h5>
                  </Link>
                  <Link className='nav-link'  to={'/contactus'}>
                    <h5>Contact Us</h5>
                  </Link>
                   
              </div>
            </div>
         </nav>
       </>
    )
  }
}
