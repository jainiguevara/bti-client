import React from 'react';
import { connect } from 'react-redux'

import PanelCard from './PanelCard'
// import apiData from './../../store/apiData'
 
const Chinabank = (props) => {
  const data = {
    title: 'Chinabank API',
    image: 'chinabank.jpg',
    headerColor: '#D32F2F', 
    postRoute: '#post',
    reportRoute: '#report',
  }
  return ( 
    <PanelCard {...data} />
  )
}

export default connect()(Chinabank)