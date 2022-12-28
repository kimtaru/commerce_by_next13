import ProductLayout from "../components/layout/product-layout";
import styled from "styled-components";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Cart from "../components/cart";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import BottomNavigation from "../components/layout/bottom-navigation";

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
const UserInfo = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isHeaderFix, setIsHeaderFix] = useState(false);
  const [loadingState, setLoadingState] = useState(status);
  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    setLoadingState(status);
  }, [status]);
  return (
    <>
      <HeaderComp isFix={isHeaderFix}>
        <div className="tw-flex tw-items-center tw-justify-between tw-py-2 tw-px-4 ">
          <div className="tw-text-xl tw-text-black tw-font-bold">
            <ChevronLeftIcon
              className="tw-w-6 tw-h-6 tw-cursor-pointer"
              onClick={goBack}
            />
          </div>
          <div className="tw-s tw-text-base tw-font-bold">
            {session ? `마이 페이지` : `로그인`}
          </div>
          <Cart bgWhite={true} />
        </div>
      </HeaderComp>
      {session ? (
        <div className="tw-p-20">
          <div
            onClick={() => {
              signOut();
            }}
            className="tw-border-2 tw-text-center tw-p-4 tw-cursor-pointer"
          >
            로그아웃
          </div>
        </div>
      ) : (
        <div className="tw-p-20">
          <div
            onClick={() => {
              signIn("google");
            }}
            className="tw-border-2 tw-text-center tw-p-4 tw-cursor-pointer"
          >
            구글 로그인
          </div>
          {loadingState}
        </div>
      )}
      <BottomNavigation />
    </>
  );
};

export default UserInfo;
