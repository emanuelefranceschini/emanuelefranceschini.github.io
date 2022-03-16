import { useState, useRef } from 'react'
import { useMyContext } from '../Context'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const Contact = () => {
  const { WrapperSection, formValuesInitialState } = useMyContext()
  const [message, setMessage] = useState({
    type: 'error',
    errorMessage: 'Please fill all required fields',
    successMessage: 'Message Sent! Thanks for getting in touch!',
    show: false
  })
  const [formValues, setFormValues] = useState(formValuesInitialState)
  const form = useRef(null)

  const handleFieldChange = (e) =>
    setFormValues((prevValues) =>
      prevValues.map((field) =>
        field.name === e.target.name
          ? !field.regex
            ? { ...field, value: e.target.value }
            : field.regex.test(e.target.value)
            ? { ...field, value: e.target.value, valid: true }
            : { ...field, value: e.target.value, valid: false }
          : field
      )
    )

  const onSubmit = (e) => {
    e.preventDefault()
    if (formValues.every((field) => field.valid === true)) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVER_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (res) =>
            setMessage((prevMessage) => ({
              ...prevMessage,
              type: 'success',
              show: true
            })),
          (err) =>
            alert('Looks like something went wrong.. Please try again later')
        )
    } else {
      setMessage((prevMessage) => ({
        ...prevMessage,
        type: 'error',
        show: true
      }))
    }
  }
  return (
    <WrapperSection id='contact'>
      <Typography variant='h2'>Contact</Typography>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Card
          sx={{
            padding: (theme) => theme.spacing(6)
          }}
        >
          <Box
            component='form'
            ref={form}
            onSubmit={onSubmit}
            noValidate
            autoComplete='off'
          >
            <Grid
              container
              sx={{ width: '100%' }}
              direction='column'
              rowGap={3}
            >
              {formValues.map((field) => (
                <Grid key={field.name} item width='100%'>
                  <TextField
                    value={field.value}
                    error={
                      field.valid === false &&
                      field.regex !== undefined &&
                      field.value !== ''
                    }
                    color='text'
                    helperText={
                      field.valid === false &&
                      field.regex !== undefined &&
                      field.value !== '' &&
                      `Please enter your ${field.name}`
                    }
                    onChange={handleFieldChange}
                    variant='outlined'
                    label={field.label}
                    name={field.name}
                    required={field.name !== 'company'}
                    multiline={field.name === 'message'}
                    minRows={4}
                    fullWidth={true}
                  />
                </Grid>
              ))}
              <Grid item>
                <Button
                  variant='contained'
                  color='secondary'
                  type='submit'
                  sx={{ fontFamily: 'Audiowide' }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </motion.div>
      <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={message.show}
        onClose={() =>
          setMessage((prevMessage) => ({ ...prevMessage, show: false }))
        }
      >
        <Alert color={message.type} severity={message.type} variant='outlined'>
          {message.type === 'error'
            ? message.errorMessage
            : message.successMessage}
        </Alert>
      </Snackbar>
    </WrapperSection>
  )
}

export default Contact
