import React from 'react';
import Parse from 'parse';
import Backbome from 'backbone';
import MakeTrip from './Maketrip.jsx';

export default class TripDetail extends React.Component {
  render() {
    return (
      <div className="tripdetail">
        <img src={this.props.images.get("images")} />
      </div>
    )
  }
}
