import React from 'react';
import NavigationItem from './NavigationItem.jsx';
import Backbone from 'backbone';
import Parse from 'parse';

export default class Shop extends React.Component {

  handleSubmit = () => {
    let keyword = this.refs.keyword.value;
    Backbone.history.navigate( `/results?keyword=${keyword}`, true);
  }

  handleSignOut = () => {
    Parse.User.logOut();
    Backbone.history.navigate('#', true);
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
      <main>
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
      </main>
    )
  }
}
