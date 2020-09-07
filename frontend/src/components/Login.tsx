import React, { useState } from 'react';
import ExpressApi from '../api-client/ExpressApi';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

function Login() {
  let [email, setEmail] = useState<string>('');
  let [password, setPassword] = useState<string>('');

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const attemptLogin = async () => {
    await ExpressApi.login(email, password);
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Login</h1>
          <Form>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control id="email-input" type="email" value={email} onChange={onChangeEmail} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control id="password-input" type="password" value={password} onChange={onChangePassword} />
            </Form.Group>

            <Button id="login-btn" className="w-100" onClick={attemptLogin}>
              Login
            </Button>
          </Form>

          <i className="default-login-user">Default user: brandon.mork@yopmail.com / Password@1</i>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
