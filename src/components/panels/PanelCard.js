import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography, Grid, IconButton } from '@material-ui/core';
import { MonetizationOn, Folder } from '@material-ui/icons'

const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    color: 'white'
  },
  grid: {
    padding: 10
  },
  icon: {
    fontSize: 32,
  },
  iconText: {
    color: 'primary',
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
})

const PanelCard = props => {
  const { classes, title, image, headerColor, icon, description, postRoute, reportRoute } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require(`./../../images/${image}`)}
          title={title}
        />
        <CardContent 
          style={{
            backgroundColor: `${headerColor}`,
            paddingTop: 20
          }}
        >
          <Typography className={classes.title} gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
        </CardContent>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <Typography component="p">
                Click on the buttons below for posting and generation of reports specifically for this bank.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Divider/>
        <CardActions>
          <Grid container>
            <Grid item xs={6}>
              <Button href={postRoute} className={classes.button}>
                <MonetizationOn className={classNames(classes.leftIcon, classes.iconSmall)} />
                POST
              </Button>
            </Grid>
            <Grid item xs={6}>
            <Button href={reportRoute} className={classes.button}>
              <Folder className={classNames(classes.leftIcon, classes.iconSmall)} />
              REPORT
            </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );
}

PanelCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PanelCard);