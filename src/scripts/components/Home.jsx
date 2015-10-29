import React from 'react';
import $ from 'jquery';
import Router from '../router';

export default class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      modalDisplay: 'hidden'
    }
  }

  // handleSubmit = () => {
  //   $('button').click(function () {
  //     $('#modal').show(500);
  //   });
  //
  //   $('#close').click(function () {
  //     $('#modal').hide(1000);
  //   });
  // }

  showMenu = () => {
    this.setState({modalDisplay: 'visible'});
    console.log(this.state);
  }

  hideMenu = () => {
    this.setState({modalDisplay: 'hidden'});
  }

  render() {
    return <div>
      <header>
      <button onClick={this.showMenu} className="menu"><img src="http://oswegocountytoday.com/wp-content/themes/giornalismo/images/mobile-nav-icon.png" width="40px"  height="40px" alt="" /></button>
       <h1>Shopping Trip</h1>
     </header>
     <div className="mid">
       <h2>Couponing at it's finest</h2>
      <div className="middle">
      <div className="money">
        <img src="https://cdn4.iconfinder.com/data/icons/dot/256/usd_dollar_money_cash.png" alt="" />
        <p>Save money with coupons for every trip.</p>
      </div>
      <div className="clock">
        <img src="http://simpleicon.com/wp-content/uploads/clock-time-7.png" alt="" />
        <p>Save time by organizing your coupons with our trip feature.</p>
      </div>
      <div className="check">
        <img src="http://www.accucompare.com/wp-content/uploads/2013/01/iconmonstr-check-mark-3-icon.png" alt="" />
        <p>Optimize your shopping in the palm of your hand!</p>
      </div>
      </div>
      <div className="follow">
        <p>Follow Us!</p>
        <a href="#"><img className="hvr-push fb" src="./images/fblike.png" /></a>
        <a href="#"><img className="hvr-push" src="./images/linked.png" /></a>
        <a href="#"><img className="hvr-push" src="./images/twitter.png" /></a>
        <div>
    <footer>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>

        <span>&copy; 2015 Tanessia Gordon</span>
        <span>email: tanessiagordon18@gmail.com</span>
        </footer>
      </div>
      </div>
      </div>
    <div id="modal" className={this.state.modalDisplay}>
      <nav>
        <ul>
          <a href="#"><li className="hvr-sweep-to-right">Home</li></a>
          <a href="#"><li className="hvr-sweep-to-right">Sign In</li></a>
          <a href="#"><li className="hvr-sweep-to-right">Shop</li></a>
          <a href="#"><li className="hvr-sweep-to-right">Trips</li></a>
        </ul>
      </nav>
      <button id="close" onClick={this.hideMenu}><img className="close" src="images/close.svg" width="80px" height="80px" /></button>
    </div>
    </div>



  }
}
