import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import './ServicePresentation.scss'

const useStyles = makeStyles(theme => ({
  root: {
    // minHeight: '40vh',
  },
  row: {},
  // box1bg: {
  //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.90)), url(${'dims.jpeg'})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center bottom',
  // },
  condHide: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  img: {
    backgroundImage: props =>
      `linear-gradient(rgba(255,255,255, 0.25), rgba(255, 255, 255, 0.25)), url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    },
    [theme.breakpoints.down('sm')]: {
      padding: 24,
    },
    [theme.breakpoints.down('md')]: {
      padding: 48,
    },
    [theme.breakpoints.up('md')]: {
      padding: 80,
    },
  },
}))

export default function ServicesTop(props) {
  const classes = useStyles(props)
  const handleArry = arr => {
    arr.map((item, index) => (
      <Typography variant="body1" key={`item ${index}`}>
        {item}
      </Typography>
    ))
  }
  const { icon: Icon } = props
  return (
    <div id="hover-parent">
      <Grid
        container
        direction={props.reverse ? 'row-reverse' : 'row'}
        justify="space-between"
        className={classes.row}
      >
        <Grid item className={classes.condHide} xs={1} sm={6} md={4}>
          <div
            src={props.image}
            style={{ width: '100%', height: '100%' }}
            className={classes.img}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8} id="hover-child-bg">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            className={classes.content}
            spacing={5}
          >
            <Grid item>
              <Grid container direction={'row'} spacing={2} justify="flex-start">
                <Grid item>
                  <Typography variant="h4" id="hover-child">
                    {props.title}
                  </Typography>
                </Grid>
                {Icon ? (
                  <Grid item>
                    <Icon style={{ fontSize: 36 }} id="hover-child" />
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
            <Grid item>
              {Array.isArray() ? (
                handleArry(props.content)
              ) : (
                <Typography variant="body1">{props.content}</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
