import React from 'react'
import App from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../config/theme'
import { Page } from '../components/common/Page'
import CustomHead from '../components/common/CustomHead'
import { PageTransition } from 'next-page-transitions'
import '../components/common/FancyQuotation.scss'
import '../components/servicesPage/ServicePresentation.scss'
import '../components/homePage/HomeIntro.scss'
import '../components/common/imageSlideshow/fade.scss'
import Head from 'next/head'

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <CustomHead />
        <Head>
          <script type="text/javascript">
            {(function() {
              var _linkedin_partner_id = '1891689'
              try {
                if (window !== undefined) {
                  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []
                  window._linkedin_data_partner_ids.push(_linkedin_partner_id)
                }
              } catch {}
            })()}
          </script>
          <script type="text/javascript">
            {(function() {
              try {
                if (document !== undefined) {
                  var s = document.getElementsByTagName('script')[0]
                  var b = document.createElement('script')
                  b.type = 'text/javascript'
                  b.async = true
                  b.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js'
                  s.parentNode.insertBefore(b, s)
                }
              } catch {}
            })()}
          </script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src="https://px.ads.linkedin.com/collect/?pid=1891689&fmt=gif"
            />
          </noscript>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <div id="app">
            <PageTransition timeout={300} classNames="page-transition">
              <Page background="red">
                <Component {...pageProps} />
              </Page>
            </PageTransition>
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
            #unselectable-text {
              -webkit-user-select: none; /* Safari */
              -moz-user-select: none; /* Firefox */
              -ms-user-select: none; /* IE10+/Edge */
              user-select: none; /* Standard */
            }
            input:-webkit-autofill,
            input:-webkit-autofill:hover,
            input:-webkit-autofill:focus,
            textarea:-webkit-autofill,
            textarea:-webkit-autofill:hover,
            textarea:-webkit-autofill:focus,
            select:-webkit-autofill,
            select:-webkit-autofill:hover,
            select:-webkit-autofill:focus {
              -webkit-text-fill-color: white;
              -webkit-box-shadow: 0 0 0px 1000px transparent inset;
              transition: background-color 5000s ease-in-out 0s;
            }
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          `}</style>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
