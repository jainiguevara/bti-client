import React, { userEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'
import compose from 'lodash/fp/compose'
import moment from 'moment'

import { fetchTransactions } from './../../actions/transactions'
import Loading from './../utility/Loading'


const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);

let counter = 0;
function createData(name, calories, fat) {
  counter += 1;
  return { id: counter, name, calories, fat };
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 10,
  },
}))(TableCell);

class CBTransactionsTable extends React.Component {
  state = {
    rows: this.props.transactions,
    page: 0,
    rowsPerPage: 5,
    ...JSON.parse(localStorage.getItem('user')),
  };

  // useEffect(() => {
  //   const { bank } = this.props
  //   const tokens = this.state.tokens
  //   this.props.fetchTransactions(tokens, bank) 
  // }, [this.props.transactions]);

  componentDidMount() {
    const { bank } = this.props
    const tokens = this.state.tokens
    this.props.fetchTransactions(tokens, bank)    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.transactions !== this.props.transactions) {
      this.setState({
        rows: this.props.transactions
      })
    }
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { rows, rowsPerPage, page } = this.state;

    console.log(rows)
    if (!rows) {
      return (
        <div>
            <Loading />
        </div>
      )
    } else {
      
      if (rows.length !== 0 && !rows.message) {
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
        return (
          <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Application No.</CustomTableCell>
                    <CustomTableCell>Account Name</CustomTableCell>
                    <CustomTableCell>Account Number</CustomTableCell>
                    <CustomTableCell>Amount</CustomTableCell>
                    {/* <CustomTableCell>Cover Number</CustomTableCell> */}
                    <CustomTableCell>Status</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                    const data = JSON.parse(row.data)
                    console.log(data)
                    return (
                      <TableRow key={row._id}>
                        <TableCell component="th" scope="row">
                          {row.referenceNo}
                        </TableCell>
                        <TableCell>{data.accountName}</TableCell>
                        <TableCell>{data.accountNumber}</TableCell>
                        <TableCell>{data.beneAmtConv}</TableCell>
                        {/* <TableCell>{row.cb_coverNumber}</TableCell> */}
                        <TableCell>{row.remarks}</TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 48 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      colSpan={3}
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onChangePage={this.handleChangePage}
                      onChangeRowsPerPage={this.handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActionsWrapped}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </Paper>
        )
      } else {
        return (
          <div style={{
            paddingTop: 10, 
            width: '100%',
            textAlign: 'center'
          }}>
            <Typography variant="p">
              You have no transactions today.
            </Typography>
          </div>
        )
      }
    }
  }
}

CBTransactionsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    transactions: state.transactions && state.transactions.payload
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTransactions: (tokens, bank) => {
      dispatch(fetchTransactions(tokens, bank))
    }
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(CBTransactionsTable)