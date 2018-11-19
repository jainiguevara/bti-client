import React from 'react'
import { Grid } from '@material-ui/core'

import PanelCard from  '../panels/PanelCard'
import { metrobank, chinabank } from '../../statics/bank-data'
import history from './../../history'

import Documentation from './Documentation';
import StatusTable from './StatusTable';

const Transaction = props => {
  const { match } = props
  let data = { form: true } 
  if (match.params.bank === 'metrobank') {
    data = { ...metrobank, ...data }
  } else if (match.params.bank === 'chinabank') {
    data = { ...chinabank, ...data }
  }
  return (
    <Grid style={{padding: 10}} container spacing={24}>
      <Grid item xs={12} md={4} lg={4}>
        <PanelCard {...data} />
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <StatusTable {...data} />
      </Grid>
    </Grid>
  )
}

export default Transaction