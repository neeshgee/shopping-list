import React from 'react';
import Parse from 'parse';
import Results from './Results.jsx';
import Trip from '../Trip.js';

export default class ResultsDetail extends React.Component {
  handleClick = () => {
    let trip = new Trip();
    let image = this.props.coupon.get('Image').url();
    let user = Parse.User.current();

    trip.add("images", image);
    trip.set("user", user);
    trip.set("ACL", user);
    trip.set("keyword", 'saved');

    trip.save(null, {
      success: function (trip) {
        alert('Coupon has been saved to your trip!');
      },
      error: function (trip, error) {
        alert('Failed to save coupon' + error.message);
      }
    });

}

  render() {
    return (
        <div className="details">

          <div>
            <img src={this.props.coupon.get('Image').url()} />
            <p><button onClick={this.handleClick}>Save Coupon</button></p>
          </div>
        </div>

    )
  }
}
