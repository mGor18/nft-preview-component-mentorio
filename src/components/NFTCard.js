import React from "react";
import './App.css';
import './NFTCard.css';
import nft from '../images/image-equilibrium.jpg';

const NFTCard = () => {
  return (
    <main className="container">
      <div id="nft-container">
        <div className="content-container">
          <a id="nft-img-container" href="#">
            <img className="nft-image" src={nft} alt="nft of a cube" />
            <div className="overlay"></div>
            <div id="eye-icon"></div>
          </a>
          <div className="info-section">
            <h1 className="item-name"><a href="#">Equilibrium #3429</a></h1>
            <div className="item-info">Our Equilibrium collection promotes balance and calm</div>
            <div className="nft-info-bar">
              <span className="eth-info">
                <div className="ethereum-svg"></div>
                  0.041 ETH
                </span>
              <span className="time-left-ind">
                <div className="clock-svg">
                </div>
                3 days left
              </span>
            </div>
          </div>
          <div className="divider-line"></div>
          <div id="info-footer">
            <div className="creator-info">
              <div className="creator-avatar"></div>
                <p className="creator-span">Creation of <a className="creator-name"> Jules Wyvern</a></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NFTCard;