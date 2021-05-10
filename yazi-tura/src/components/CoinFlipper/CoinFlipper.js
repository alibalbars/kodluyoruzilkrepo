import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      counter: 0,
      yaziCounter: 0,
      turaCounter: 0,
    };
  }

  handleClick = () => {
    var counter = this.state.counter;
    var yaziCounter = this.state.yaziCounter;
    var turaCounter = this.state.turaCounter;
    var randomNumber = this.getRandomNumber();
    
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ 
      flipping: true, 
      counter: counter + 1, 
      side: randomNumber ? "yazi" : "tura",
      
      //0 = tura, 1 = yazi
    });
    console.log(randomNumber);
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ 
      flipping: false ,
      yaziCounter: randomNumber ? yaziCounter + 1 : yaziCounter,
      turaCounter: randomNumber ? turaCounter : turaCounter + 1
    }), 1000);
  };

  getRandomNumber = () =>  Math.round(Math.random());
  
  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick} style={{padding: "10px 20px"}} disabled={this.state.flipping}>At!</button>
        <p>
          Toplam
          <strong> {this.state.counter} </strong>
          atıştan
          <strong> {this.state.turaCounter}</strong>'ü tura
          <strong> {this.state.yaziCounter}</strong>
          'si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
