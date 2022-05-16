export const formValuesInitialState = [
  {
    name: 'full name',
    label: 'Full Name',
    value: '',
    valid: false,
    regex: /^[a-z\s]+$/i
  },
  { name: 'company', label: 'Company', value: '', valid: true },
  {
    name: 'email',
    label: 'Email',
    value: '',
    valid: false,
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  },
  {
    name: 'message',
    label: 'Message',
    value: '',
    valid: false,
    regex: /^(?!\s*$).+/
  }
]
