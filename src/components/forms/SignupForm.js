import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Header, Grid, Image, Segment } from "semantic-ui-react";
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/InlineError";

class SignupForm extends React.Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};

    if (!isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";

    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <div className='sign-form'>
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.sign-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              <Image src='/img/icon.png' />
              {' '}bit :foli account Anmeldung
            </Header>

            <Form onSubmit={this.onSubmit} loading={loading} size='large'>
              <Segment stacked>
                <Form.Field error={!!errors.email}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@email.com"
                    value={data.email}
                    onChange={this.onChange}
                  />
                  {errors.email && <InlineError text={errors.email} />}
                </Form.Field>

                <Form.Field error={!!errors.password}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={this.onChange}
                  />
                  {errors.password && <InlineError text={errors.password} />}
                </Form.Field>

                <Button primary fluid size='large'>Sign Up</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
    );
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};


export default SignupForm;
