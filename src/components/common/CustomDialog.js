import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

const useStyles = makeStyles(theme => ({
  topRibbon: {
    color: theme.palette.grey[100],
    backgroundColor: theme.palette.grey[900],
  },
  bg: {},
}))
export default function CustomizedDialogs(props) {
  const classes = useStyles()

  return (
    <div>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        fullWidth
        maxWidth="lg"
        // PaperProps={{ style: { borderRadius: 15 } }}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
          className={classes.topRibbon}
        >
          {props.title}
        </DialogTitle>
        <DialogContent className={classes.bg}>
          <div>
            <Typography
              gutterBottom
              variant="overline"
              style={{ fontWeight: 'bold' }}
              color="textPrimary"
            >
              {props.description}
            </Typography>
            <img style={{ width: '100%', height: '100%', borderRadius: 4 }} src={props.img} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
