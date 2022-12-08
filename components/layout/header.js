import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import TopMenu from "./top-menu";
import styled from "styled-components";
import useSWR from "swr";
import storage from "../../lib/storage";

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

export default function Header() {
  const { data = [] } = useSWR("waikiki_basket_guest", storage);
  console.log(data);
  return (
    <header className="tw-bg-white ">
      <div className="tw-flex tw-items-center tw-justify-between tw-py-2 tw-px-4 tw-bg-blue-800">
        <div className="tw-text-xl tw-text-white tw-font-bold">
          W A I K I K I
        </div>
        <div className="tw-relative">
          <ShoppingCartIcon className="tw-w-8 tw-h-8 tw-text-white" />
          {data.length > 0 ? <Badge>{data.length}</Badge> : null}
        </div>
      </div>
      <TopMenu />
    </header>
  );
}
