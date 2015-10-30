import React from 'react';
import NavigationItem from './NavigationItem.jsx';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalDisplay: 'hidden'
    }
  }

  showMenu = () => {
    this.setState({modalDisplay: 'visible'});
    console.log(this.state);
  }

  hideMenu = () => {
    this.setState({modalDisplay: 'hidden'});
  }

  render () {
    return (
      <div className="container">
          <button onClick={this.showMenu} className="menu"><img src="http://oswegocountytoday.com/wp-content/themes/giornalismo/images/mobile-nav-icon.png" width="40px"  height="40px" alt="" /></button>
          <h1>Sign In</h1>
        <div className="signin">
          <form name="login" action="index_submit" method="get" accept-charset="utf-8">
            <ul>
              <li><input className="textarea" type="email" name="usermail" placeholder="yourname@email.com" required /></li>
              <li><input className="textarea" type="password" name="password" placeholder="password" required /></li>
              <li><input className="submit" type="submit" value="Login" /></li>
              </ul>
            </form>
            <p>Not a member? Sign up here.</p>
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
    )
  }
}
