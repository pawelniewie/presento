import React, { PropTypes } from 'react'
import classes from './SingleSlide.scss'

export default class SingleSlide extends React.Component {
  static propTypes = {
    sizes: PropTypes.any,
    currentSlide: PropTypes.any
  };

  render () {
    return (
      <div className = {classes['slide-wrapper']} style = {this.props.sizes}>
        { this.props.currentSlide }
      </div>
    )
  }
}
