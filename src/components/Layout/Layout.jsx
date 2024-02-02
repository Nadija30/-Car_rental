import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { ToastContainer } from 'react-toastify';
import Footer from 'components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer autoClose={3000} />
    </>
  );
};
