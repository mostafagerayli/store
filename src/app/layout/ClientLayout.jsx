import Container from "../components/Container";
import Footer from "./Footer";
import Header from "./Header";

function ClientLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer/>
    </Container>
  );
}

export default ClientLayout;
