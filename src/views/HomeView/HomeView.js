import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../../redux/modules/presentation'
import DuckImage from './Duck.jpg'
import classes from './HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
})
export class HomeView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-5'>
            <img className={classes.duck}
                 src={DuckImage}
                 alt='This is a duck, because Redux.' />
          </div>
        </div>
        <h1>Available presentations</h1>
        <p>
          <Link to='/gun-preso'>Jak zdobyć pozwolenie na broń?</Link>
        </p>
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(HomeView)
