import { createForm } from 'micro-form'

const Form = createForm(({ state, valid, children, validateForm, getPayload, resetForm }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (validateForm()) {
          myApi(getPayload()).then(() => {
            resetForm()
          })
        }
      }}
    >
      {children}
    </form>
  )
})

export default Form
