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
    height: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: props => (props.reverse ? '10%' : 'inherit'),
    },
  },
  icon: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 32,
    },
  },
  title: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 28,
    },
  },
}))

export default function ServicesTop(props) {
  const classes = useStyles(props)
  const handleArry = arr => {
    const res = arr.map((item, index) => {
      if (index == 0) {
        return (
          <Typography variant="body1" key={`text-item ${index}`}>
            {item}
          </Typography>
        )
      } else {
        return (
          <li key={`tex-item ${index}`}>
            <Typography variant="body1">{item}</Typography>
          </li>
        )
      }
    })
    return (
      <Grid container direction="column">
        <Grid item> {res[0]}</Grid>
        <Grid item>
          <ul key={'unique-splice'}>{res.splice(1)}</ul>
        </Grid>
      </Grid>
    )
  }
  const { icon: Icon } = props
  return (
    <div id={props.anchortag}>
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
                    <Icon
                      style={{ fontSize: 136 }}
                      id="hover-child"
                      className={classes.icon}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Grid
                container
                direction="column"
                justify="center"
                // alignItems="stretch"
                className={classes.content}
              >
                <Grid item id="hover-child" style={{ width: 'fit-content' }}>
                  <Typography
                    variant="overline"
                    id="hover-child-text"
                    className={classes.title}
                  >
                    {props.title}
                  </Typography>
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
    </div>
  )
}
