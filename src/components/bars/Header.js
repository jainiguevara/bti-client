import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import history from './../../history'

import { Divider, Menu, AppBar, Toolbar, Typography, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
// Drawer Component
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import StoreIcon from '@material-ui/icons/Store'
import HomeIcon from '@material-ui/icons/Home'
import { ExpandLess, ExpandMore, MonetizationOn, Folder } from '@material-ui/icons'

import { logoutUser } from './../../actions/user'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  padBottom: {
    marginBottom: theme.spacing.unit * 3,
  },
  bar: {
    paddingTop: theme.spacing.unit * 1.5,
    paddingBottom: theme.spacing.unit,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
})

class Header extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    openMetrobank: false,
    openChinabank: false
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleLogout = () => {
    this.setState({ anchorEl: null })
    if (localStorage.getItem('token')) {
      logoutUser({ 
        token: localStorage.getItem('token') 
      }, this.props.dispatch).then(() => {}).catch(() => {})
    }
    localStorage.removeItem('exp')
    localStorage.removeItem('token')
    history.push('/login')
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  handleClick = bank => () => {
    if (bank === 'openChinabank') {
      this.setState(state => ({ [bank]: !state.openChinabank }))
    } else if (bank === 'openMetrobank') {
      this.setState(state => ({ [bank]: !state.openMetrobank }))
    }
  }

  render() {
  const { classes, t, language } = this.props
  const { auth, anchorEl } = this.state
  const open = Boolean(anchorEl)

  const sideList = (
    <div className={classes.list}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
    </div>
  )

    return (
      <AppBar position="static" color="default" className={classes.padBottom}>
        <Toolbar>
          <IconButton 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="Menu"
            onClick={this.toggleDrawer('left', true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              {sideList}
            </div>
            <Divider />
            <ListItem button onClick={this.handleClick('openChinabank')}>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText inset primary="Chinabank" />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openChinabank} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button
                  className={classes.nested}
                  onClick={this.toggleDrawer('left', false)}
                  onKeyDown={this.toggleDrawer('left', false)}
                >
                  <ListItemIcon>
                    <MonetizationOn />
                  </ListItemIcon>
                  <ListItemText inset primary="Post" />
                </ListItem>
                <ListItem button
                  className={classes.nested}
                  onClick={this.toggleDrawer('left', false)}
                  onKeyDown={this.toggleDrawer('left', false)}
                >
                  <ListItemIcon>
                    <Folder />
                  </ListItemIcon>
                  <ListItemText inset primary="Report" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={this.handleClick('openMetrobank')}>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText inset primary="Metrobank" />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openMetrobank} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button
                  className={classes.nested}
                  onClick={this.toggleDrawer('left', false)}
                  onKeyDown={this.toggleDrawer('left', false)}
                >
                  <ListItemIcon>
                    <MonetizationOn />
                  </ListItemIcon>
                  <ListItemText inset primary="Post" />
                </ListItem>
                <ListItem button
                  className={classes.nested}
                  onClick={this.toggleDrawer('left', false)}
                  onKeyDown={this.toggleDrawer('left', false)}
                >
                  <ListItemIcon>
                    <Folder />
                  </ListItemIcon>
                  <ListItemText inset primary="Report" />
                </ListItem>
              </List>
            </Collapse>
          </Drawer>

          <Typography variant="title" color="inherit" className={classes.flex}>
            BTI COURIER EXPRESS INC.
          </Typography>

          <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <Divider />
                <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default compose(
  connect(),
  withStyles(styles), 
  // translate()
)(Header)