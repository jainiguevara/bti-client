import React from 'react'
import compose from 'lodash/fp/compose'
// import { translate } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import WarningIcon from '@material-ui/icons/Warning'
import InfoIcon from '@material-ui/icons/Info'

import connect from './connect'

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
})

class ConsecutiveSnackbars extends React.Component {
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.props.removeNotification()
  }

  render () {
    const { t, classes, messages, nextNotification, removeNotification, removeAllNotification, showAlert } = this.props
    if (!nextNotification || !nextNotification.message) {
      return null
    }

    const {
      message,
      details,
      id,
      err,
    } = nextNotification

    let infoIcon = null
    if (err) {
      infoIcon = <WarningIcon />
    } else if (details) {
      infoIcon = <InfoIcon />
    }

    return (
      <Snackbar
        key={id}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={!!id}
        autoHideDuration={6000}
        onClose={this.handleClose}
        onExited={removeNotification}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{t(message)}</span>}
        action={[
          messages.length >= 2 && <Button key="one" color="inherit" onClick={removeAllNotification}>{t('Dismiss All')}</Button>,
          <Button
            key="two"
            onClick={removeNotification}
            color="inherit"
          >
            {t('Dismiss')}
          </Button>,
          <IconButton color="inherit" key="three"
            onClick={() => details && showAlert(nextNotification)}
          >
            {infoIcon}
          </IconButton>,
        ]}
      />
    )
  }
}

export default compose(
  connect,
  withStyles(styles),
  // translate(),
)(ConsecutiveSnackbars)
