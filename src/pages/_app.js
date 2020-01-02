import React from 'react'
import App from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../config/theme'
import { Page } from '../components/Page'
import CustomHead from '../components/CustomHead'

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <CustomHead />
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <div id="app">
            <Page background="red">
              <Component {...pageProps} />
            </Page>
          </div>
          <style global jsx>{`
            html,
            body,
            #root,
            #app > div {
              max-width: 100%;
              overflow-x: hidden;
              height: 100vh;
              width: 100%;
            }
            #__next > div {
              max-width: 100%;
              overflow-x: hidden;
              height: 100vh;
              width: 100%;
            }
            body {
              max-width: 100%;
              overflow-x: hidden;
              margin-top: 0px;
              margin-bottom: 0px;
              margin-right: 0px;
              margin-left: 0px;
            }
          `}</style>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
