import React, { PropTypes } from 'react'
import classNames from 'classnames'

export default class Booklet extends React.Component {
  static propTypes = {
    sizes: PropTypes.any,
    currentSlide: PropTypes.any,
    allSlides: PropTypes.any
  };

  render () {
    var currentSlide = this.props.currentSlide
    var slides = this.props.allSlides.map(slide => {
      var classes = classNames({
        'slide-wrapper': true,
        'current': (slide === currentSlide)
      })
      return (
        <div className = {classes} style = {this.props.sizes}>
          {slide}
        </div>
      )
    })

    return <div>{slides}</div>
  }
}
