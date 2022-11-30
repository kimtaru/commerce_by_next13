import Footer from "./footer";
import Header from "./header";
import BottomNavigation from "./bottom-navigation";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <BottomNavigation />
    </>
  );
}
