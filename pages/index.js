import Head from 'next/head';
import Layout from '../layouts/Layout';

function Home() {
  return (
    <Layout>
      <Head>Home - NextJS JWT</Head>
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border-0">
              <div className="container-fluid py-5">
                <h2 className="display-6 fw-bold">LARAVEL JWT + NEXT.JS</h2>
                <p className="col-md-12 fs-4">
                  Learn Authentication Laravel JWT with Next.js
                </p>
                <a className="btn btn-primary btn-lg" type="button">
                  More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
