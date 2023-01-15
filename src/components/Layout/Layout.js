import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header'



const Layout = () => {
  return (
    <div className='full'>
      <Header />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;