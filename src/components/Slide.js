import React, { PropTypes } from 'react'

export default class Slide extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.any
  };

  render () {
    var className = 'slide ' + this.props.className

    return (
      <div id = {this.props.id} className = {className}>
            {this.props.children}
      </div>
    )
  }
}
