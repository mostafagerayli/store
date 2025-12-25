import Container from "../components/Container/Container";
import Footer from "./Footer";
import Header from "./Header";

function ClientLayout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default ClientLayout;
