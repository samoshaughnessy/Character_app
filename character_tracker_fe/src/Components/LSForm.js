import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, FormGroup } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function FORM (props) {
  const [info, setInfo] = useState({
    email: '',
    password: '',
    player: true
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const authenticated = useSelector(state => state.authStore.auth)

  useEffect(() => {
    if (authenticated) {
      navigate('/characters')
    }
  }, [authenticated, navigate])

  function handleChange (e) {
    const { name, value } = e.target
    setInfo(prevValue => ({
      ...prevValue,
      [name]: value
    }))
  }

  return (
    <div className='form'>
      <h1>{props.name}</h1>
      <Form>
        <FormGroup className='formGroup'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            name='email'
            id='email'
            placeholder='Enter Email Here'
            value={info.email}
            onChange={e => handleChange(e)}
          />
        </FormGroup>

        <FormGroup className='formGroup'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            id='password'
            placeholder='Enter Password Here'
            value={info.password}
            onChange={e => handleChange(e)}
          />
        </FormGroup>
        <div className='d-grid'>
          <Button
            variant='primary'
            className='submit-btn btn'
            type='submit'
            onClick={e => {
              e.preventDefault()
              if (info.email.length > 0 && info.password.length > 0) {
                dispatch(props.thunk(info.email, info.password, info.player))
              }
            }}
          >
            {props.name}
          </Button>
        </div>
      </Form>
      <Link className='link' to={props.link}>
        {props.linkText}
      </Link>
    </div>
  )
}

export default FORM
