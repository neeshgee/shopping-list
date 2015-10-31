import React from 'react';
import NavigationItem from './NavigationItem.jsx';
import Backbone from 'backbone';
import Parse from 'parse';

export default class SignUp extends React.Component {

  handleSignOut = (user) => {
    Parse.User.logOut();
    console.log('signedout');
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var user = new Parse.User();
    user.set("password", this.refs.password.value);
    user.set("username", this.refs.email.value);


    user.signUp(null, {
      success: function(user) {
        Backbone.history.navigate( `/shop`, true);
  },
  error: function(user, error) {

    alert("Error: " + error.code + " " + error.message);
  }
});
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
        <h1>Sign Up</h1>
        <div className="signin">
          <form name="login" onSubmit={this.handleSubmit} acceptCharset="utf-8">
            <ul>
              <li><input className="textarea" ref="email" type="email" name="usermail" placeholder="yourname@email.com" required /></li>
              <li><input className="textarea" ref="password" type="password" name="password" placeholder="password" required /></li>
              <li><input className="submit" type="submit" value="Sign Up" /></li>
              </ul>
            </form>
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
