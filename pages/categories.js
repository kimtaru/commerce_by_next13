import Layout from "../components/layout/layout";
import { Button, Menu } from "antd";
import { useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";

export default function Categories({ data }) {
  const router = useRouter();
  const noChildrenMenu = data
    .filter((v) => {
      if (v.GROUP_NAME === null) return v;
    })
    .map((v, i) => {
      return {
        key: v.CATEGORY_ID,
        label: v.MENU_NAME,
      };
    });

  const havingChildrenMenu = [
    ...new Set(
      data
        .filter((v) => {
          if (v.GROUP_NAME !== null) return v;
        })
        .map((v) => {
          return v.GROUP_NAME;
        })
    ),
  ].map((val, index) => {
    const children = [];

    data.forEach((item) => {
      if (item.GROUP_NAME === val) {
        children.push({
          key: item.CATEGORY_ID,
          label: item.MENU_NAME,
        });
      }
    });

    return {
      key: `group_${index}`,
      label: val,
      children: children,
    };
  });

  const items = [...noChildrenMenu, ...havingChildrenMenu];

  const onMenuClick = useCallback(
    ({ key }) => {
      router.push(`/product/${key}`);
    },
    [router]
  );

  return (
    <div>
      <Menu onClick={onMenuClick} mode="inline" theme="light" items={items} />
    </div>
  );
}

//http://localhost:3000/product?grp_no=1&cate_no=1

Categories.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:8080/api/waikiki/get-categories`);
//   const data = await res.json();

//   return { props: { data } };
// }

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8080/get-categories`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10,
  };
}
