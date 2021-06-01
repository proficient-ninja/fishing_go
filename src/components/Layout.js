import Header from './Header';
import Navbar from './Navbar';
const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
      <Navbar />
    </div>
  );
};
export default Layout;
