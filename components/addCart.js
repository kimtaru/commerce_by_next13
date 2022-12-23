import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { message } from "antd";
import useBasket from "../hooks/use-basket";
import useStorage from "../hooks/use-storage";
import { addCartToServer } from "../lib/apis/product";

const AddCart = ({ code }) => {
  const [messageApi, contextHolder] = message.useMessage();
  //const basketList = useStorage();
  const { cart = [], mutate } = useBasket();

  const addCart = async (code) => {
    let isDuplicate = false;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].PRODUCT_ID == code) {
        isDuplicate = true;
        break;
      }
    }

    if (isDuplicate) {
      if (!confirm("이미 담긴 상품인데 또 추가하시겠습니까?")) return false;
    }

    await addCartToServer(code, "ADD");
    messageApi.info("상품이 장바구니에 담겼습니다.");
    mutate();
    //basketList.push(code);
    //localStorage.setItem("waikiki_basket_guest", JSON.stringify(basketList));
    //mutate("http://localhost:8080/get-basket");
  };

  return (
    <>
      {contextHolder}
      <ShoppingCartIcon
        onClick={() => {
          addCart(code);
        }}
        style={{ padding: "6px" }}
        className="tw-cursor-pointer tw-opacity-40 tw-bottom-2 tw-right-2 tw-absolute tw-w-10 tw-h-10 tw-bg-black tw-rounded-full  tw-text-white"
      />
    </>
  );
};

export default AddCart;
