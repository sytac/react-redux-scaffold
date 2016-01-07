import React from 'react';
import { PageHeader, Grid, Row, Col, Button, ButtonToolbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { pushPath } from 'redux-simple-router';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <PageHeader>
        <Grid>
          <Row >
            <Col md={6}>
              <Link to="/">Sample</Link>
              <small> A sample app</small>
            </Col>
            <Col md={5} >
              <Nav bsStyle="pills" style={{fontSize: '22px'}} pullRight={true}>
                <NavItem eventKey={1} href="/#/">Home</NavItem>
                <NavItem eventKey={2} href="/#/info">Info</NavItem>
                <NavItem eventKey={3} href="/#/credits">Credits</NavItem>
              </Nav>
            </Col>
          </Row>
        </Grid>
      </PageHeader>
    );
  }
}

export default Header;
