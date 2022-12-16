import { Carousel, message } from "antd";
import Layout from "../components/layout/layout";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { mutate } from "swr";
import useStorage from "../hooks/use-storage";

export default function Home({ prds }) {
  //const onSlideChange = (currentSlide) => {};
  const [messageApi, contextHolder] = message.useMessage();
  //const { data = [] } = useSWR("waikiki_basket_guest", storage);

  const data = useStorage();
  const addCart = (code) => {
    messageApi.info("상품이 장바구니에 담겼습니다.");
    data.push(code);
    localStorage.setItem("waikiki_basket_guest", JSON.stringify(data));
    mutate("waikiki_basket_guest");
  };

  return (
    <div>
      {contextHolder}
      <Carousel
        autoplay
        //afterChange={onSlideChange}
        style={{ marginBottom: "0.5rem" }}
      >
        <div className="tw-relative tw-block tw-overflow-hidden tw-h-32">
          <Image
            src="/images/menuBanner1.png"
            alt="recommend"
            width={1000}
            height={400}
            priority
            //fill
            //style={{ objectFit: "cover" }}
          />
        </div>
      </Carousel>
      <br />
      <br />
      <div className="tw-p-2 tw-grid tw-grid-cols-2 tw-gap-2">
        <div className="tw-col-span-2">
          <h1 className="tw-text-base tw-font-bold tw-bold">
            와이키키의 상품들을 둘러보세요
          </h1>
        </div>

        {prds.map((v) => (
          <div key={v.id}>
            <div className="tw-relative" style={{ paddingBottom: "100%" }}>
              <Image
                src={`/images/${v.imageUrl}.jpeg`}
                alt="recommend"
                fill
                sizes="50vw"
                //width={500}
                //height={300}
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
            <div className="tw-pt-3 tw-pl-1">{v.productName}</div>
            <div className="tw-pl-1 tw-pb-10 tw-font-bold">
              <p>{new Intl.NumberFormat().format(v.sellingPrice)}원</p>
              <p className="tw-font-normal tw-line-through tw-text-gray-500">
                {v.discountAmount > 0
                  ? new Intl.NumberFormat().format(v.originPrice) + "원"
                  : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8080/get-recommended-product`);
  const prds = await res.json();

  return {
    props: { prds },
    revalidate: 30,
  };
}
