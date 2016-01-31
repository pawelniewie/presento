import React, { PropTypes } from 'react'
import renderers from './renderers/renderers'
import keymaster from 'keymaster'
import classes from './Presentation.scss'
import invariant from 'invariant'
import connectToResize from './Resizing'
import connectPrintStyles from './PrintStyles'

export class Presentation extends React.Component {
  static propTypes = {
    renderer: PropTypes.string.isRequired,
    slideWidth: PropTypes.number.isRequired,
    slideHeight: PropTypes.number.isRequired,
    currentIndex: PropTypes.number.isRequired,
    currentSlide: PropTypes.element,
    fetchTypeform: PropTypes.func.isRequired,
    receiveTypeform: PropTypes.func.isRequired,
    nextSlide: PropTypes.func.isRequired,
    previousSlide: PropTypes.func.isRequired,
    useSingleRenderer: PropTypes.func.isRequired,
    useBookletRenderer: PropTypes.func.isRequired,
    usePreviewRenderer: PropTypes.func.isRequired,
    startPresentation: PropTypes.func.isRequired,
    stopPresentation: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired
  };

  getShortcuts () {
    const nextSlide = () => {
      this.props.nextSlide()
      this.props.fetchTypeform()
    }

    const previousSlide = () => {
      this.props.previousSlide()
      this.props.fetchTypeform()
    }

    return {
      'page down': nextSlide,
      'right': nextSlide,
      'page up': previousSlide,
      'left': previousSlide,
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
    })
  }

  componentWillUnmount () {
    const shortcuts = this.getShortcuts()
    Object.keys(shortcuts).each((key) => keymaster.unbind(key))
    this.props.stopPresentation()
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
        <Renderer sizes = {this.getSizes()} currentSlide = {this.props.children[this.props.currentIndex]} allSlides = {this.props.children}/>
      </div>
    )
  }
}

export default connectPrintStyles(connectToResize(Presentation))

