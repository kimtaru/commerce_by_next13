import Footer from "./footer";
import Header from "./header";
import BottomNavigation from "./bottom-navigation";
import ProductHeader from "./product-header";
import initialStore from "../../lib/store";
import useSWR from "swr";
import { useEffect } from "react";

export default function ProductLayout({ children }) {
  const { data } = useSWR("globalState", { fallbackData: initialStore });

  return (
    <>
      {/* <Header /> */}
      <ProductHeader header={data.header} />
      <main>{children}</main>
      <BottomNavigation />
    </>
  );
}
