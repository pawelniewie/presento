import React from 'react'
import renderers from './renderers/renderers'
import keymaster from 'keymaster'
import classes from './Presentation.scss'
import invariant from 'invariant'
import connectToResize from './Resizing'
import connectPrintStyles from './PrintStyles'

export class Presentation extends React.Component {
  getShortcuts () {
    return {
      'page down': this.props.nextSlide,
      'right': this.props.nextSlide,
      'page up': this.props.previousSlide,
      'left': this.props.previousSlide,
      's': this.props.useSingleRenderer,
      'b': this.props.useBookletRenderer,
      'p': this.props.usePreviewRenderer
    }
  }

  componentDidMount () {
    const shortcuts = this.getShortcuts()
    Object.keys(shortcuts).map((shortcut) => {
      keymaster(shortcut, () => {
        shortcuts[shortcut]()
      })
    })
    this.props.startPresentation({
      slides: this.props.children
    });
  }

  componentWillUnmount () {
    const shortcuts = this.getShortcuts()
    Object.keys(shortcuts).each((key) => keymaster.unbind(key))
    this.props.stopPresentation();
  }

  getSizes () {
    return {
      width: this.props.slideWidth,
      height: this.props.slideHeight
    }
  }

  render () {
    const renderer = this.props.renderer
    invariant(renderers[renderer], 'Invalid renderer: "%s"', renderer)
    var Renderer = renderers[renderer]
    var classNames = classes['react-presentation'] + ' ' + classes[renderer]
    return (
      <div className = {classNames}>
        <Renderer sizes = {this.getSizes()} currentSlide = {this.props.children[this.props.currentIndex]} allSlides = {this.props.children}></Renderer>
      </div>
    )
  }
}

export default connectPrintStyles(connectToResize(Presentation))

