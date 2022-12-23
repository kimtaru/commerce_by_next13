import Layout from "../components/layout/layout";
import BasketList from "../components/basket-list";
import useBasket from "../hooks/use-basket";

const Basket = () => {
  const { cart = [] } = useBasket();
  return (
    <div>
      <BasketList cart={cart} />

      <div className="tw-p-4 tw-flex tw-justify-between tw-gap-4">
        <div className="tw-border tw-border-blue-700 tw-text-blue-700 tw-p-2 tw-w-1/2 tw-text-center">
          더 담으러 가기
        </div>
        <div className="tw-bg-blue-700 tw-text-white tw-font-bold tw-p-2 tw-w-1/2 tw-text-center">
          구매하기
        </div>
      </div>
    </div>
  );
};

Basket.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Basket;
