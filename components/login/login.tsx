import React, { FC, useState, useContext } from 'react'
import Context from 'WNTR/utils/context'
import { Modal, Button, Form } from 'react-bootstrap'
import { Loading } from 'WNTR/components'
import { IField, IForm, ILogin } from 'WNTR/interfaces'
import axios from 'axios'

const component = {
    name: 'wntrLoginComponent'
}

const Login: FC<ILogin> = (login) => {

    const [show, setShow] = useState(login.show)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <Modal className={component.name} show={show} onHide={handleClose} centered>
            <Form className="wntrFormComponent">
                <Modal.Body>
                    <Form.Group className="mb-3 wntrFormComponent__field" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3 wntrFormComponent__field" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )

}

export default Login