import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { fetchInfo } from './../actions/'

import AvatarImage from './../../shared/components/AvatarImage'
import Button from './../../shared/components/Button'
import Filter from './../components/Filter'
import OptionsFilter from './../components/OptionsFilter'
import TaskList from './../components/TaskList'

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
    ]

    return (
      <div>
        <div className="tasksHeader">
          <AvatarImage />
          <Filter options={header} />
          <Button />
        </div>
        <div className="tasksFilter">
          <OptionsFilter options={filterOptions} />
        </div>
        <div className="tasksBody">
          <TaskList tasks={taskList} />
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
