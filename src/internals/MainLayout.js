/** @jsxImportSource theme-ui */
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div sx={{ pb: 5 }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
