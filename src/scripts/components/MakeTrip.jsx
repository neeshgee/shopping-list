import React from 'react';
import NavigationItem from './NavigationItem.jsx';


export default class MakeTrip extends React.Component {
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
          <h1>Trips</h1>
        <div className="trips">
          <p>Ready to hit the grocery store? Pull up your saved trips here.</p>
          <p>You can also manage, add, or delete your trips.</p>
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
