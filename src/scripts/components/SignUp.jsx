import React from 'react';
import NavigationItem from './NavigationItem.jsx';
import Backbone from 'backbone';
import Parse from 'parse';

export default class SignUp extends React.Component {
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


  render () {
    return (
      <main>
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
              </main>

    )
  }
}
