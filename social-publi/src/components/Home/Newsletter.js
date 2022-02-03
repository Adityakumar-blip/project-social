import React from 'react';
import './Newsletter.css';
import news from '../image/news.jpg';

const Newsletter = () => {
  return (
    <>
    <section>
        <div className='row'>
        <div className="card">
            <div className="row g-0">
            <div className="col-md-6">
                <img src={news} class="img-fluid rounded-start" alt="..."/>
            </div>
        <div className="col-md-6">
            <div className="card-body">
                <h2 className="card-title">Ready to Hear from us..</h2>
                <h4>One Newsletter for daily updates of the market <br/>trends and growing Influencers</h4>
                <div className="form-floating">
                    <input type="email" className="rounded-pill form-control" id="floatingInput" placeholder="Enter Your Email"/>
            </div>
            </div>
        </div>
    </div>
    </div>

        </div>
    </section>
    </>
);
};

export default Newsletter;
