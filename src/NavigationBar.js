import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'

class NavigationBar extends Component {
    render() {
        return (
            <div className="NavigationBar">
                <Navbar bg="dark" variant="light">
                    <Navbar.Brand href="/">DIEMx</Navbar.Brand>
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/search">Search</Nav.Link></Nav.Item>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar