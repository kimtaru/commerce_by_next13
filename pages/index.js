import { Carousel, message } from "antd";
import Layout from "../components/layout/layout";
import banner1 from "../images/menuBanner1.png";
import banner2 from "../images/menuBanner2.png";
import prd1 from "../images/prd1.jpeg";
import prd2 from "../images/prd2.jpeg";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import useSWR, { mutate } from "swr";
import storage from "../lib/storage";

export default function Home() {
  const onSlideChange = (currentSlide) => {};
  const [messageApi, contextHolder] = message.useMessage();
  const { data = [] } = useSWR("waikiki_basket_guest", storage);

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
        afterChange={onSlideChange}
        style={{ marginBottom: "0.5rem" }}
      >
        <div className="tw-relative tw-block tw-overflow-hidden tw-h-32">
          <Image
            src={banner1}
            alt="recommend"
            fill
            //style={{ objectFit: "cover" }}
          />
        </div>
        <div className="tw-relative tw-block tw-overflow-hidden tw-h-32">
          <Image
            src={banner2}
            alt="recommend"
            fill
            style={{ objectFit: "cover" }}
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
        <div>
          <div className="tw-relative" style={{ paddingBottom: "100%" }}>
            <Image
              src={prd1}
              alt="recommend"
              fill
              className="tw-rounded-xl"
              style={{ objectFit: "cover" }}
            />
            <ShoppingCartIcon
              onClick={() => {
                addCart("code1");
              }}
              style={{ padding: "6px" }}
              className="tw-cursor-pointer tw-opacity-40 tw-bottom-2 tw-right-2 tw-absolute tw-w-10 tw-h-10 tw-bg-black tw-rounded-full  tw-text-white"
            />
          </div>
          <div className="tw-pt-3 tw-pl-1">데일리케어 샴푸 500ml</div>
          <div className="tw-pl-1 tw-pb-10 tw-font-bold">
            <p>3,900원</p>
            <p className="tw-font-normal tw-line-through tw-text-gray-500">
              10,900원
            </p>
          </div>
        </div>
        <div>
          <div className="tw-relative" style={{ paddingBottom: "100%" }}>
            <Image
              src={prd2}
              alt="recommend"
              fill
              className="tw-rounded-xl"
              style={{ objectFit: "cover" }}
            />
            <ShoppingCartIcon
              onClick={() => {
                addCart("code2");
              }}
              style={{ padding: "6px" }}
              className="tw-cursor-pointer tw-opacity-40 tw-bottom-2 tw-right-2 tw-absolute tw-w-10 tw-h-10 tw-bg-black tw-rounded-full  tw-text-white"
            />
          </div>
          <div className="tw-pt-3 tw-pl-1">피로개선 홍삼스틱 30개입</div>
          <div className="tw-pl-1 tw-pb-10 tw-font-bold">
            <p>6,900원</p>
            <p className="tw-font-normal tw-line-through">20,900원</p>
          </div>
        </div>
        <div>
          <div className="tw-relative" style={{ paddingBottom: "100%" }}>
            <Image
              src={prd2}
              alt="recommend"
              fill
              className="tw-rounded-xl"
              style={{ objectFit: "cover" }}
            />
            <ShoppingCartIcon
              onClick={() => {
                addCart("code2");
              }}
              style={{ padding: "6px" }}
              className="tw-cursor-pointer tw-opacity-40 tw-bottom-2 tw-right-2 tw-absolute tw-w-10 tw-h-10 tw-bg-black tw-rounded-full  tw-text-white"
            />
          </div>
          <div className="tw-pt-3 tw-pl-1">피로개선 홍삼스틱 30개입</div>
          <div className="tw-pl-1 tw-pb-10 tw-font-bold">
            <p>6,900원</p>
            <p className="tw-font-normal tw-line-through">20,900원</p>
          </div>
        </div>
        <div>
          <div className="tw-relative" style={{ paddingBottom: "100%" }}>
            <Image
              src={prd2}
              alt="recommend"
              fill
              className="tw-rounded-xl"
              style={{ objectFit: "cover" }}
            />
            <ShoppingCartIcon
              onClick={() => {
                addCart("code2");
              }}
              style={{ padding: "6px" }}
              className="tw-cursor-pointer tw-opacity-40 tw-bottom-2 tw-right-2 tw-absolute tw-w-10 tw-h-10 tw-bg-black tw-rounded-full  tw-text-white"
            />
          </div>
          <div className="tw-pt-3 tw-pl-1">피로개선 홍삼스틱 30개입</div>
          <div className="tw-pl-1 tw-pb-10 tw-font-bold">
            <p>6,900원</p>
            <p className="tw-font-normal tw-line-through">20,900원</p>
          </div>
        </div>

        {/* <div className="tw-relative" style={{ paddingBottom: "100%" }}>
          <Image
            src={prd3}
            alt="recommend"
            fill
            className="tw-rounded-xl"
            style={{ objectFit: "cover" }}
          />
          <ShoppingCartIcon
            style={{ padding: "6px" }}
            className="tw-cursor-pointer tw-opacity-40 tw-bottom-2 tw-right-2 tw-absolute tw-w-10 tw-h-10 tw-bg-black tw-rounded-full  tw-text-white"
          />
        </div>
        <div className="tw-relative" style={{ paddingBottom: "100%" }}>
          <Image
            src={prd4}
            alt="recommend"
            fill
            className="tw-rounded-xl"
            style={{ objectFit: "cover" }}
          />
          <ShoppingCartIcon
            style={{ padding: "6px" }}
            className="tw-cursor-pointer tw-opacity-40 tw-bottom-2 tw-right-2 tw-absolute tw-w-10 tw-h-10 tw-bg-black tw-rounded-full  tw-text-white"
          />
        </div> */}
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
