import React from 'react';
import NavigationItem from './NavigationItem.jsx';
import Backbone from 'backbone';

export default class Shop extends React.Component {

  handleSubmit = () => {
    let keyword = this.refs.keyword.value;
    Backbone.history.navigate( `/results?keyword=${keyword}`, true);
  }

  handleSignOut = () => {
    Parse.User.logOut();
    console.log('signedout');
  }

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

  render () {
    return (
      <div className="container">
        <button onClick={this.showMenu} className="menu"><img src="http://oswegocountytoday.com/wp-content/themes/giornalismo/images/mobile-nav-icon.png" width="40px"  height="40px" alt="" /></button>
        <h1>Shop</h1>
        <div className="search">
        <p>In need of a coupon? Search for it here.</p>
        <form>
          <ul>
          <li><input className="searchbox" ref="keyword" type="text" placeholder="I need coupons for..." /></li>
          <li><input className="submit" onClick={this.handleSubmit} type="button" value="search" /></li>
          </ul>
        </form>
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
}
