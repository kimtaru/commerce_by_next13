import { useEffect, useState } from "react";
import { XMarkIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { addCartToServer, deleteCartToServer } from "../lib/apis/product";
import useBasket from "../hooks/use-basket";

const BasketList = () => {
  const { cart = [], mutate } = useBasket();
  const [purchaseList, setPurchaseList] = useState(
    cart.map((v) => v.PRODUCT_ID)
  );
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart
        .filter((v) => purchaseList.includes(v.PRODUCT_ID))
        .reduce((initValue, item) => {
          return initValue + item.SELLING_PRICE * item.TOTAL_AMOUNT;
        }, 0)
    );
  }, [purchaseList, cart]);

  const addCart = async (code, flag) => {
    await addCartToServer(code, flag).then(() => {
      mutate();
    });
  };

  const deleteCart = async (code, pid) => {
    await deleteCartToServer(code).then(() => {
      setPurchaseList(
        purchaseList.filter((v) => {
          return v !== pid;
        })
      );
      mutate();
    });
  };

  return (
    <>
      <div className="tw-p-4">
        <div className="tw-align-middle tw-inline-block">
          <input
            type="checkbox"
            id="checkAll"
            className="txt-hide"
            checked={purchaseList.length === cart.length}
            onChange={(e) => {
              if (e.target.checked) {
                setPurchaseList(cart.map((v) => v.PRODUCT_ID));
              } else {
                setPurchaseList([]);
              }
            }}
          />
          <label htmlFor="checkAll" className="labl-hold"></label>
        </div>
        <div className="tw-align-middle tw-pl-2 tw-inline-block">
          {`전체선택(${purchaseList.length}/${cart.length})`}
        </div>
      </div>
      <hr className="tw-w-11/12 tw-mx-auto" />
      <div>
        {cart.map((v, i) => {
          return (
            <div key={i}>
              <div className="tw-p-4 tw-relative">
                <div className="tw-align-middle tw-inline-block">
                  <input
                    type="checkbox"
                    id={`check-item-${i}`}
                    className="txt-hide"
                    checked={purchaseList.includes(v.PRODUCT_ID)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setPurchaseList([...purchaseList, v.PRODUCT_ID]);
                      } else {
                        setPurchaseList(
                          purchaseList.filter((p) => {
                            return p !== v.PRODUCT_ID;
                          })
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={`check-item-${i}`}
                    className="labl-hold"
                  ></label>
                </div>
                <div className="tw-align-middle tw-pl-2 tw-inline-block">
                  {v.PRODUCT_NAME}
                </div>
                <XMarkIcon
                  className="tw-w-5 tw-h-5 tw-float-right tw-text-gray-300"
                  onClick={() => {
                    deleteCart(v.BASKET_ID, v.PRODUCT_ID);
                  }}
                />
                <div className="tw-px-8 tw-py-2 tw-relative">
                  <Image
                    src={`/images/${v.IMAGE_URL}.jpeg`}
                    alt="recommend"
                    //fill
                    sizes="50vw"
                    width={80}
                    height={80}
                    className="tw-rounded-lg tw-inline-block"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="tw-text-xs tw-font-bold tw-inline-block tw-top-2 tw-px-3 tw-absolute  ">
                    {new Intl.NumberFormat().format(v.SELLING_PRICE)}원
                  </div>
                  <div className="tw-absolute tw-inline-block tw-px-3 tw-bottom-3">
                    <div className=" tw-w-28 tw-h-8 ">
                      <div className="tw-py-1 tw-px-1 tw-border tw-border-solid tw-border-gray-400 tw-rounded-lg tw-flex tw-justify-between">
                        <MinusIcon
                          className="tw-w-6 tw-h-6 tw-inline-block"
                          onClick={() => {
                            v.TOTAL_AMOUNT !== 1 &&
                              addCart(v.PRODUCT_ID, "MINUS");
                          }}
                        />
                        <div>{v.TOTAL_AMOUNT}</div>
                        <PlusIcon
                          className="tw-w-6 tw-h-6 tw-inline-block"
                          onClick={() => {
                            addCart(v.PRODUCT_ID, "ADD");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className=" tw-w-11/12 tw-mx-auto" />
            </div>
          );
        })}
      </div>
      <div className="tw-p-4">
        <div className=" tw-p-1 tw-flex tw-justify-between">
          <div>합계</div>
          <div>{new Intl.NumberFormat().format(totalAmount)}원</div>
        </div>
        <div className=" tw-p-1 tw-flex tw-justify-between">
          <div>배송비</div>
          <div>3,000원</div>
        </div>
      </div>
      <hr className=" tw-w-11/12 tw-mx-auto" />
    </>
  );
};

export default BasketList;
