import React, { FC, useState } from 'react'
import { IBlock } from 'WNTR/interfaces'
import { Container, Row, Col, Card, ListGroup, Form, Button, Alert } from 'react-bootstrap'
import moment from 'moment'
import axios from 'axios'
import { deleteCookie } from 'cookies-next'
import router from 'next/router'

const Members: FC<IMembers> = (block) => {

    const [message, setMessage] = useState<string>()
    const [success, setSuccess] = useState<boolean>()
    const handleScroll = () => window.scrollTo({ top: 0, behavior: 'auto' })
    const [tab, setTab] = useState(0)
    const tabs = [
        'My Details',
        'AGM'
    ]

    var controls: { [key: string]: any } = {
        'My Details': MyDetails,
        'AGM': Documents
    };

    const Tab = controls[tabs[tab]]

    const handleLogout = async () => {
        await axios.post('/api/member/logout').then(res => {
            if(!res.data) {
                deleteCookie('WNTR_MBR-ID')
                deleteCookie('WNTR_MBR-TOKEN')
                router.push('/')
            }
        })
    }

    const handleUpdate = async (event: React.FormEvent<IHTMLFormElement>) => {
        event.preventDefault()

        const data: { [key: string]: string } = {}

        var name = event.currentTarget.elements['name']?.value as string
        var email = event.currentTarget.elements['email']?.value as string

        block.properties.map(field => data[field?.alias] = event.currentTarget.elements[field.alias as string]?.value)

        data['name'] = name
        data['email'] = email

        await axios.post('/api/member/update', data).then(res => {
            handleScroll()
            setMessage(res.data.isApproved ? "Update Successful!" : "Error, please try again later.")
            setSuccess(res.data.isApproved)
        })
    }

    return (
        <article id={block.id} className={block.alias}>
            <Container>
                <Row className="mt-4">
                    <Col className={`${block.alias}__col col`} xs={12} lg={6}>
                        <h3 title={`Your ID number is ${block.id}`}>Welcome, {block.name}!</h3>
                    </Col>
                    <Col className={`${block.alias}__col`} xs={12} lg={6}>
                        <p className="text-md-end text-black-50">Last Login: { moment(block.lastLoginDate).format('DD/MM/YYYY [at] HH:ssa') }</p>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col lg={3}>
                        <ListGroup>
                            {tabs.map((item, index) => <ListGroup.Item key={index} active={tab == index} onClick={() => setTab(index)} action>{item}</ListGroup.Item>)}
                            <ListGroup.Item onClick={handleLogout} action>Logout</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col lg={9}>
                        {message ?
                            <Alert variant={success ? 'success' : 'danger'}>{message}</Alert>
                        : null}
                        <Card>
                            <Card.Body>
                                <article>
                                    <h4 className="mb-4">{tabs[tab]}</h4>
                                    <Tab {...block} onHandleUpdate={handleUpdate} />
                                </article>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}

const MyDetails: FC<IMembers> = (block) => {
    
    return (
        <Form id="member-details" onSubmit={block.onHandleUpdate}>
            <input type="hidden" name="id" defaultValue={block.name} />
            <Form.Group className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" defaultValue={block.name} />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" defaultValue={block.email} disabled />
                <Form.Text>To update your email, please contact us.</Form.Text>
            </Form.Group>
            <hr/>
            {block.properties.map((property, index) => {
                return (
                    <Form.Group key={property.key} className="mb-4">
                        <Form.Label>{property.propertyType.name}</Form.Label>
                        <Form.Control type="text" name={property.propertyType.alias} defaultValue={property.values[0]?.editedValue} />
                    </Form.Group>
                )
            })}
            <Button variant="success" type="submit">Update Details</Button>
        </Form>
    )
}

const Documents: FC<IMembers> = (block) => {
    return (
        <div>
            {block.documents.map((document) => {
                return (
                    <a key={document.id} href={block.host + document.path} className="d-flex text-tertiary text-decoration-none border-top py-3" download>
                        <div className="me-auto d-flex flex-column">
                            <p className="mb-0"><strong>{document.name}</strong></p>
                            <small className="text-black-50"><span className="text-uppercase">{document.extension}</span> Document</small>
                        </div>
                        <div className="ms-auto d-flex flex-column">
                            <small><strong>Download</strong></small>
                            <small className="text-black-50">{moment(document.updateDate).format('DD/MM/YYYY')}</small>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

interface IMembers extends IBlock {
    id: string,
    name: string,
    email: string,
    lastLoginDate: Date,
    properties: any[],
    documents: IDocument[],
    host: string,
    onHandleUpdate?: (event: React.FormEvent<IHTMLFormElement>) => void
}

interface IDocument {
    extension: string,
    id: number, 
    name: string,
    path: string,
    updateDate: Date
}

export interface IHTMLFormElement extends HTMLFormElement {
    readonly elements: IHTMLFormControlsCollection;
}

interface IHTMLFormControlsCollection extends HTMLFormControlsCollection {
    [key: string]: HTMLInputElement | any;
}

export default Members