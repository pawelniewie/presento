import React, { PropTypes } from 'react'
import classes from './Slide.scss'

export default class Slide extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.any
  };

  render () {
    var className = classes['slide'] + ' ' + this.props.className

    return (
      <div id = {this.props.id} className = {className}>
            {this.props.children}
      </div>
    )
  }
}
