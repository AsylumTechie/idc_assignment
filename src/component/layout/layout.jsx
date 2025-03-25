import Navbar1 from "../navbar/Header";
import Footer from "../footer/footer";

const Layout = ({ children, theme, toggleTheme }) => {
  return (
    <div>
      <Navbar1 theme={theme} toggleTheme={toggleTheme} />
      
      <main >{children}</main>
      <Footer theme={theme}/>
    </div>
  );
};
export default Layout;
