import React, { PropTypes } from 'react'
import classNames from 'classnames'
import classes from './Booklet.scss'

export default class Booklet extends React.Component {
  static propTypes = {
    sizes: PropTypes.any,
    currentSlide: PropTypes.any,
    allSlides: PropTypes.any
  };

  render () {
    var currentSlide = this.props.currentSlide
    var slides = this.props.allSlides.map(slide => {
      var className = classNames({
        [classes['slide-wrapper']]: true,
        'current': (slide === currentSlide)
      })
      return (
        <div className = {className} style = {this.props.sizes}>
          {slide}
        </div>
      )
    })

    return <div>{slides}</div>
  }
}
