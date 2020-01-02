import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import grey from '@material-ui/core/colors/grey'
// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiDivider: {
      root: {
        // Dividers not consistent when zooming.
        // https://github.com/mui-org/material-ui/issues/14815
        // marginTop: 1,
      },
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#FFD300',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      secondary: grey[300],
      primary: grey[900],
    },
  },
})

theme.typography.h6 = {
  '@media (max-width:600px)': {
    fontSize: '0.75rem',
    fontWeight: 'normal',
  },
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  // [theme.breakpoints.down('s')]: {
  //   fontSize: 11,
  // },
  // [theme.breakpoints.up('s')]: {
  //   fontSize: 18,
  // },
}

export default theme
