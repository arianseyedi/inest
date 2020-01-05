import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container } from '@material-ui/core'
import './ServicePresentation.scss'

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    width: '100%',
    height: '100%',
    minHeight: '40vh',
  },
  // box1bg: {
  //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.90)), url(${'dims.jpeg'})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center bottom',
  // },
  condHide: {
    // [theme.breakpoints.down('xs')]: {
    //   display: 'none',
    // },
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
  icon: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 32,
    },
  },
}))

export default function ServicesTop(props) {
  const classes = useStyles(props)
  const handleArry = arr => {
    const res = arr.map((item, index) => {
      if (index == 0) {
        return (
          <Typography variant="body1" key={`item ${index}`}>
            {item}
          </Typography>
        )
      } else {
        return (
          <li>
            <Typography variant="body1" key={`item ${index}`}>
              {item}
            </Typography>
          </li>
        )
      }
    })
    return (
      <React.Fragment>
        {res[0]}
        <ul>{res.splice(1)}</ul>
      </React.Fragment>
    )
  }
  const { icon: Icon } = props
  return (
    <Container maxWidth="lg" style={{ height: '100%' }}>
      <div id="hover-parent" className={classes.root}>
        <Grid
          container
          direction={props.reverse ? 'row-reverse' : 'row'}
          justify="space-between"
          className={classes.row}
        >
          <Grid item className={classes.condHide} xs={12} sm={12} md={4}>
            <Grid item style={{ height: '100%' }}>
              <Grid
                container
                justify="center"
                alignItems="center"
                direction="column"
                style={{ height: '100%' }}
              >
                <Grid item>
                  <Icon style={{ fontSize: 136 }} id="hover-child" className={classes.icon} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
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
                  {/* {Icon ? (
                <Grid item>
                  <Icon style={{ fontSize: 36 }} id="hover-child" />
                </Grid>
              ) : null} */}
                </Grid>
              </Grid>
              <Grid item>
                {Array.isArray(props.content) ? (
                  handleArry(props.content)
                ) : (
                  <Typography variant="body1">{props.content}</Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
