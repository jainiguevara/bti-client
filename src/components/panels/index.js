import React from 'react'
import Media from 'react-media'
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { metrobank, chinabank } from './../../statics/bank-data'
import PanelCard from './PanelCard'

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  mobileGrid: {
    padding: 10
  }
});

const Panels = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
        <Media query={{ maxWidth: '1499px' }}>
          {
            matches =>
            matches ?
            (
              <Grid className={classes.mobileGrid} container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <PanelCard {...chinabank} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <PanelCard {...metrobank} />
                </Grid>
              </Grid>
            ) : (
              <Media query={{ maxWidth: '1024px' }}>
              {
                matches =>
                matches ?
                (
                  <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                      <PanelCard {...chinabank} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <PanelCard {...metrobank} />
                    </Grid>
                  </Grid>
                ) : (
                  <Grid container spacing={24}>
                    <Grid item xs={6} sm={3}></Grid>
                    <Grid item xs={6} sm={3}>
                      <PanelCard {...chinabank} />
                    </Grid>
                    <Grid item xs={6} sm={3}>
                      <PanelCard {...metrobank} />
                    </Grid>
                    <Grid item xs={6} sm={3}></Grid>
                  </Grid>
                )
              }
              </Media>
            )
          }
        </Media>
    </div>
  )
}

Panels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panels);
