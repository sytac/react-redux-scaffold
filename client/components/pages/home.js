import React from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row >
            <Col>
              <Jumbotron>
                <h1>Edit me!!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat
                  nulla pariatur. </p>
              </Jumbotron>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default HomePage;
