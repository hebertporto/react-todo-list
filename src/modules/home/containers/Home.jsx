import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { fetchInfo } from './../actions/'

import AvatarImage from './../../shared/components/AvatarImage'

class Home extends Component {

  componentWillMount() {
    this.props.fetchInfo()
  }

  render() {
    return (
      <div>
        <div className="tasksHeader">
          <AvatarImage />
           Home Redux
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
