import React from 'react';
import { connect } from 'react-redux'

import PanelCard from './PanelCard'
// import apiData from './../../store/apiData'

const Metrobank = () => {
  const data = {
    title: 'Metrobank API',
    image: 'metrobank.jpg',
    headerColor: '#283593', 
    postRoute: '/metrobank',
    reportRoute: '#report',
  }
  return (
    <PanelCard {...data} />
  )
}

export default connect()(Metrobank)