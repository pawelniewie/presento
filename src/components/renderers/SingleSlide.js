import React, { PropTypes } from 'react'

export default class SingleSlide extends React.Component {
  static propTypes = {
    sizes: PropTypes.any,
    currentSlide: PropTypes.any
  };

  render () {
    return <div className = 'slide-wrapper' style = {this.props.sizes}>
      { this.props.currentSlide }
    </div>
  }
}
