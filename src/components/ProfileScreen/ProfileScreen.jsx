import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {Form, Button, Row, Col, Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux';
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import FormContainer from "../FormContainer/FormContainer";
import {getProfile, updateProfile} from '../../actions/ProfileAction'
import { useEffect } from "react";
import {addClient, updateClient, getClientByUserId} from '../../actions/ClientAction'
import { addFournisseur, updateFournisseur, getFournisseurByUserId } from "../../actions/FournisseurAction";
import { listCommandeByClient } from "../../actions/CartAction";
import { LinkContainer } from "react-router-bootstrap";

const ProfileScreen = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const {loading, error, user} = useSelector((state) => state.getProfileReducer)

    const {success} = useSelector((state) => state.updateProfileReducer)

    const {userInfo} = useSelector((state) => state.authReducer)

    const [clientData, setClientData] = useState({nomClient:"", prenomClient: "", adresse:"", telephone:"", villeClient:"", userId:userInfo})
    const [vendorData, setVendorData] = useState({nomFournisseur:"", villeFournisseur: "", telephoneFournisseur:"", userId:userInfo})

    console.log(userInfo.fournisseur)

    const {client} = useSelector((state) => state.getClientByUserReducer)

    const {fournisseur} = useSelector((state) => state.getFournisseurByUserReducer)

    console.log(client.codeClient);
    const isVendor = userInfo.fournisseur


    
    useEffect(() => {
        if(!isVendor){
            dispatch(getClientByUserId(userInfo.id))
        }else{
            dispatch(getFournisseurByUserId(userInfo.id))
        }

    }, [userInfo])

    useEffect(() => {
        if(!user.username){
            dispatch(getProfile(userInfo.id))
        }else{
            setUsername(user.username)
        }
    }, [dispatch, user, userInfo])

    useEffect(() => {
        if(!isVendor)
            dispatch(listCommandeByClient(client.codeClient))
    }, [client])

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword ){
            setMessage("Passwords do not match")
        }else{
            dispatch(updateProfile({id: user.id, username, password}))
        }
        if(isVendor === false){
            if(client.codeClient != null){
                dispatch(updateClient(client.codeClient ,clientData))
            }else{
                dispatch(addClient(clientData))
            }
        }else{
            if(fournisseur != null){
                dispatch(updateFournisseur(fournisseur.codeFournisseur ,vendorData))
            }else{
                dispatch(addFournisseur(vendorData))
            }
        }
        
    }

    const handleChange = (e) => {
        setClientData({...clientData, [e.target.name]: e.target.value})
        
    }


    const handleChangeV = (e) => {
        setVendorData({...vendorData, [e.target.name]: e.target.value})
        
    }

    const { loading: loadingOrders, error: errorOrders, orders } = useSelector((state) => state.listCommandeReducer)

    const {loading: loadingClient, error: errorClient, success: successClient} = useSelector((state) => state.clientReducer)

    const {loading: uploadingClient, error: errorUpdateClient, success: successUpdateClient} = useSelector((state) => state.updateClientReducer)


    const {loading: loadingFournisseur, error: errorFournisseur, success: successFournisseur} = useSelector((state) => state.fournisseurReducer)

    const {loading: uploadingFournisseur, error: errorUpdateFournisseur, success: successUpdateFournisseur} = useSelector((state) => state.updateFournisseurReducer)

    return (
        <Row>
            <Col md={3}>
            <h2>Profile</h2>
            {error && <Message variant='danger'>{error}</Message>}
            {message && <Message variant='danger'>{message}</Message>}
            {success && <Message variant='success'>Profile Updated Successfully</Message>}
            {loading && <Loader/>}

            {errorClient && <Message variant='danger'>{errorClient}</Message>}
            {successClient && <Message variant='success'>Saved Successfully</Message>}
            {loadingClient && <Loader/>}

            {errorUpdateClient && <Message variant='danger'>{errorUpdateClient}</Message>}
            {successUpdateClient && <Message variant='success'>Updated Successfully</Message>}
            {uploadingClient && <Loader/>}

            {errorFournisseur && <Message variant='danger'>{errorFournisseur}</Message>}
            {successFournisseur && <Message variant='success'>Saved Successfully</Message>}
            {loadingFournisseur && <Loader/>}

            {errorUpdateFournisseur && <Message variant='danger'>{errorUpdateFournisseur}</Message>}
            {successUpdateFournisseur && <Message variant='success'>Updated Successfully</Message>}
            {uploadingFournisseur && <Loader/>}
            
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
                {(isVendor === false) &&
                <>
                    <Form.Group controlId="nomClient" style={{marginTop: '1rem'}}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last name"
                        name='nomClient'
                        value = {clientData.nomClient} onChange={handleChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="prenomClient" style={{marginTop: '1rem'}}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First name"
                    name='prenomClient'
                    value = {clientData.prenomClient} onChange={handleChange}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="adresse" style={{marginTop: '1rem'}}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address"
                    name='adresse'
                    value = {clientData.adresse} onChange={handleChange}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="telephone" style={{marginTop: '1rem'}}>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone"
                    name='telephone'
                    value = {clientData.telephone} onChange={handleChange}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="villeClient" style={{marginTop: '1rem'}}>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter city"
                    name='villeClient'
                    value = {clientData.villeClient} onChange={handleChange}>
                    </Form.Control>
                </Form.Group>
            </>
                }
                {(isVendor) &&
                <>
                    <Form.Group controlId="nomFournisseur" style={{marginTop: '1rem'}}>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name"
                        name='nomFournisseur'
                        value = {vendorData.nomFournisseur} onChange={handleChangeV}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="villeFournisseur" style={{marginTop: '1rem'}}>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" placeholder="Enter city"
                        name='villeFournisseur'
                        value = {vendorData.villeFournisseur} onChange={handleChangeV}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="telephoneFournisseur" style={{marginTop: '1rem'}}>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone"
                        name='telephoneFournisseur'
                        value = {vendorData.telephoneFournisseur} onChange={handleChangeV}>
                        </Form.Control>
                    </Form.Group>
                    
            </>
                }
                <Button style={{marginTop: '1rem'}} type="submit" variant="primary">
                    Update
                </Button>
            </Form>
            </Col>
            <Col md={9}>
                {isVendor === false &&
                <h2>Orders</h2>}
                {isVendor=== false & loadingOrders ? (
                    <Loader />
                  ) : errorOrders ? (
                    <Message variant='danger'>{errorOrders}</Message>
                  ) : (
                    <Table striped bordered hover responsive className='table-sm'>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>DATE</th>
                          <th>PAID</th>
                          <th>DELIVERED</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr key={order.numeroCommande}>
                            <td>{order.numeroCommande}</td>
                            <td>{order.dateCommande}</td>
                            <td>
                              
                                <i className='fas fa-times' style={{ color: 'red' }}></i>
                            
                            </td>
                            <td>
                              <i className='fas fa-times' style={{ color: 'red' }}></i>
                              
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  )}
                {isVendor &&
                <h2>Shippings</h2>
                }
            </Col>
        </Row>
    )
}


export default ProfileScreen