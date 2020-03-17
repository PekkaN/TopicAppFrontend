import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route, Link, Switch
} from 'react-router-dom'
import TopicSivu from "./TopicPage";
import InfoPage from "./InfoPage";
import OldTopic from "./OldTopicsPage";
// import AddTopic from "./AddTopic";
import './AppHeader.css';

function Navigation() {
    return (
        <container>
        <div>
            <Router>
                <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" >

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" >
                            <Nav.Link href="#" as="span">
                                <Link to="/">New Topic</Link>
                            </Nav.Link>

                            <Nav.Link href="#" as="span">
                                <Link to="/old">Old Topics</Link>
                            </Nav.Link>

                            <Nav.Link href="#" as="span">
                                <Link to="/info">Info</Link>
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse >

                </Navbar>
                <Switch>

                    <Route path="/info">
                        <InfoPage />
                    </Route>
                    <Route path="/old">
                        <OldTopic />
                    </Route>
                    <Route path="/">
                        <TopicSivu />
                    </Route>
                </Switch>
            </Router>
        </div>
        </container>
    )
}
export default Navigation
