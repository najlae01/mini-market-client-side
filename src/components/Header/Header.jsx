import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {logout} from '../../actions/AuthAction'

const Header = () => {
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.authReducer.userInfo)

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/home">
            <Navbar.Brand>MyShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/cart">
            <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </LinkContainer>
            {userInfo ? (
              <NavDropdown title={userInfo.username} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) :
            <LinkContainer to="/auth">
            <Nav.Link><i className='fas fa-user'></i> Sign In</Nav.Link>
            </LinkContainer>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header