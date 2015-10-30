import React from 'react';



  export default class NavigationItem extends React.Component {
    render() {
      let className;
      className = 'hvr-sweep-to-right';


    return (
      <li className={className}>
        <a href={this.props.to}>
          {this.props.label}
        </a>
      </li>
    );
   }
  }
