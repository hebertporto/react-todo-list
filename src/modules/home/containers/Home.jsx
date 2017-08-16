import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { fetchInfo } from './../actions/'


import OptionsFilter from './../components/OptionsFilter'
import TaskList from './../components/TaskList'
import Header from './../components/Header'

class Home extends Component {

  componentWillMount() {
    this.props.fetchInfo()
  }

  render() {
    const header = [
      { key: 1, title: 'FAMILY', count: 5 },
      { key: 2, title: 'PERSONAL', count: 3 },
      { key: 3, title: 'WORK', count: 4 },
      { key: 4, title: 'STUDY', count: 1 },
      { key: 5, title: 'CHURCH', count: 0 },
    ]
    const filterOptions = [
      { key: 1, title: 'All' },
      { key: 2, title: 'Active' },
      { key: 3, title: 'Finished' },
    ]
    const taskList = [
      { key: 1, title: 'All' },
      { key: 2, title: 'Active' },
      { key: 3, title: 'Finished' },
      { key: 4, title: 'Finished' },
      { key: 5, title: 'Finished' },
      { key: 6, title: 'Finished' },
      { key: 7, title: 'Finished' },
      { key: 7, title: 'Finished' },
    ]

    return (
      <div>
        <Header class="header" options={header} />
        <OptionsFilter options={filterOptions} />
        <TaskList tasks={taskList} />
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
