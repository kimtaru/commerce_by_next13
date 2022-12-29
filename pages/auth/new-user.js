import { Button, Input, Modal } from "antd";
import { useRouter } from "next/router";
import Layout from "../../components/layout/layout";
import DaumPostCode from "react-daum-postcode";
import { useRef, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

const NewUser = () => {
  const router = useRouter();
  const { email = "" } = router.query;

  const [zoneCode, setZoneCode] = useState("");
  const [addressText, setAddressText] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contact, setContact] = useState(false);

  const addressRef = useRef();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleAddressComplete = (data) => {
    setZoneCode(data.zonecode);
    setAddressText(data.address);
    setIsModalOpen(false);
  };

  const userSubmit = async () => {
    try {
      const response = await axios({
        method: "post",
        url: "/enroll-user",
        baseURL: "http://localhost:8080",
        timeout: 10000,
        headers: {
          "Content-type": "application/json",
        },
        data: JSON.stringify({
          EMAIL: email,
          ZONE_CODE: zoneCode,
          ADDRESS_TEXT: addressText,
          ADDRESS_DETAIL: addressDetail,
          CONTACT: contact,
        }),
      });

      if (response.data.IS_SUCCESS === "Y") {
        if (confirm("가입이 완료되었습니다. 로그인 하시겠습니까?")) {
          signIn("google", { callbackUrl: "http://localhost:3000/" });
        } else {
          router.replace("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Modal
        title="주소검색"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={null}
      >
        <DaumPostCode onComplete={handleAddressComplete} autoClose={false} />
      </Modal>
      <div className="tw-pl-16 tw-pr-16 tw-pt-16 tw-pb-3 ">
        <p className="tw-text-2xl tw-text-center ">
          {email.split("@")[0]}님!
          <br />
          와이키키에 오신것을
          <br /> 환영합니다 :)
        </p>
        <p className="tw-text-center">추가정보를 입력해주세요.</p>
      </div>
      <div className="tw-p-4">
        <div className="tw-p-2 tw-hidden">
          <div className="t tw-pl-1 tw-pb-1">이메일</div>
          <Input value={email} readOnly size="large" />
        </div>

        <div className="tw-p-2">
          <div className="t tw-pl-1 tw-pb-1">상품 수령할 주소</div>
          <Input.Group compact>
            <Button
              style={{ marginBottom: "4px", width: "100%" }}
              type="primary"
              size="large"
              onClick={showModal}
            >
              주소 검색
            </Button>

            <Input
              style={{ marginBottom: "4px" }}
              placeholder="우편번호"
              readOnly
              size="large"
              value={zoneCode}
              ref={addressRef}
            />
            <Input
              style={{ marginBottom: "4px" }}
              placeholder="주소"
              readOnly
              size="large"
              value={addressText}
            />
            <Input
              placeholder="상세주소"
              size="large"
              onChange={(e) => {
                setAddressDetail(e.target.value);
              }}
            />
          </Input.Group>
        </div>

        <div className="tw-p-2">
          <div className="t tw-pl-1 tw-pb-1">연락 받으실 번호</div>

          <Input
            style={{ marginBottom: "4px" }}
            placeholder='"-" 없이 입력해주세요.'
            size="large"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>

        <div className="tw-p-2">
          <Button
            style={{ width: "100%", backgroundColor: "black", border: "none" }}
            type="primary"
            size="large"
            onClick={userSubmit}
          >
            등록
          </Button>
        </div>
        {/* <div className="tw-p-2">
          <div className="t tw-pl-1 tw-pb-1">이메일</div>
          <Input />
        </div>
        <div className="tw-p-2">
          <div className="t tw-pl-1 tw-pb-1">이메일</div>
          <Input />
        </div> */}
      </div>
    </div>
  );
};

NewUser.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default NewUser;
