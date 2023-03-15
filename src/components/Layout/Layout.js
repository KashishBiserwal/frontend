import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header'



const Layout = (props) => {
  return (
    <div className='full'>
      <Header onButtonClick={props.onButtonClick}/>
      <div className="body">
        <Outlet />
      </div>
      <Footer onButtonClick={props.onButtonClick}/>
    </div>
  );
};

export default Layout;