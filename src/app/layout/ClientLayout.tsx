import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
type ClientLayoutProps = {
  children: ReactNode;
};

function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className="dark:bg-green-950 bg-[#fdfdf9]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default ClientLayout;
