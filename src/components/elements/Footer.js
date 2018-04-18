import React from "react";
import { Container, Grid, Header, Segment, List } from 'semantic-ui-react';

const Footer = () => (
  <div>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='bit :folio' />
              <List link inverted>
                <List.Item as='a'>Über bit :folio</List.Item>
                <List.Item as='a'>FAQ</List.Item>
                <List.Item as='a'>Kontakt</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Impressum</List.Item>
                <List.Item as='a'>Datenschutz</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>Footer Header</Header>
              <p>bit :foli synchronisiert und aggregiert Dein Guthaben und ERC20-Tokens von Deinen lokalen Geldbörsen und Exchange-Konten. </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </Segment>
  </div>
);

export default Footer;
