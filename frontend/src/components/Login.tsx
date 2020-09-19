import React, { useState } from 'react';
import ExpressApi from '../api-client/ExpressApi';
import { Button, Form, Container, Row, Col, Alert } from 'react-bootstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Routes from '../constants/routes';
import Header from './Header';

interface LoginProps extends RouteComponentProps {}
function Login(props: LoginProps) {
  let [email, setEmail] = useState<string>('');
  let [password, setPassword] = useState<string>('');
  let [errorMessage, setErrorMessage] = useState<string>('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const attemptLogin = async () => {
    setErrorMessage('');
    try {
      await ExpressApi.login(email, password);
      props.history.push(Routes.Summary);
    } catch (error) {
      setErrorMessage("The Username and Password don't match our records, please check them and try logging in again.");
    }
  };

  return (
    <div>
      <Header></Header>
      <Container>
        <Row style={{ marginTop: '12%' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <h1>Login</h1>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form>
              <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control id="email-input" type="email" value={email} onChange={onChangeEmail} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control id="password-input" type="password" value={password} onChange={onChangePassword} />
              </Form.Group>

              <Button id="login-btn" className="w-100" type="submit" onClick={attemptLogin}>
                Login
              </Button>
            </Form>
            <i className="default-login-user my-2 d-block">Default user: brandon.mork@yopmail.com / Password@1</i>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default withRouter(Login);
