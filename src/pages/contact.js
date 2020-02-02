import React from 'react'
import clsx from 'clsx'
import Bottombar from '../components/common/Bottombar'
import { makeStyles } from '@material-ui/core/styles'
import ContactTop from '../components/contact/ContactTop'
import ContactContent from '../components/contact/ContactContent'
import { Grid } from '@material-ui/core'
import ContactFormFormik from '../components/contact/ContactFormContent'

const useStyles = makeStyles(theme => ({
  root: {},
}))

export default function Services() {
  const classes = useStyles()
  return (
    <Grid container style={{ height: '100%' }}>
      <Grid item xs={12}>
        <ContactTop />
      </Grid>
      <Grid item xs={12}>
        <ContactContent />
      </Grid>
      <Grid item xs={12}>
        <div>
          <Bottombar />
        </div>
      </Grid>
    </Grid>
  )
}
