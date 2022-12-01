import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const TopMenu = () => {
  const router = useRouter();

  return (
    <StyledMobileTopNavDiv>
      <StyledLink href="/" selected={router.asPath === "/"}>
        추천
      </StyledLink>
      <StyledLink
        href="/best-product"
        selected={router.asPath === "/best-product"}
      >
        베스트
      </StyledLink>
      <StyledLink
        href="/new-product"
        selected={router.asPath === "/new-product"}
      >
        신제품
      </StyledLink>
    </StyledMobileTopNavDiv>
  );
};

const StyledLink = styled(Link)`
  cursor: pointer;
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
  line-height: 2.5rem;
  font-weight: 400;
  font-size: 16px;
  ${(props) =>
    props.selected &&
    ` color: rgb(30 64 175 / var(--tw-text-opacity));
      font-weight: 700;
      border-bottom-width: 2px;
      border-style: solid;
      --tw-border-opacity: 1;
      border-color: rgb(30 64 175 / var(--tw-border-opacity));
    `}
`;

const StyledMobileTopNavDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20%;
`;

export default TopMenu;
