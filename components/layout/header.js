import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import TopMenu from "./top-menu";
import styled from "styled-components";
import useSWR from "swr";
import storage from "../../lib/storage";
import { useEffect, useMemo, useRef, useState } from "react";
import { throttle } from "lodash";

const Badge = styled.div`
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16px */;
  width: 1rem;
  height: 1rem;
  position: absolute;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  border-radius: 9999px;
  text-align: center;
  top: -10%;
  right: -20%;
`;

const HeaderComp = styled.header`
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  ${(props) =>
    props.isFix &&
    ` position: fixed;
      z-index: 50;
      width: 100%;
      --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    `}
`;

export default function Header() {
  const { data = [] } = useSWR("waikiki_basket_guest", storage);
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

  return (
    <HeaderComp isFix={isHeaderFix}>
      <div className="tw-flex tw-items-center tw-justify-between tw-py-2 tw-px-4 tw-bg-blue-800">
        <div className="tw-text-xl tw-text-white tw-font-bold ">
          W A I K I K I
        </div>
        <div className="tw-relative">
          <ShoppingCartIcon className="tw-w-8 tw-h-8 tw-text-white" />
          {data.length > 0 ? <Badge>{data.length}</Badge> : null}
        </div>
      </div>
      <TopMenu />
    </HeaderComp>
  );
}
