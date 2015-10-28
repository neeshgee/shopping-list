import React from 'react';

export default class Home extends React.Component {
  render() {
    return <div>
      <header>
      <a href="#"><img className="menu" src="http://oswegocountytoday.com/wp-content/themes/giornalismo/images/mobile-nav-icon.png" alt="" /></a>
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
    </div>
    </div>


  }
}
