import axios from 'axios';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [validation, setValidation] = useState([]);

  const registerHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);

    await axios
      .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/register`, formData)
      .then(() => {
        Router.push('/login');
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
      <Head>Register - NextJS JWT</Head>
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0 rounded shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Register</h5>
                <form onSubmit={registerHandler}>
                  <div className="mb-3">
                    <label className="col-form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter full name..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {validation.name && (
                      <small className="text-danger">
                        {validation.name[0]}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email address..."
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
                      placeholder="Enter password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {validation.password && (
                      <small className="text-danger">
                        {validation.password[0]}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">
                      Password Confirmation
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password confirmation..."
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Register
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

export default Register;
