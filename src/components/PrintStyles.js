import React, {PropTypes} from 'react'

export default function connectPrintStyles (Component) {
  const PrintStyles = React.createClass({
    propTypes: {
      slideWidth: PropTypes.number.isRequired,
      slideHeight: PropTypes.number.isRequired
    },

    componentDidMount () {
      this.style = document.createElement('style')
      document.head.appendChild(this.style)
      this.style.innerHTML = '@page {size: ' + this.props.slideWidth + 'px ' + this.props.slideHeight + 'px}'
    },

    componentWillUnmount () {
      this.style.remove()
    },

    render () {
      return <Component {...this.props} {...this.state} />
    }
  })

  return PrintStyles
}
