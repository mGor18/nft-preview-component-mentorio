import React from "react";
import './App.css';
import './NFTCard.css';
import nft from '../images/image-equilibrium.jpg';

const NFTCard = () => {
  return (
    <main className="container">
      <section id="nft-container">
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
              <div className="eth-info">
                <div className="ethereum-svg"></div>
                  0.041 ETH
              </div>
              <div className="time-left-ind">
                <div className="clock-svg"></div>
                3 days left
              </div>
            </div>
          </div>
          <footer id="info-footer">
            <div className="creator-info">
              <div className="creator-avatar"></div>
                <p className="creator-span">Creation of <a href="#" className="creator-name"> Jules Wyvern</a></p>
            </div>
          </footer>
        </div>
      </section>
    </main>
  )
}

export default NFTCard;