import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import useWindowSize from './hooks/useWindowSize';
import { Outlet } from 'react-router-dom';


const Layout = ({search, setSearch}) => {
  const { width } = useWindowSize();
  return (
    <div className='App'>
      <Header title="Blog App" width ={width}/>
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout