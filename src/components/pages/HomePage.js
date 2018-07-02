import React from "react";
import PropTypes from "prop-types";
import {
  Segment,
  Button,
  Icon,
  Grid,
  Container,
  Header } from 'semantic-ui-react';

const HomepageHeading = ({ mobile }) => (
  <Segment inverted>
  <Container text>
    <Header
      as='h1'
      content='xxx'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='xxx'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
  </Segment>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

const HomePage = () => (
  <div>
  <HomepageHeading />
  <Container text>

    <img src="img/logo.png" />

    <Grid divided='vertically'>
      <Grid.Row columns={3}>
        <Grid.Column>

        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
      </Grid.Row>
    </Grid>

  </Container>
  </div>
);


export default HomePage;
