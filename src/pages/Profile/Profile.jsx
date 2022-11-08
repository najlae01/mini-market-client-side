import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ProfileScreen from '../../components/ProfileScreen/ProfileScreen'

const Profile = () => {
  return (
    <>
    <Header/>
    <Container style={{marginTop: '2rem'}}>
        <ProfileScreen/>
    </Container>  
    <Footer/>
    </>
  )
}

export default Profile