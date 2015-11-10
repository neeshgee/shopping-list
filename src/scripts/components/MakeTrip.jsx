import React from 'react';
import Parse from 'parse';
import NavigationItem from './NavigationItem';
import Trip from '../Trip';
import TripDetail from './TripDetail';
import ResultsDetail from './ResultsDetail';

window.Parse = Parse;

export default class MakeTrip extends React.Component {
  constructor(props) {
    super(props);
    this.query = new Parse.Query(Trip);
    let currentUser = Parse.User.current();

    window.q = this.query;

    this.state = {
      currentUser: currentUser,
      images: []
    };
  }

  componentWillMount() {
    this.query.equalTo("user", this.state.currentUser);
    this.query
    .find({
      success: (results) => {
        this.setState({
          images: results
        });
      },
      error: function(error) {
        console.log("Error: " + error.code + " " + error.message);
      }
    });
  }

  render () {
    let images = this.state
      .images
      .map((image, i) => {
        return <TripDetail images={image} key={i}/>
      })
    return (
      <main>
        <h1>Trips</h1>
        <div className="trips">
          <p>Ready to hit the grocery store?</p>
          <p>You can also delete your coupons here after you use them.</p>
          <h2>Coupons</h2>
          <div className="triplist">
            {images}
          </div>
        </div>
      </main>
    )
  }
}
