import React from 'react';
import { connect } from 'react-redux'

import PanelCard from './PanelCard'
// import apiData from './../../store/apiData'
 
const Chinabank = (props) => {
  const data = {
    title: 'Chinabank API',
    image: 'chinabank.jpg',
    headerColor: '#D32F2F', 
    icon: 'respiratory.png',
    postRoute: '#post',
    reportRoute: '#report',
    description: 'The FilmArray® Respiratory Panel (RP) EZ tests for a comprehensive set of 14 respiratory viral and bacterial pathogens in about an hour.' 
  }
  return ( 
    <PanelCard {...data} />
  )
}

export default connect()(Chinabank)