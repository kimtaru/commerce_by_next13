import { Carousel } from "antd";
import Layout from "../components/layout/layout";
import banner1 from "../images/menuBanner1.png";
import banner2 from "../images/menuBanner2.png";
import prd1 from "../images/prd1.jpeg";
import prd2 from "../images/prd2.jpeg";
import prd3 from "../images/prd3.jpeg";
import prd4 from "../images/prd4.jpeg";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const onSlideChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <Carousel afterChange={onSlideChange} style={{ marginBottom: "0.5rem" }}>
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
        <div className="tw-relative" style={{ paddingBottom: "100%" }}>
          <Image
            src={prd1}
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
            src={prd2}
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
        </div>

        {/* 1 */}
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
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
