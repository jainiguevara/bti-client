import React from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Menu, AppBar, Toolbar, Typography, MenuItem, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/Inbox';
import { AccountCircle } from '@material-ui/icons';

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
  }
})

class Header extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
  const { classes, t, language } = this.props
  const { auth, anchorEl } = this.state
  const open = Boolean(anchorEl)

  const sideList = (
    <div className={classes.list}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
      </List>
    </div>
  );

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
          </Drawer>


          <Typography variant="title" color="inherit" className={classes.flex}>
            BTI COURIER EXPRESS INC. - API
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
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default compose(
  withStyles(styles), 
  // translate()
)(Header)