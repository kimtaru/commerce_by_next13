import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import styled from "styled-components";
import useBasket from "../hooks/use-basket";
import useSWR from "swr";
import initialStore from "../lib/store";

const Badge = styled.div`
  font-size: 0.5rem /* 12px */;
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
  ${(props) =>
    props.isWhite &&
    ` background-color: rgb(30 64 175 / var(--tw-bg-opacity));
      color: white;
    `}
`;

const Cart = ({ bgWhite }) => {
  const router = useRouter();

  const {
    data: { session },
  } = useSWR("globalState", {
    fallbackData: initialStore,
  });

  const { cart = [] } = useBasket();

  const movePage = (session) => {
    if (session) {
      router.push("/basket");
    } else {
      if (confirm("로그인이 필요합니다.")) {
        router.push("/user-info");
      } else {
        return false;
      }
    }
  };

  return (
    <div className="tw-relative">
      {bgWhite ? (
        <ShoppingCartIcon
          className="tw-w-8 tw-h-8 tw-text-black"
          onClick={() => {
            movePage(session);
          }}
        />
      ) : (
        <ShoppingCartIcon
          className="tw-w-8 tw-h-8 tw-text-white"
          onClick={() => {
            movePage(session);
          }}
        />
      )}
      {session && cart.length > 0 ? (
        <Badge isWhite={bgWhite}>{cart.length}</Badge>
      ) : null}
    </div>
  );
};

export default Cart;
