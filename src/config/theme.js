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
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      secondary: grey[300],
      primary: grey[800],
    },
  },
})

export default theme
