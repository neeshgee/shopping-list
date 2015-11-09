import React from 'react';
import NavigationItem from './NavigationItem.jsx';
import SignUp from './SignUp.jsx';
import Backbone from 'backbone';
import Parse from 'parse';

export default class SignIn extends React.Component {

  handleSignIn = (event) => {
    event.preventDefault();
    Parse.User.logIn(this.refs.email.value, this.refs.password.value, {
      success: function(user) {
        Backbone.history.navigate( `/shop`, true);
  },
    error: function(user, error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
  }

  handleClick = () => {
    Backbone.history.navigate( `/up`, true);
  }

  render () {
    return (
      <main>
        <h1>Sign In</h1>
        <div className="signin">
          <form name="login" onSubmit={this.handleSignIn} acceptCharset="utf-8">
            <ul>
              <li><input className="textarea" ref="email" type="email" name="usermail" placeholder="yourname@email.com" required /></li>
              <li><input className="textarea" ref="password" type="password" name="password" placeholder="password" required /></li>
              <li><input className="submit" type="submit" value="Login" /></li>
            </ul>
          </form>
          <p>Not a member? Sign up <button onClick={this.handleClick}>here</button>.</p>
        </div>
      </main>
    )
  }
}
