import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux';
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import FormContainer from "../FormContainer/FormContainer";
import {getProfile, updateProfile} from '../../actions/ProfileAction'
import { useEffect } from "react";

const ProfileScreen = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const {loading, error, user} = useSelector((state) => state.getProfileReducer)

    const {success} = useSelector((state) => state.updateProfileReducer)

    const {userInfo} = useSelector((state) => state.authReducer)
    
    useEffect(() => {
        if(!user.username){
            dispatch(getProfile(userInfo.id))
        }else{
            setUsername(user.username)
        }
    }, [dispatch, user, userInfo])

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword ){
            setMessage("Passwords do not match")
        }else{
            dispatch(updateProfile({id: user.id, username, password}))
        }
    }



    return (
        <Row>
            <Col md={3}>
            <h2>Profile</h2>
            {error && <Message variant='danger'>{error}</Message>}
            {message && <Message variant='danger'>{message}</Message>}
            {success && <Message variant='success'>Profile Updated Successfully</Message>}
            {loading && <Loader/>}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="username" style={{marginTop: '1rem'}}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"
                    value = {username} onChange={(e) => setUsername(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="password" style={{marginTop: '1rem'}}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"
                    value = {password} onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="confirmPassword" style={{marginTop: '1rem'}}>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password"
                    value = {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button style={{marginTop: '1rem'}} type="submit" variant="primary">
                    Update
                </Button>
            </Form>
            </Col>
            <Col md={9}>
                <h2>My Orders</h2>
            </Col>
        </Row>
    )
}


export default ProfileScreen