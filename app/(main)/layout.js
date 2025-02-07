import Footer from "./components/commons/footer";
import Header from "./components/commons/header";

export default function PageLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
