import Image from "next/image";
import { useEffect } from "react";
import { mutate } from "swr";
import ProductLayout from "../../components/layout/product-layout";
import AddCart from "../../components/addCart";

export default function Product({ data = [] }) {
  useEffect(() => {
    mutate(
      "globalState",
      { ...data, header: { title: data.GROUP_NAME, menus: [...data.MENUS] } },
      false
    );
  }, [data]);

  const outRec = data.OUT_REC || [];

  return (
    <div className="tw-p-2 tw-pt-7 tw-grid tw-grid-cols-2 tw-gap-2">
      {outRec.map((v, i) => (
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
            <AddCart code={v.PRODUCT_ID} />
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
