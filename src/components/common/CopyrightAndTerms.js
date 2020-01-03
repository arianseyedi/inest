import React from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.grey[600],
    backgroundColor: theme.palette.grey[900],
    padding: theme.spacing(1),
  },
}))

const CopyrightAndTerms = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="subtitle2" align="center">
        {'Copyright © '}
        <MuiLink color="inherit" href="#">
          Inest.ca
        </MuiLink>{' '}
        {new Date().getFullYear()}
        {' | '}
        <MuiLink color="inherit" href="#">
          Terms of Service
        </MuiLink>
        {' | '}
        <MuiLink color="inherit" href="#">
          Privacy Policy
        </MuiLink>
      </Typography>
    </div>
  )
}

export default CopyrightAndTerms
