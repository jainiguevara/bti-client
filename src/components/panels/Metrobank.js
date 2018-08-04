import React from 'react';
import { connect } from 'react-redux'

import PanelCard from './PanelCard'
// import apiData from './../../store/apiData'

const Metrobank = () => {
  const data = {
    title: 'Metrobank API',
    image: 'metrobank.jpg',
    headerColor: '#283593', 
    icon: 'blood-culture.png',
    postRoute: '#post',
    reportRoute: '#report',
    description: 'The FilmArray® Respiratory Panel (RP) EZ tests for a comprehensive set of 14 respiratory viral and bacterial pathogens in about an hour.' 
  }
  return (
    <PanelCard {...data} />
  )
}

export default connect()(Metrobank)