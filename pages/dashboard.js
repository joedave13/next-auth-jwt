import axios from 'axios';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import Layout from '../layouts/Layout';

function Dashboard() {
  const token = Cookies.get('token');

  const [user, setUser] = useState({});

  const fetchData = async (e) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_BACKEND}/user`)
      .then((response) => {
        setUser(response.data);
      });
  };

  useEffect(() => {
    if (!token) {
      Router.push('/login');
    }

    fetchData();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_BACKEND}/logout`)
      .then(() => {
        Cookies.remove('token');
        Router.push('/login');
      });
  };

  return (
    <Layout>
      <Head>Dashboard - NextJS JWT</Head>
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card border-0 rounded shadow-sm">
              <div className="card-body">
                Welcome, <strong>{user.name}</strong>
                <hr />
                <button onClick={handleLogout} className="btn btn-danger">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
