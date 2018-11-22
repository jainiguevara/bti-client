import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography, Grid, IconButton } from '@material-ui/core';
import { MonetizationOn, Folder } from '@material-ui/icons'

import PostForm from './../post/PostForm'
import history from'./../../history'

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
  buttons: {
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
  const { classes, title, image, headerColor, template, icon, description, postRoute, reportRoute, form } = props;
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
              { form ?
                <PostForm {...props} route={postRoute} />
              :
                <Typography component="p">
                  {description}
                </Typography>
              }
            </Grid>
          </Grid>
        </CardContent>
        <Divider/>
        <CardActions>
          <Grid container>
            <Grid item xs={6}>
              <Button onClick={() => {
                  history.push(`/${postRoute}`)
                }} className={classes.buttons}>
                <MonetizationOn className={classNames(classes.leftIcon, classes.iconSmall)} />
                POST
              </Button>
            </Grid>
            <Grid item xs={6}>
            <Button onClick={() => {
              history.push(`/${reportRoute}`)
              }} className={classes.buttons}>
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