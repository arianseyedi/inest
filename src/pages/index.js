import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ProTip from '../components/ProTip'
import Link from '../components/Link'
import Bottombar from '../components/Bottombar'
import Topbar from '../components/Topbar'
import { makeStyles } from '@material-ui/core/styles'
import Spinner from '../components/spinner/Spinner'
import Contactbar from '../components/Contactbar'
import Partners from '../components/Partners'

const useStyles = makeStyles(theme => ({
  box1bg: {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${'dims.jpeg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    minHeight: '80vh',
  },
  nobg1: {
    height: 'auto',
    minHeight: '50vh',
  },
  nobg2: {
    height: 'auto',
    minHeight: '50vh',
  },
  box3bg: {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${'touchSmart.jpg'})`,
    backgroundSize: ' cover',
    backgroundPosition: 'center',
    minHeight: '800px',
    overflow: 'hidden',
  },
}))

export default function Index() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <div className={classes.box1bg}>
        <Contactbar />
        <Topbar />
        <Container maxWidth="lg">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js example {process.env.customKey}
            </Typography>
            <Link href="/about" color="secondary">
              Go to the about page
            </Link>
            <ProTip />
          </Box>
        </Container>
      </div>
      <div className={classes.nobg1}>
        <Container maxWidth="lg">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js example {process.env.customKey}
            </Typography>
            <Link href="/about" color="secondary">
              Go to the about page
            </Link>
            <ProTip />
          </Box>
        </Container>
      </div>
      <div className={classes.box3bg}>
        <Container maxWidth="lg">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js example {process.env.customKey}
            </Typography>
            <Link href="/about" color="secondary">
              Go to the about page
            </Link>
            <ProTip />
          </Box>
        </Container>
      </div>
      <div className={classes.partners}>
        <Partners />
      </div>
      <div className={classes.nobg2}>
        <Container maxWidth="lg">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Next.js example {process.env.customKey}
            </Typography>
            <Link href="/about" color="secondary">
              Go to the about page
            </Link>
            <ProTip />
          </Box>
        </Container>
      </div>
      <Bottombar />
    </React.Fragment>
  )
}
