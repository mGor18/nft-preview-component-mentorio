import React from "react";
import './App.css';
import './NFTCard.css';

const NFTCard = () => {
  return (
    <div id="nft-container">
      <div className="content-container">
        <div id="nft-img">
          <div className="overlay"></div>
          <div id="eye-icon"></div>
        </div>
        <div className="info-section">
          <p className="item-name">Equilibrium #3429</p>
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
            <span>
              <span className="creator-span">Creation of</span> <span className="creator-name"> Jules Wyvern</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTCard;