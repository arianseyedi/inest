import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, Container } from '@material-ui/core'
import ContactForm from './ContactForm'

const useStyles = makeStyles(theme => ({
  root: {
    // minHeight: '50vh',
  },
  visionInner: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 72,
      marginBottom: 72,
    },
    [theme.breakpoints.down('md')]: {
      marginTop: 88,
      marginBottom: 88,
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: 128,
      marginBottom: 128,
    },
  },
  aboutInner: {
    // marginTop: 210,
    // marginBottom: 110,
  },
}))

export default function ContactsContent(props) {
  const classes = useStyles()

  return (
    <Paper elevation={0} style={{ height: '100%', width: '100%' }}>
      <Container maxWidth="md">
        <Grid container direction="column" className={classes.visionInner}>
          <Grid item>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}
