import React from 'react';
import { store } from '../../store';
import { routeActions } from 'react-router-redux';
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';

class CreditsPage extends React.Component {

  handleGoToInfo() {
    store.dispatch(routeActions.replace('/info'));
  }

  render() {
    return (
      <div>
        <Grid>
          <Row >
            <Col>
              <Jumbotron>
                <h1>Credits</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat
                  nulla pariatur. </p>
              </Jumbotron>
              <Button onClick={this.handleGoToInfo}>Info</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CreditsPage;
