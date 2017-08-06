import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { fetchInfo } from './../actions/'

class Home extends Component {

  componentWillMount() {
    console.log('componentWillMount')
    this.props.fetchInfo()
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    return (
      <div>
        <h1> Component Home Redux</h1>
        <h1>{this.props.home.info}</h1>

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

const mapDispatchToProps = () => ({ fetchInfo })
export default connect(mapStateToProps, mapDispatchToProps)(Home)
