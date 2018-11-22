import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

import { fetchTransactions, postTransactions } from './../../actions/transactions'
import { setFilters } from './../../actions/query'
import PanelCard from  '../panels/PanelCard'
import { metrobank, chinabank } from '../../statics/bank-data'
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
        <PanelCard {...props} {...data} />
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <StatusTable {...props} {...data} />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    transactions: state.transactions,
    query: state.query,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: (tokens, bank, query) => {
      dispatch(fetchTransactions(tokens, bank, query))
    },
    postTransactions: payload => {
      dispatch(postTransactions(payload))
    },
    setFilters: payload => {
      dispatch(setFilters(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction)