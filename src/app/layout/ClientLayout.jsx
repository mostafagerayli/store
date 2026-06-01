import Footer from "./Footer";
import Header from "./Header";

function ClientLayout({ children }) {
  return (
    <div className="dark:bg-green-950 bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default ClientLayout;
