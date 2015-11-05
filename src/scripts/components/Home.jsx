import React from 'react';
import $ from 'jquery';
import Router from '../router';
import NavigationItem from './NavigationItem.jsx';


export default class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      modalDisplay: 'hidden'
    }
  }

  showMenu = () => {
    this.setState({modalDisplay: 'visible'});
    // console.log(this.state);
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
       <h2>Couponing at its finest</h2>
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

        <div className="icons">
        <a href="#"><img className="hvr-pulse fb" src="./images/fblike.png" /></a>
        <a href="#"><img className="hvr-pulse" src="./images/linked.png" /></a>
        <a href="#"><img className="hvr-pulse" src="./images/twitter.png" /></a>
        </div>
        <div>
        <footer>
          <div>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          </div>
          <span>&copy; 2015 Tanessia Gordon</span>
          <span>email: tanessiagordon18@gmail.com</span>
        </footer>
      </div>
      </div>
      </div>
    <div id="modal" className={this.state.modalDisplay}>
      <nav>
        <ul>
          <NavigationItem current={this.props.current === 'home'} onClick={this.hideMenu} label="Home" to="#"  />
          <NavigationItem current={this.props.current === 'signIn'} onClick={this.hideMenu} label="Sign In" to="#/sign"  />
          <NavigationItem current={this.props.current === 'shop'} onClick={this.hideMenu} label="Shop" to="#/shop" />
          <NavigationItem current={this.props.current === 'makeTrip'} onClick={this.hideMenu} label="Trip" to="#/trip"  />
        </ul>
      </nav>
      <button id="close" onClick={this.hideMenu}><img className="close" src="images/close.svg" width="80px" height="80px" /></button>
    </div>
    </div>



  }
}
