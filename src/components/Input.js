import { createFactory } from 'micro-form'

const Input = createFactory(
  ({ name, value, valid, validateField, updateField, ...userDefinedProps }) => (
    <div>
      <label htmlFor={name}>{userDefinedProps.label}</label>
      <input
        name={name}
        value={value}
        type={userDefinedProps.type}
        onChange={e => {
          updateField(e.target.value)
          validate()
        }}
      />
    </div>
  )
)

export default Input
