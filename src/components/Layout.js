import Header from './Header';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div style={{ width: '350px', margin: 'auto', position: 'relative' }}>
        <Header />
        {children}
        <Navbar />
      </div>
    </div>
  );
};
export default Layout;
