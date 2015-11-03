import React from 'react';
import Shop from './Shop.jsx';
import NavigationItem from './NavigationItem.jsx';
import Parse from 'parse';
import Coupon from '../Coupon.js';
import ResultsDetail from './ResultsDetail.jsx';

export default class Results extends React.Component {


  constructor(props) {
    super(props);
    this.query = new Parse.Query(Coupon);

    window.q = this.query;

    this.state = {
      modalDisplay: 'hidden',
      keyword: this.params('keyword'),
      coupons: []
    };
  }

  componentWillMount() {
    this.query.equalTo('keyword', this.state.keyword);
    this.query
      .find({
        success: (results) => {
          this.setState({
            coupons: results
          });
          console.log(this.query);
        }
      });
  }

  showMenu = () => {
    this.setState({modalDisplay: 'visible'});
    // console.log(this.state);
  }

  hideMenu = () => {
    this.setState({modalDisplay: 'hidden'});
  }

  render () {
    let results = this.state
      .coupons
      .map((coupon, i) => {
        return <ResultsDetail coupon={coupon} key={i}/>;
      });
    return (
      <div className="container">
        <button onClick={this.showMenu} className="menu"><img src="http://oswegocountytoday.com/wp-content/themes/giornalismo/images/mobile-nav-icon.png" width="40px"  height="40px" alt="" /></button>
        <div className="results">
          <h2>You searched for &ldquo;{this.state.keyword}&rdquo;</h2>
          <p>Results...</p>
          <div className="res">{results}</div>
        </div>
        <div className="footer">
          <footer>
            <div>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            </div>
            <span>&copy; 2015 Tanessia Gordon</span>
            <span>email: tanessiagordon18@gmail.com</span>
          </footer>
        </div>
          <div id="modal" className={this.state.modalDisplay}>
            <nav>
              <ul>
                <NavigationItem current={this.props.current === 'home'} onClick={this.hideMenu} label="Home" to="#"  />
                <NavigationItem current={this.props.current === 'signIn'} onClick={this.hideMenu} label="Sign In" to="#/sign"  />
                <NavigationItem current={this.props.current === 'shop'} onClick={this.hideMenu} label="Shop" to="#/shop" />
                <NavigationItem current={this.props.current === 'makeTrip'} onClick={this.hideMenu} label="Trip" to="#/trip"  />
                <NavigationItem current={this.props.current === 'home'} onClick={this.handleSignOut} label="Logout" to="#"  />
              </ul>
            </nav>
            <button id="close" onClick={this.hideMenu}><img className="close" src="images/close.svg" width="80px" height="80px" /></button>
          </div>
      </div>
    )
  }

  params(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.hash);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}
