import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { fetchInfo } from './../actions/'

import img from './../../theme/images/bg.jpeg'

class Home extends Component {

  componentWillMount() {
    this.props.fetchInfo()
  }

  render() {
    return (
      <div className="tasksWrapper">
        <div className="tasksHeader">
           Component Home Redux
        </div>
        <div className="tasksFilter">
          Filter
        </div>
        <div className="tasksBody">
          Body
          {this.props.home.info}
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  fetchInfo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  home: state.home,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfo: () => dispatch(fetchInfo()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
