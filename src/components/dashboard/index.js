import React from 'react'
import { connect } from 'react-redux'

import Panels from './../panels'

const Dashboard = (props) =>  {
  return (
    <div>
      <Panels />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Dashboard)