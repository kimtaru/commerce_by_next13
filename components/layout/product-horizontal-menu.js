import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const ProductHorizontalMenu = ({ menus }) => {
  const router = useRouter();

  const { code } = router.query;

  return (
    <StyledMobileTopNavDiv>
      <ul>
        {menus.map((v, i) => (
          <li
            key={v.CATEGORY_ID}
            className="tw-inline-block tw-p-3 tw-font-medium tw-text-gray-500"
          >
            <StyledLink
              selected={String(code) === String(v.CATEGORY_ID)}
              href={`/product/${v.CATEGORY_ID}`}
            >
              {v.CAGORY_NAME}
            </StyledLink>
          </li>
        ))}
      </ul>
    </StyledMobileTopNavDiv>
  );
};

const StyledMobileTopNavDiv = styled.div`
  width: 100%;
  height: 45px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
  line-height: 2.5rem;
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
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

export default ProductHorizontalMenu;
