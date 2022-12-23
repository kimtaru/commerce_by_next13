import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { throttle } from "lodash";
import ProductHorizontalMenu from "./product-horizontal-menu";
import { useRouter } from "next/router";
import Cart from "../cart";

const HeaderComp = styled.header`
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  ${(props) =>
    props.isFix &&
    ` position: fixed;
      z-index: 50;
      width: 100%;
      max-width: 512px;
      --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    `}
`;

export default function ProductHeader({ header }) {
  const router = useRouter();
  const [isHeaderFix, setIsHeaderFix] = useState(false);

  const throttleScroll = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY > 100) {
          setIsHeaderFix(true);
          return;
        }
        setIsHeaderFix(false);
        return;
      }, 500),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", throttleScroll);
    return () => {
      window.removeEventListener("scroll", throttleScroll);
    };
  }, [throttleScroll]);

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <HeaderComp isFix={isHeaderFix}>
      <div className="tw-flex tw-items-center tw-justify-between tw-py-2 tw-px-4 ">
        <div className="tw-text-xl tw-text-black tw-font-bold">
          <ChevronLeftIcon
            className="tw-w-6 tw-h-6 tw-cursor-pointer"
            onClick={goBack}
          />
        </div>
        <div className="tw-s tw-text-base tw-font-bold">{header.title}</div>
        <Cart bgWhite={true} />
      </div>
      <ProductHorizontalMenu menus={header.menus} />
    </HeaderComp>
  );
}
