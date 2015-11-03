import React from 'react';
import Parse from 'parse';
import Results from './Results.jsx';

export default class ResultsDetail extends React.Component {

  render() {
    return (
        <div className="details">

          <p>
            <img src={this.props.coupon.get('Image').url()} />
          </p>
        </div>

    )
  }
}
