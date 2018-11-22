import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import moment from 'moment'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 150,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class DateFilters extends React.Component {
  constructor(props) {
    super(props);
    const { startDate, endDate } = props.query
    this.state = {
      startDate,
      endDate
    };
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleStartDate (e) {
    this.setState({
      startDate: e.target.value
    })
  }

  handleEndDate (e) {
    this.setState({
      endDate: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const { startDate, endDate } = this.state
    this.props.setFilters({
      startDate,
      endDate
    })
  }

  render () {
    const { classes, query } = this.props;
    const { startDate, endDate } = query
    return (
      <div style={{ display: 'flex' }}>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="To"
            type="date"
            defaultValue={startDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleStartDate}
          />
          <TextField
            id="date"
            label="From"
            type="date"
            defaultValue={endDate}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.handleEndDate}
          />
          <Button 
            className={classes.button}
            color="secondary"
            variant="contained"
            size="small"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(DateFilters);