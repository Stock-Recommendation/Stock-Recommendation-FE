import React, { useEffect, useRef, useState } from "react";
// import './index.css'
type Props = {};

export const Header = ({ }: Props) => {

  return (
    <div className="main-background-position-banner" id="home">
        <div className="main py-5 px-5 mb-5">
          <div className="col-12">
            <div className="row">
              <div className="col-md-8">
                <h1 className="my-3 mt-md-5 mt-3 mb-5">
                  Tweetstock
                </h1>
                <div className="text-description">
                  Worldclass AI Stock Predictor combining <br/>
                  rigorous analysis of <span style={{color: "#28a8df" }}>Tweet Sentiments</span> and historical <br/>
                  <span style={{color: "#28a8df" }}>stock data</span> to give 6-month price predictions <br/>
                  of top 30 NASDAQ stocks.
                </div>
                <div className="d-flex align-items-center my-5">
                  <div>
                    <h5 style={{color: "#28a8df"}}>| Tweet Sentiment</h5>
                    <p>We use world class algorithms </p>
                  </div>
                  <div style={{marginLeft:'20px'}}>
                    <h5 style={{color: "#28a8df"}}>| Historical Data</h5>
                    <p>We use world class algorithms</p>
                  </div>
                  <div style={{marginLeft:'20px'}}>
                    <h5 style={{color: "#28a8df"}}>| 30%</h5>
                    <p>Is the average profit we made for our customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
