import axios from 'axios';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [validation, setValidation] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    await axios
      .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/login`, formData)
      .then((response) => {
        Cookies.set('token', response.data.token);
        Router.push('/dashboard');
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

  useEffect(() => {
    if (Cookies.get('token')) {
      Router.push('/dashboard');
    }
  }, []);

  return (
    <Layout>
      <Head>Login - NextJS JWT</Head>
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card border-0 rounded shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Login</h5>
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="col-form-label">Email Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {validation.email && (
                      <small className="text-danger">
                        {validation.email[0]}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {validation.password && (
                      <small className="text-danger">
                        {validation.password[0]}
                      </small>
                    )}
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
