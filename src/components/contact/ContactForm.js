import React, { Component, useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Paper from '@material-ui/core/Paper'
import { Typography, makeStyles, Container } from '@material-ui/core'
import ContactFormContent from './ContactFormContent'
import SuccessMessage from './SuccessMessage'
import ErrorMessage from './ErrorMessage'

import 'isomorphic-fetch'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[700],
    padding: 24,
    [theme.breakpoints.down('md')]: {
      marginBottom: 30,
      // marginTop: -200,
    },
    [theme.breakpoints.up('md')]: {
      // marginTop: -250,
    },
  },
  container: {},
}))

const validationSchema = Yup.object({
  name: Yup.string('Enter a name').required('Name is required'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  services: Yup.array().min(1, 'Please select a service.'),
  description: Yup.string(),
  attachment: Yup.mixed(),
})

export default function ContactForm(props) {
  const classes = useStyles()
  const [submitState, setSubmitState] = useState({ submitted: false, error: false })
  const submit = data => {
    const formData = new FormData()
    console.log('handle submit', data)
    if (data.attachment) {
      formData.append('attachment', data.attachment)
    }
    if (data.name) {
      formData.append('name', data.name)
    }
    if (data.email) {
      formData.append('email', data.email)
    }
    if (data.services) {
      formData.append('services', data.services)
    }
    if (data.description) {
      formData.append('description', data.description)
    }
    fetch('/api/contact', {
      method: 'post',
      // headers: {
      //   // Accept: 'application/json, text/plain, */*',
      //   // 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      // },
      body: formData,
    }).then(res => {
      console.log(res)
      res && res.status === 200
        ? setSubmitState({ submitted: true, error: false })
        : setSubmitState({ submitted: true, error: true })
    })
  }
  const values = {
    name: '',
    email: '',
    services: [],
    description: '',
    attachment: undefined,
  }
  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Paper elevation={6} className={classes.paper}>
          {!submitState.submitted && (
            <React.Fragment>
              <Typography
                variant="body2"
                gutterBottom
                color="textSecondary"
                style={{ marginBottom: 32, textAlign: 'center' }}
              >
                Let us know what services you are interested in along with a description and we
                will get back to you in the next two business days. You can also upload your
                floor plan if you wish to get a more accuare quote.
              </Typography>
              <Formik
                render={props => {
                  return <ContactFormContent {...props} />
                }}
                initialValues={values}
                validationSchema={validationSchema}
                onSubmit={submit}
              />
            </React.Fragment>
          )}
          {submitState.submitted && !submitState.error && <SuccessMessage />}
          {submitState.submitted && submitState.error && <ErrorMessage />}
        </Paper>
      </Container>
    </React.Fragment>
  )
}
