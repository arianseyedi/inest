import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TransparentLogo from '../resource/TransparentLogoMini'
import Menu from './Menu'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginBottom: 0,
    padding: '15px 0px 15px 0px',
  },
  bg: {
    // borderTop: `2px solid ${theme.palette.grey[300]}`,
    // borderBottom: `2px solid ${theme.palette.grey[300]}`,
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.grey[900],
    opacity: '50%',
  },
  logo: {
    fontSize: 65,
    marginLeft: theme.spacing(3),
  },
}))

export default function Topbar() {
  const classes = useStyles()

  return (
    <div className={classes.bg}>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item>
              <Grid container direction="column" justify="space-between" alignItems="center">
                <Grid item>
                  <TransparentLogo className={classes.logo} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Menu />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
