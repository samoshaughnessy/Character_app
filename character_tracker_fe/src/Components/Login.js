import { loginUserThunk } from '../Redux/auth/actions'
import LoginForm from './LSForm'

function Login () {
  return (
    <div className='landingPage'>
      <LoginForm
        name='Login'
        thunk={loginUserThunk}
        link='/'
        linkText="Don't have an account Sign Up"
      />
    </div>
  )
}

export default Login
