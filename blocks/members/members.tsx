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
        'AGM',
        'Strategy',
        'Workstreams',
        'Grants'
    ]

    var controls: { [key: string]: any } = {
        'My Details': MyDetails,
        'AGM': Documents,
        'Strategy': Strategy,
        'Workstreams': Workstreams,
        'Grants': Grants
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

const Strategy: FC<IMembers> = (block) => {
    return (
        <>
            <h5>Vision</h5>
            <p><em>Shared by all</em></p>
            <p>Our people and communities are thriving, prosperous and sustained by intergenerational wellbeing.</p>
            
            <hr/>

            <h5>Purpose</h5>
            <p><em>The Trusts specific role</em></p>
            <p>Pouto Tōpū A Trust serves as the economic foundation for our shareholders, dedicated to investing in, managing, and growing our assets to ensure the prosperity of our people and communities.</p>
            
            <hr/>

            <h5>Values</h5>
            <p><em>The principles that infuse all our work.</em></p>
                <p className="mb-0"><strong>Kaitiakitanga</strong> - We are guardians for the next generations.</p>
                <p className="mb-0"><strong>Tikanga </strong>- Customs &amp; values keep us strong and focused.</p>
                <p className="mb-0"><strong>Manaakitanga</strong> - Caring for others.</p>
                <p className="mb-0"><strong>Whakapapa</strong> - Our connection enriches us.</p>
                <p className="mb-0"><strong>Rangatiratanga </strong>- Pave the way.</p>
                <p className="mb-0"><strong>Kotahitanga</strong>- We act collectively and stand united.</p>
        </>
    )
}

const Workstreams: FC<IMembers> = (block) => {
    return (
        <>
            <h5>Commercial</h5>
            <p><strong>Long-term Goal</strong></p>
            <p>Our diverse, profitable and environmentally-sound whenua-based enterprises are providing local employment and career pathways for our people.</p>
            <p><strong>Strategic priorities for next 3 years</strong></p>
            <ul>
                <li>Adding value to our red meat business and advancing our horticulture development opportunities.</li>
                <li>Continue to manage our dairy, forestry and apiculture businesses at their current levels of investment.</li>
            </ul>

            <hr />

            <h5>Community</h5>
            <p><strong>Long-term Goal</strong></p>
            <p>Pouto is a vibrant and attractive community to live in, well supported by recreation, cultural and social activities.</p>
            <p><strong>Strategic priorities for next 3 years</strong></p>
            <ul>
                <li>Continue our existing small, long-term and regular commitments to community projects.</li>
                <li>Explore options for papakainga housing, Rangitane Hall upgrade and the wharenui development as well as to the provision of educational scholarships.</li>
            </ul>

            <hr />

            <h5>Governance and Management</h5>
            <p><strong>Long-term Goal</strong></p>
            <p>The Pouto Tōpū A Trust works to a high level of professional excellence, is supported by its shareholders, is highly trusted and is effectively sustained across generations.</p>
            <p><strong>Strategic priorities for next 3 years</strong></p>
            <ul>
                <li>Identify future trustees and their training needs.</li>
                <li>Develop plans, policies and decision-making frameworks.</li>
                <li>Develop an upskilling and mentoring plan for the Trust.</li>
            </ul>
        </>
    )
}

const Grants: FC<IMembers> = (block) => {
    return (
        <>
            <h5>Individual Tertiary Education Grant</h5>
            <p><strong>To ensure your application is processed please follow the guidelines below. Applications from businesses will not be considered.</strong></p>
            <ol>
                <li>To apply for a grant, you must be a Pouto Tōpū A Trust registered shareholder and/or beneficiary, and you must reside in New Zealand.</li>
                <li>Only completed and signed application forms will be accepted. This can be sent by email, or post. Our email address and postal address are listed below.</li>
                <li>You must provide confirmation of your enrolment and/or confirmation of the courses you are studying this year endorsed by the education institution you are enrolled in.</li>
                <li>Pouto Tōpū A Trust does not accept any responsibility for lost or delayed applications caused by incorrect mailing instructions or delays in delivery.</li>
                <li>You must advise Pouto Tōpū A Trust of any changes to your application i.e., withdrawal from institute or course, change of course etc. All changes must be advised in writing.</li>
                <li>Incomplete or late applications will not be considered.</li>
                <li>Funds will only be paid into a New Zealand bank account.</li>
                <li>Completed signed applications must be received by Pouto Tōpū A Trust before the closing date deadline.</li>
                <li>All applicants (successful and unsuccessful) will be notified in writing within 4 weeks after the closing date.</li>
                <li><strong>IMPORTANT:</strong> These grant funds are for fees only and will only be paid upon successful completion of the vocational course and/or year.</li>
            </ol>
            <h4>CLOSING DATE</h4>
            <p>APPLICATIONS CLOSE AT 4:00PM, FRIDAY 9th May 2025.</p>
            <p>The close-off date and time are firm. Any applications received after this date and time will not be considered.</p>
            <p><strong><a href="https://www.wntr.com.au/media/pozflsuo/2025-ptat-tertiary-education-grant-application.pdf" download>CLICK HERE TO DOWNLOAD THE FORM</a></strong></p>
            <hr />
            <p>Return your application and support documentation before 4.00pm Friday 9th May 2025</p>
            <p><strong>By Email:</strong> admin@ptat.co.nz</p>
            <p><strong>By Post:</strong><br/>Pouto Tōpū A Trust<br/>PO Box 307<br/>Dargaville 0310</p>
        </>
    )
}

interface IMembers extends IBlock {
    id: string,
    name: string,
    email: string,
    lastLoginDate: Date,
    properties: any[],
    documents: IDocument[],
    strategy: IBlock[],
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