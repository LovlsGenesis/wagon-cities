import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectCity from '../actions/index';

// class City extends Component {
//   handleClick = (event) => {
//     console.log(event.target)
//   }
//   render() {
//     return (
//       <p onClick={this.handleClick}>{this.props.name}</p>
//     )
//   }
// }

const City = (props) => {
  return (
    <li
      className="list-group-item"
      onClick={() => props.selectCity(props.city)}
    >{props.city.name}</li>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);

// export default City;
