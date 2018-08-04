import { connect } from 'react-redux'
// import { createStructuredSelector } from 'reselect'
// import { removeNotification, removeAllNotification, selectNextNotification, selectAllNotifications } from '../../store/notifications'
// import { showAlert } from '../../store/alerts'

// const mapStateToProps = createStructuredSelector({
//   // nextNotification: selectNextNotification,
//   // messages: selectAllNotifications,
// })
const mapDispatchToProps = { 
  // removeNotification, 
  // removeAllNotification, 
  // showAlert 
}

export default connect(
  //mapStateToProps, 
  mapDispatchToProps)
