import React, { FC, useState, useContext } from 'react'
import { Modal, Button, Form, Navbar, Alert } from 'react-bootstrap'
import axios from 'axios'
import { setCookie, deleteCookie, hasCookie } from 'cookies-next'
import router from 'next/router'
import Link from 'next/link'

const component = {
    name: 'wntrLoginComponent'
}

const Login: FC<ILogin> = (login) => {

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    const [create, setCreate] = useState(false)

    const [message, setMessage] = useState<string>()

    const [username, setUserName] = useState<string>()
    const [password, setPassword] = useState<string>()

    const handleLogin = async () => {
        await axios.post('/api/member/login', { username: username, password: password }).then(res => {
            if(res.data && res.data.id != null && res.data.token != null) {
                setCookie('WNTR_MBR-ID', res.data.id)
                setCookie('WNTR_MBR-TOKEN', res.data.token)
                handleClose()
                router.push('/beneficiaries')
            } else {
                console.log(res.data)
                setMessage("Incorrect username or password.")
            }
        })
    }

    const handleLogout = async () => {
        await axios.post('/api/member/logout').then(res => {
            if(!res.data) {
                deleteCookie('WNTR_MBR-ID')
                deleteCookie('WNTR_MBR-TOKEN')
                router.push('/')
            }
        })
    }

    const handleCreate = async () => {
        
    }

    return (
        <>
            <Navbar.Toggle className="ms-auto" onClick={ hasCookie('WNTR_MBR-TOKEN') ? handleLogout : handleShow }>{ hasCookie('WNTR_MBR-TOKEN') ? 'Logout' : 'Login' }</Navbar.Toggle>
            { show ? 
                <Modal className={component.name} show={show} onHide={handleClose} centered>
                    <Form className={`${component.name}__form`}>
                        <Modal.Body>
                            { message ? <Alert variant="danger">{message}</Alert> : null }
                            <Form.Group className={`${component.name}__field mb-3`} controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={e => setUserName(e.target.value)} />
                            </Form.Group>
                            <Form.Group className={`${component.name}__field mb-3`} controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            </Form.Group>
                            <small>{ create ? `Already` : `Don't` } have an account? <strong onClick={() => setCreate(!create)}>Click here</strong>.</small>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="success" onClick={create ? handleCreate : handleLogin}>
                                { create ? 'Create Account' : 'Login' }
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            : null }
        </>
    )

}

interface ILogin {
    show?: boolean,
    token?: string
}

interface LoginDetails {
    username: string,
    password: string
}

export default Login