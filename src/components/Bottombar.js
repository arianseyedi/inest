import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
import clsx from 'clsx'

import TransparentLogo from '../resource/TransparentLogo'
import LinkedinButton from './button/LinkedinButton'
import FacebookButton from './button/FacebookButton'
import InstagramButton from './button/InstagramButton'
import CopyrightAndTerms from './CopyrightAndTerms'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    '& svg': {
      margin: theme.spacing(2),
    },
    '& hr': {
      alignSelf: 'stretch',
      height: 'auto',
      marginTop: 60,
      marginBottom: 60,
      width: 2,
    },
  },
  bg: {
    // borderTop: `2px solid ${theme.palette.grey[300]}`,
    borderBottom: `2px solid ${theme.palette.grey[800]}`,
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.grey[900],
  },
  hideOnSize: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  divider: {
    backgroundColor: `${theme.palette.grey[800]}`,
  },
}))

export default function Bottombar() {
  const classes = useStyles()

  return (
    <div className={classes.bg}>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container direction="row" justify="space-around" alignqItems="center">
            <Grid item xs={'auto'}>
              <Grid container direction="column" justify="space-around" alignItems="center">
                <Grid item>
                  <TransparentLogo style={{ fontSize: 180 }} />
                </Grid>
                <Grid item>
                  <LinkedinButton /> <InstagramButton /> <FacebookButton />
                </Grid>
              </Grid>
            </Grid>
            <Divider
              orientation="vertical"
              className={clsx([classes.hideOnSize, classes.divider])}
            />
            <Grid item xs={'auto'}>
              <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
                style={{ height: '100%' }}
              >
                <Grid item>
                  <div>
                    Article: What is the difference between a home improvement and a home
                    enhancement
                  </div>
                </Grid>
                <Grid item>
                  <div>
                    Article: What is the difference between a home improvement and a home
                    enhancement
                  </div>
                </Grid>
                <Grid item>
                  <div>
                    Article: What is the difference between a home improvement and a home
                    enhancement
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Box>
          <CopyrightAndTerms />
        </Box>
      </Container>
    </div>
  )
}
