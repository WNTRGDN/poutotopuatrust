import React, { FC, useState, useContext, useEffect } from 'react'
import Context from 'WNTR/utils/context'
import { IMenu, ILink } from 'WNTR/interfaces'
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap'
import { Login } from 'WNTR/components'
import Link from 'next/link'
import Image from 'next/image'

const component = {
    name: 'wntrHeaderComponent'
}

const Header: FC = () => {

    const website = useContext(Context).website
    const [show, setShow] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [scrolling, setScrolling] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const handleScroll = () => window.scrollTo({ top: scrolling ? 0 : window.innerHeight, behavior: 'auto' })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.onscroll = () => setScrolling(window.scrollY !== 0)
        }
    }, [])

    let menu = website?.menus?.filter(m => m.title === "Main")[0]

    return (
        <header className={component.name}>
            {menu !== undefined ?
                <Navbar expand="xxxl" className={`${component.name}__navbar ${scrolling ? 'scrolling' : 'top'}`} fixed="top">
                    <Container>
                        <Navbar.Brand className={`${component.name}__navbar--brand`}>
                            <Link href="/">
                                <Image className={`${component.name}__logo`} src={`${website.settings.logo}`} height="65" width="212" alt={`${website.name} logo`} />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle className="ms-auto" onClick={() => setShowLogin(true)}>Login</Navbar.Toggle>
                        <Navbar.Toggle aria-controls={component.name} className="ms-3" onClick={handleShow}>Menu</Navbar.Toggle>
                        <Navbar.Offcanvas show={show} onHide={handleClose} id={component.name} placement="end">
                            <Offcanvas.Header closeButton></Offcanvas.Header>
                            <Offcanvas.Body onClick={handleClose}>
                                <Menu {...menu} />
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
                : null}
            <div className={`${component.name}__scroller`} onClick={handleScroll}>
                <span className={`${component.name}__scroller-arrow ${component.name}__scroller-arrow-${scrolling ? 'up' : 'down'}`}></span>
            </div>
        </header>
    )
}

const Menu: FC<IMenu> = (menu) => {
    return (
        <Nav key={menu.alias} className={`${component.name}__navigation`}>
            {menu.includeHome ? <NavigationLink key="-1" url="/" title="Home" /> : null}
            {menu.links.map((link, index) =>
                link.url ? <NavigationLink key={index} {...link} /> : null
            )}
        </Nav>
    )
}

const NavigationLink: FC<ILink> = (link) => {

    const page = useContext(Context).page

    return (
        <Nav.Item className={`${component.name}__navigation-item`}>
            <Nav.Link as={Link} scroll={true} href={link.url} className={`${page.breadcrumbs[1]?.url === link.url ? 'active' : null}`}>{link.title}</Nav.Link>
        </Nav.Item>
    )
}

export default Header