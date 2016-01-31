import React from 'react'
// var History = require('../modules/History.jsx')
// var PrintStyles = require('../modules/PrintStyles.jsx')
import renderers from './renderers/renderers'
import keymaster from 'keymaster'
import classes from './Presentation.scss'
import invariant from 'invariant'
// var ResizingMixin = require('../mixins/Resizing.jsx')

export default class Presentation extends React.Component {
  // mixins: [FluxMixin, ResizingMixin, StoreWatchMixin("PresentationStore")],

  // normalizeChildren(children) {
  //   var count = React.Children.count(children)
  //   if (count === 0) {
  //     throw new Error("Please add at least one slide")
  //   }

  //   return count === 1 ? [children] : children
  // }

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
  }

  componentWillUnmount () {
    const shortcuts = this.getShortcuts()
    Object.keys(shortcuts).each((key) => keymaster.unbind(key))
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
        <Renderer sizes = {this.getSizes()} currentSlide = {this.props.children[this.props.slideIndex]} allSlides = {this.props.children}></Renderer>
      </div>
    )
  }
}
