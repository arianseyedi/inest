import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import TransparentLogo from '../../resource/TransparentLogoMini'
import Menu from './Menu'
import { Container } from '@material-ui/core'
import LinkedinButton from './button/LinkedinButton'
import FacebookButton from './button/FacebookButton'
import InstagramButton from './button/InstagramButton'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    margin: 0,
    padding: '15px 0px 15px 0px',
  },
  bg: {
    color: theme.palette.text.secondary,
    background: 'rgba(24,24,24, .3)',
  },
  logo: {
    fontSize: 90,
    marginLeft: theme.spacing(0),
  },
  hover: {
    '&:hover': {
      color: 'white',
    },
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
                  <a href="/">
                    <TransparentLogo className={classes.logo} />
                  </a>
                </Grid>
                <Grid item>
                  <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                      <LinkedinButton
                        href="https://www.linkedin.com/company/inestt/"
                        target="_blank"
                        style={{ fontSize: 16, color: grey[500] }}
                        className={classes.hover}
                      />
                    </Grid>

                    <Grid item>
                      <InstagramButton
                        href="https://www.instagram.com/inest.ca/?hl=en"
                        target="_blank"
                        style={{ fontSize: 16, color: grey[500] }}
                        className={classes.hover}
                      />
                    </Grid>
                    <Grid item>
                      <FacebookButton
                        href="https://www.facebook.com/INest-114704206654630/"
                        target="_blank"
                        style={{ fontSize: 16, color: grey[500] }}
                        className={classes.hover}
                      />
                    </Grid>
                  </Grid>
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
