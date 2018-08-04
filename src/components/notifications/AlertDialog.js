
import React from 'react'
import compose from 'lodash/fp/compose'
import { connect } from 'react-redux'
// import { translate } from 'react-i18next'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

// import { currentAlert, dismissAlert } from '../../store/alerts'

const AlertDialog = ({ t, currentAlert: content, dismissAlert: dismiss }) => (
  <Dialog
    open={!!(content && content.message)}
    onClose={dismiss}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{t(content.message)}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {t(content.details)}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={dismiss} color="primary" autoFocus>
        {t('Ok')}
      </Button>
    </DialogActions>
  </Dialog>
)

export default compose(
  connect(
    // currentAlert,
    // { dismissAlert }
  ),
  // translate(),
)(AlertDialog)
