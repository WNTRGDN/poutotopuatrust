import React, { FC, useState } from 'react'
import { IBlock } from 'WNTR/interfaces'
import { Container, Row, Col, Card, ListGroup, Form, Button } from 'react-bootstrap'
import moment from 'moment'
import axios from 'axios'
import { deleteCookie } from 'cookies-next'
import router from 'next/router'

const Members: FC<IMembers> = (block) => {

    const [tab, setTab] = useState(0)
    const tabs = [
        'My Details'
    ]

    const handleLogout = async () => {
        await axios.post('/api/member/logout').then(res => {
            if(!res.data) {
                deleteCookie('WNTR_MBR-ID')
                deleteCookie('WNTR_MBR-TOKEN')
                router.push('/')
            }
        })
    }

    const handleUpdate= async (event: React.FormEvent<IHTMLFormElement>) => {
        event.preventDefault()

        const data: { [key: string]: string } = {}

        var name = event.currentTarget.elements['name']?.value as string
        var email = event.currentTarget.elements['email']?.value as string

        block.properties.map(field => data[field?.alias] = event.currentTarget.elements[field.alias]?.value)

        await axios.post('/api/member/update', data, { headers: { 'name': name, 'email': email } }).then(res => {
            console.log(res)
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
                        <Card>
                            <Card.Body>
                                <article>
                                    <h4 className="mb-4">My Details</h4>
                                    <Form id="member-details" onSubmit={handleUpdate}>
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
                                                    <Form.Control type="text" name={property.propertyType.alias} defaultValue={property.values[0].editedValue} />
                                                </Form.Group>
                                            )
                                        })}
                                        <Button variant="success" type="submit">Update Details</Button>
                                    </Form>
                                </article>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </article>
    )
}

interface IMembers extends IBlock {
    id: string,
    name: string,
    email: string,
    lastLoginDate: Date,
    properties: any[]
}

export interface IHTMLFormElement extends HTMLFormElement {
    readonly elements: IHTMLFormControlsCollection;
}

interface IHTMLFormControlsCollection extends HTMLFormControlsCollection {
    [key: string]: HTMLInputElement | any;
}

export default Members