import { signupUserThunk } from '../Redux/auth/actions'

import Form from './LSForm'

function Signup () {
  return (
    <div className='landingPage'>
      <Form
        name='Sign Up'
        thunk={signupUserThunk}
        link='login'
        linkText='Already have an account? Sign In'
      />
    </div>
  )
}

export default Signup
