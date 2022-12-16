import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect } from "react";
import { mutate } from "swr";
import { message } from "antd";
import ProductLayout from "../../components/layout/product-layout";
import useStorage from "../../hooks/use-storage";

export default function Product({ data }) {
  useEffect(() => {
    mutate(
      "globalState",
      { ...data, header: { title: data.GROUP_NAME, menus: [...data.MENUS] } },
      false
    );
  }, [data]);
  const [messageApi, contextHolder] = message.useMessage();
  const basketList = useStorage();

  const addCart = (code) => {
    messageApi.info("상품이 장바구니에 담겼습니다.");
    basketList.push(code);
    localStorage.setItem("waikiki_basket_guest", JSON.stringify(basketList));
    mutate("waikiki_basket_guest");
  };

  return (
    <div className="tw-p-2 tw-pt-7 tw-grid tw-grid-cols-2 tw-gap-2">
      {contextHolder}
      {data.OUT_REC.map((v, i) => (
        <div key={v.PRODUCT_ID}>
          <div className="tw-relative" style={{ paddingBottom: "100%" }}>
            <Image
              src={`/images/${v.IMAGE_URL}.jpeg`}
              alt="recommend"
              fill
              sizes="50vw"
              className="tw-rounded-xl"
              style={{ objectFit: "cover" }}
            />
            <ShoppingCartIcon
              onClick={() => {
                addCart(v.id);
              }}
              style={{ padding: "6px" }}
              className="tw-cursor-pointer tw-opacity-40 tw-bottom-2 tw-right-2 tw-absolute tw-w-10 tw-h-10 tw-bg-black tw-rounded-full  tw-text-white"
            />
          </div>
          <div className="tw-pt-3 tw-pl-1">{v.PRODUCT_NAME}</div>
          <div className="tw-pl-1 tw-pb-10 tw-font-bold">
            <p>{new Intl.NumberFormat().format(v.SELLING_PRICE)}원</p>
            <p className="tw-font-normal tw-text-gray-500">
              {v.PRODUCT_DESCRIPTION}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

Product.getLayout = function getLayout(page) {
  return <ProductLayout title="스킨케어">{page}</ProductLayout>;
};

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8080/get-categories");
  const categories = await res.json();

  const paths = categories.map((v) => ({
    params: { code: String(v.CATEGORY_ID) },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `http://localhost:8080/get-product-page-info?code=${params.code}`
  );
  const data = await res.json();

  return {
    props: { data },
    revalidate: 300,
  };
}
