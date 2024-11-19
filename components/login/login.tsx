import React, { FC, useState, useContext } from 'react'
import { Modal, Button, Form, Navbar, Alert } from 'react-bootstrap'
import axios from 'axios'
import { setCookie, deleteCookie, hasCookie } from 'cookies-next'
import { Loading } from 'WNTR/components'
import router from 'next/router'
import Link from 'next/link'

const component = {
    name: 'wntrLoginComponent'
}

const Login: FC<ILogin> = (login) => {

    const [show, setShow] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => {
        setShow(false)
        setMessage("")
        setSubmitted(false)
        setCreate(false)
    }

    const [create, setCreate] = useState(false)

    const [message, setMessage] = useState<string>()

    const [name, setName] = useState<string>()
    const [description, setDescription] = useState<string>()
    const [username, setUserName] = useState<string>()
    const [password, setPassword] = useState<string>()

    const handleLogin = async () => {
        await axios.post('/api/member/login', { username: username, password: password }).then(res => {
            if(res.data && res.data.id != null && res.data.token != null) {
                setCookie('WNTR_MBR-ID', res.data.id)
                setCookie('WNTR_MBR-TOKEN', res.data.token)
                handleClose()
                router.push('/beneficiaries')
            } else if(res.data && res.data.isNotAllowed) {
                setMessage("Please check your emails for the approval email before attempting to login.")
            } else if(res.data && res.data.isLockedOut) {
                setMessage("There seems to be a lock on your account. Please contact support using the form at the bottom of the page.")
            } else {
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
        setSubmitting(true)
        await axios.post('/api/member/create', { name: name, email: username, password: password, description: description, memberTypeAlias: "poutoTopuATrust" }).then(res => {
            setMessage(res.data.message)
            setSubmitted(res.data.success)
            setSubmitting(false)
        })
    }

    return (
        <>
            <Navbar.Toggle className="ms-auto" onClick={ hasCookie('WNTR_MBR-TOKEN') ? handleLogout : handleShow }>{ hasCookie('WNTR_MBR-TOKEN') ? 'Logout' : 'Login' }</Navbar.Toggle>
            { show ? 
                <Modal className={component.name} show={show} onHide={handleClose} centered>
                    <Form className={`${component.name}__form`}>
                        { submitting ? <Loading height="100%" position="absolute" background="transparent" /> : null }
                        <Modal.Body hidden={!submitted}>
                            <Alert variant="success">{message}</Alert>
                        </Modal.Body>
                        <Modal.Body hidden={submitted}>
                            { message ? <Alert variant="danger">{message}</Alert> : null }
                            {create ?
                                <>
                                    <Form.Group className={`${component.name}__field mb-3`} controlId="formBasicName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Full Name" onChange={e => setName(e.target.value)} required />
                                    </Form.Group>
                                    <Form.Group className={`${component.name}__field mb-3`} controlId="formBasicDescription">
                                        <Form.Label>Beneficiary</Form.Label>
                                        <Form.Control type="text" placeholder="Name or trust name registered to the Maori Land Court" onChange={e => setDescription(e.target.value)} required />
                                    </Form.Group>
                                </>
                            : null}
                            <Form.Group className={`${component.name}__field mb-3`} controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={e => setUserName(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className={`${component.name}__field mb-3`} controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                            </Form.Group>
                            <small>{ create ? `Already` : `Don't` } have an account? <strong onClick={() => setCreate(!create)}>Click here</strong>.</small>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Close
                            </Button>
                            <Button hidden={submitted} variant="success" onClick={create ? handleCreate : handleLogin}>
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