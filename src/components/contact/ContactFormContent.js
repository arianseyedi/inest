import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import NameIcon from '@material-ui/icons/SupervisorAccount'
import EmailIcon from '@material-ui/icons/Email'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { Chip, Grid, Typography, Input, InputLabel } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import DescriptionIcon from '@material-ui/icons/Description'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      // width: 200,
    },
  },
  error: {
    color: theme.palette.error.main,
  },
}))

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />
const servicesList = [
  { title: 'Lighting Automation', code: 0 },
  { title: 'Security System', code: 1 },
  { title: 'Security Camera', code: 2 },
  { title: 'Central Vacuum', code: 3 },
  { title: 'Electrical', code: 4 },
  { title: 'Sound System', code: 5 },
  { title: 'Climate Control', code: 6 },
  { title: 'Home Theatre', code: 7 },
  { title: 'Smart Blinds', code: 8 },
  { title: 'Other', code: 9 },
]

export default function ContactFormContent(props) {
  const classes = useStyles()
  const {
    values: { name, email, description },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
  } = props

  const handleServiceChange = (e, setFieldValue) => {
    const lengthBefore = props.values.services.length
    const services = props.values.services
    const allBut = services.filter(s => s !== e.target.dataset.optionIndex)
    if (allBut.length < lengthBefore) {
      setFieldValue('services', allBut)
    } else {
      services.push(e.target.dataset.optionIndex)
      setFieldValue('services', services)
    }
  }
  const handleResetServices = () => {
    props.setFieldValue('services', [])
  }
  return (
    <form onSubmit={handleSubmit} style={{ height: '100%', width: '100%' }}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        spacing={2}
        style={{ height: '100%', width: '100%' }}
      >
        <Grid item>
          <TextField
            color="secondary"
            name="name"
            required
            helperText={touched.name ? errors.name : ''}
            error={Boolean(errors.name)}
            label="Name"
            variant="outlined"
            placeholder="Your Name"
            value={name}
            onChange={handleChange}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NameIcon />
                </InputAdornment>
              ),
              style: { color: 'white' },
            }}
          />
          <Typography
            className={classes.error}
            style={{ textAlign: 'left' }}
            variant="caption"
          >
            {Boolean(errors.name) ? errors.name : ''}
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            color="secondary"
            name="email"
            required
            variant="outlined"
            helperText={touched.email ? errors.email : ''}
            error={Boolean(errors.email)}
            label="Email"
            placeholder="Your Email"
            fullWidth
            value={email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
              style: { color: 'white' },
            }}
          />
          <Typography
            className={classes.error}
            style={{ textAlign: 'left' }}
            variant="caption"
          >
            {Boolean(errors.email) ? errors.email : ''}
          </Typography>
        </Grid>
        <Grid item>
          <Autocomplete
            onInputChange={handleResetServices}
            renderTags={e => {
              return e.map(i => <Chip key={i.title} label={i.title} style={{ margin: 1 }} />)
            }}
            multiple
            onChange={e => {
              if (e.target.innerText) handleServiceChange(e, props.setFieldValue)
            }}
            id="services"
            required={true}
            options={servicesList}
            InputProps={{ style: { color: 'white' } }}
            disableCloseOnSelect
            getOptionLabel={option => option.title}
            renderOption={(option, { selected }) => (
              <React.Fragment>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </React.Fragment>
            )}
            style={{ width: '100%' }}
            renderInput={params => (
              <TextField
                color="secondary"
                {...params}
                variant="outlined"
                label="Services"
                placeholder="Service"
                fullWidth
              />
            )}
          >
            {e => console.log(e)}
          </Autocomplete>
          <Typography
            variant="caption"
            className={classes.error}
            style={{ textAlign: 'left' }}
          >
            {Boolean(errors.services) ? errors.services : ''}
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            color="secondary"
            name="description"
            multiline
            rowsMax="4"
            variant="outlined"
            helperText={touched.description ? errors.description : ''}
            error={Boolean(errors.description)}
            label="Description"
            placeholder="Details"
            fullWidth
            value={description}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon />
                </InputAdornment>
              ),
              style: { color: 'white' },
            }}
          />
          <Typography
            variant="caption"
            className={classes.error}
            style={{ textAlign: 'left' }}
          >
            {Boolean(errors.description) ? errors.description : ''}
          </Typography>
        </Grid>
        <Grid item>
          <InputLabel shrink style={{ textAlign: 'left' }}>
            Attachment
          </InputLabel>
          <Input
            id="attachment"
            style={{ width: '100%' }}
            inputProps={{ style: { color: 'white' } }}
            variant="outlined"
            type="file"
            color="secondary"
            placeholder="Attachment"
            label="A"
            onChange={event => {
              if (event.currentTarget.files && event.currentTarget.files.length > 0) {
                var extension = event.currentTarget.files[0].type
                if (extension.startsWith('image/') || extension === 'application/pdf') {
                  props.setFieldValue('attachment', event.currentTarget.files[0])
                } else {
                  props.setFieldError('attachment', `Unacceptable file type: ${extension}`)
                }
              }
            }}
          />
          <Typography
            variant="caption"
            className={classes.error}
            style={{ textAlign: 'left' }}
          >
            {Boolean(errors.attachment) ? errors.attachment : ''}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!isValid}
            style={{ marginTop: 24 }}
            color="secondary"
          >
            Get a Quote
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
