import React from 'react'
// var actions = require('../config/actions.jsx')
// var Fluxxor = require('fluxxor')
// var FluxMixin = Fluxxor.FluxMixin(React)
// var StoreWatchMixin = Fluxxor.StoreWatchMixin
// var PresentationStore = require('../stores/PresentationStore.jsx')
// var ShortcutStore = require('../stores/ShortcutStore.jsx')
// var History = require('../modules/History.jsx')
// var PrintStyles = require('../modules/PrintStyles.jsx')
import renderers from './renderers/renderers'
import classes from './Presentation.scss'
// var invariant = require('invariant')
// var ResizingMixin = require('../mixins/Resizing.jsx')

export default class Presentation extends React.Component {
  // mixins: [FluxMixin, ResizingMixin, StoreWatchMixin("PresentationStore")],
  // getDefaultProps() {
  //   return {
  //     flux,
  //     slideWidth: 1280,
  //     slideHeight: 768
  //   }
  // }

  // normalizeChildren(children) {
  //   var count = React.Children.count(children)
  //   if (count === 0) {
  //     throw new Error("Please add at least one slide")
  //   }

  //   return count === 1 ? [children] : children
  // }

  // componentDidMount() {
  //   this.getFlux().actions.updateSlides(this.normalizeChildren(this.props.children))
  //   this.history = new History(flux.store('PresentationStore'), flux.actions.updateSlideIndex)
  //   this.history.attach()

  //   this.printStyles = new PrintStyles(this.getSizes())
  //   this.printStyles.attach()
  // }

  // componentWillUnmount() {
  //   this.history.detach()
  //   this.printStyles.detach()
  // }

  // getStateFromFlux() {
  //   return this.getFlux().store("PresentationStore").getState()
  // }

  getSizes () {
    return {
      width: this.props.slideWidth,
      height: this.props.slideHeight
    }
  }

  render () {
    const renderer = (this.state || {}).renderer || 'booklet'
    // invariant(renderers[renderer], 'Invalid renderer: "%s"', renderer)
    var Renderer = renderers[renderer]
    var classNames = classes['react-presentation'] + ' ' + classes[renderer]
    return (
      <div className = {classNames}>
        <Renderer sizes = {this.getSizes()} currentSlide = {this.props.slideIndex} allSlides = {this.props.children}></Renderer>
      </div>
    )
  }
}
