import React, {PropTypes} from 'react'

export default function connectToResize (Component) {
  const ResizeConnection = React.createClass({
    propTypes: {
      slideWidth: PropTypes.number.isRequired,
      slideHeight: PropTypes.number.isRequired
    },

    resizePresentation () {
      var windowSize = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
      document.body.style.zoom = this.getZoomFactor(this.getSizes(), windowSize)
    },

    getSizes () {
      return {
        width: this.props.slideWidth,
        height: this.props.slideHeight
      }
    },

    getZoomFactor (slideSize, windowSize) {
      return Math.min(windowSize.width / slideSize.width, windowSize.height / slideSize.height)
    },

    componentDidMount () {
      this.resizePresentation()
      window.addEventListener('resize', this.resizePresentation)
    },

    componentWillUnmount () {
      window.removeEventListener('resize', this.resizePresentation)
    },

    render () {
      return <Component {...this.props} {...this.state} />
    }
  })

  return ResizeConnection
}
