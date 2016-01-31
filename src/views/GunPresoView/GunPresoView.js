import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as presentationActions } from '../../redux/modules/presentation'
// import classes from './GunPresoView.scss'
import Presentation from '../../components/Presentation'
import Slide from '../../components/Slide'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  allSlides: state.presentation.allSlides,
  currentIndex: state.presentation.currentIndex,
  currentSlide: state.presentation.currentSlide,
  slideWidth: state.presentation.slideWidth,
  slideHeight: state.presentation.slideHeight,
  renderer: state.presentation.renderer
})
export class GunPresoView extends React.Component {
  static propTypes = {
    slideWidth: PropTypes.number.isRequired,
    slideHeight: PropTypes.number.isRequired,
    renderer: PropTypes.string.isRequired
  };

  render () {
    return (
      <Presentation {...this.props}>
        <Slide>
          <h1>React Presentation</h1>
          <p>This is a react presention</p>
        </Slide>
        <Slide>
          <h1>Slide with a list</h1>
          <ul>
            <li>You </li>
            <li>Can</li>
            <li>Have</li>
            <li>A</li>
            <li>List</li>
            <li>Of</li>
            <li>Items</li>
          </ul>
        </Slide>
      </Presentation>
    )
  }
}

export default connect(mapStateToProps, presentationActions)(GunPresoView)
