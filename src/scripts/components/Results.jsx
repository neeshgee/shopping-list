import React from 'react';
import Shop from './Shop.jsx';
import NavigationItem from './NavigationItem.jsx';
import Parse from 'parse';
import Coupon from '../Coupon.js';
import ResultsDetail from './ResultsDetail.jsx';

export default class Results extends React.Component {


  constructor(props) {
    super(props);
    this.query = new Parse.Query(Coupon);

    window.q = this.query;

    this.state = {
      keyword: this.params('keyword'),
      coupons: []
    };
  }

  componentWillMount() {
    this.query.equalTo('keyword', this.state.keyword);
    this.query
      .find({
        success: (results) => {
          this.setState({
            coupons: results
          });
          console.log(this.query);
        }
      });
  }

  render () {
    let results = this.state
      .coupons
      .map((coupon, i) => {
        return <ResultsDetail coupon={coupon} key={i}/>;
      });
    return (
      <div>
        <div className="results">
          <h2>You searched for &ldquo;{this.state.keyword}&rdquo;</h2>
          <p>Results...</p>
          <div className="res">{results}</div>
        </div>
      </div>
    )
  }

  params(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.hash);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}
