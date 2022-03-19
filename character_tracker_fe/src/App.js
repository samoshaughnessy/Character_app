import CharacterList from './Components/Character'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Routes, BrowserRouter, Link, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Navbar, NavItem } from 'react-bootstrap'
import React from 'react'
import LogoutButton from './Components/LogoutButton'

function RequireAuth ({ children, redirectTo }) {
  const isAuthenticated = useSelector(state => state.authStore.auth)
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

function App () {
  const isAuthenticated = useSelector(state => state.authStore.auth)

  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar bg='dark'>
          {isAuthenticated ? (
            <Container>
              <NavItem>
                <LogoutButton />
              </NavItem>
            </Container>
          ) : (
            <Container>
              <NavItem>
                <Link to='/'>Signup</Link>
              </NavItem>
              <NavItem>
                <Link to='/login'>Login</Link>
              </NavItem>
              <NavItem>
                <Link to='/characters'>Characters</Link>
              </NavItem>
            </Container>
          )}
        </Navbar>

        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route
            path='/characters'
            element={
              <RequireAuth redirectTo='/login'>
                <CharacterList />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
