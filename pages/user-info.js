import styled from "styled-components";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Cart from "../components/cart";
import { useCallback, useEffect } from "react";
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
  const { data: session } = useSession();
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, [router]);

  // useEffect(() => {
  //   mutate("globalState", { ...initialStore, session: session }, false);

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios({
  //         method: "get",
  //         url: "/get-basket",
  //         baseURL: "http://localhost:8080",
  //         timeout: 2000,
  //       });

  //       if (true) {
  //         movePage();
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [session, router]);

  return (
    <>
      <HeaderComp isFix={false}>
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
              signOut({ callbackUrl: "http://localhost:3000/" });
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
              signIn("google", { callbackUrl: "http://localhost:3000/" });
            }}
            className="tw-border-2 tw-text-center tw-p-4 tw-cursor-pointer"
          >
            구글 로그인
          </div>
        </div>
      )}
      <BottomNavigation />
    </>
  );
};

export default UserInfo;
