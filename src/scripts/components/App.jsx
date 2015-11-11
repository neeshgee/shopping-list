import React from 'react';
import Home from './Home.jsx';
import MakeTrip from './MakeTrip.jsx';
import Shop from './Shop.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Results from './Results.jsx';
import ResultsDetail from './ResultsDetail.jsx';
import Router from '../router.js';
import NavigationItem from './NavigationItem';
import Backbone from 'backbone';

export default class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        currentRoute: props.router.current,
        modalDisplay: 'hidden'
      }
    }

    componentWillMount() {
      this.props
        .router
        .on('route', this.onRoute);
    }

    showMenu = () => {
      this.setState({modalDisplay: 'visible'});

    }

    hideMenu = () => {
      this.setState({modalDisplay: 'hidden'});
    }

    handleSignOut = () => {
      Parse.User.logOut();
      Backbone.history.navigate('#/', true);
      this.hideMenu();
    }

    onRoute = () => {
      this.hideMenu();
      this.setState({
        currentRoute: this.props.router.current
      });
    }

    render() {
      let currentView;

      switch (this.state.currentRoute) {
        case 'shop' :
          currentView = <Shop />;
          break;
        case 'signIn' :
          currentView = <SignIn />;
          break;
        case 'makeTrip' :
          currentView = <MakeTrip />;
          break;
        case 'signUp' :
          currentView = <SignUp />;
          break;
        case 'results' :
          currentView = <Results />;
          break;
        case 'searchDetails' :
          currentView= <ResultsDetail />;
          break;
        default :
        currentView = <Home />;
      }

      let navItems = [
        <NavigationItem key="home" current={this.props.current === 'home'} label="Home" to="#" />
      ];

      if (Parse.User.current()) {
        navItems.push(
          <NavigationItem key="shop" current={this.props.current === 'shop'} label="Shop" to="#/shop" />,
          <NavigationItem key="trip" current={this.props.current === 'makeTrip'} label="Trip" to="#/trip" />,
          <li className="hvr-sweep-to-right" key="logout"><a onClick={this.handleSignOut}>Logout</a></li>
        )
      } else {
        navItems.push(
          <NavigationItem key="login" current={this.props.current === 'sign'} label="Login" to="#/sign" />
        )
      }

      return (
        <div className={"container " + this.state.currentRoute}>
            <button onClick={this.showMenu} className="menu"><img src="http://oswegocountytoday.com/wp-content/themes/giornalismo/images/mobile-nav-icon.png" width="40px"  height="40px" alt="" /></button>
            {currentView}
            <div className="footer">
              <footer>
                <div className="follow">
                  <div className="icons">
                    <a href="#"><img className="hvr-pulse fb" src="./images/fblike.png" /></a>
                    <a href="#"><img className="hvr-pulse" src="./images/linked.png" /></a>
                    <a href="#"><img className="hvr-pulse" src="./images/twitter.png" /></a>
                  </div>
                </div>
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
                  {navItems}
                </ul>
              </nav>
              <button id="close" onClick={this.hideMenu}><img className="close" src="images/close.svg" width="80px" height="80px" /></button>
            </div>
        </div>
      );
    }
};
