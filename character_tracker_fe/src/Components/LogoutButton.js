import { logoutNowThunk } from '../Redux/auth/actions'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'

export default function LogoutButton () {
  let dispatch = useDispatch()
  return (
    <div>
      <Button
        color='info'
        className='logout-btn btn'
        onClick={() => {
          dispatch(logoutNowThunk())
        }}
      >
        Logout
      </Button>
    </div>
  )
}
