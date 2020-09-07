import React, { useState } from 'react';
import ExpressApi from '../api-client/ExpressApi';

function AuthenticatedRoute() {
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
    <div className="login-block">
      <div className="login-header">Login</div>

      <div className="login-input">
        Username:
        <br />
        <input id="email-input" type="text" value={email} onChange={onChangeEmail} />
      </div>

      <div className="login-input">
        Password:
        <br />
        <input id="pwd-input" type="password" value={password} onChange={onChangePassword} />
      </div>

      <div>
        <button id="login-btn" onClick={attemptLogin}>
          Login
        </button>
      </div>

      <div className="default-login-user">// Default admin user (Email: "brandon.mork@yopmail.com", Password: "Password@1")</div>
    </div>
  );
}

export default AuthenticatedRoute;
