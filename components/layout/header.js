import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import TopMenu from "./top-menu";
import styled from "styled-components";

const Badge = styled.div`
  font-size: 0.75rem /* 12px */;
  line-height: 1rem /* 16pxk */;
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
  return (
    <header className="bg-white ">
      <div className="flex items-center justify-between py-2 px-4 bg-blue-800">
        <div className="text-xl text-white font-bold">W I S E L Y</div>
        <div className="relative">
          <ShoppingCartIcon className="w-8 h-8 text-white" />
          <Badge>1</Badge>
        </div>
      </div>
      <TopMenu />
    </header>
  );
}
