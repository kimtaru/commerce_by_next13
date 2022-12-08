import Layout from "../components/layout/layout";
import { Button, Menu } from "antd";
import { useCallback, useMemo, useState } from "react";

export default function Categories({ data }) {
  let items = data.map((v) => {
    let childs = [];

    if (v.CATEGORY_TWO.length > 0) {
      childs = v.CATEGORY_TWO.map((item) => {
        return {
          key: item.PATH_NAME || item.ID,
          label: item.CATEGORY_NAME,
        };
      });
    }

    return {
      key: v.PATH_NAME || v.ID,
      label: v.CATEGORY_NAME,
      children: childs.length > 0 ? childs : undefined,
    };
  });

  const onMenuClick = useCallback(({ key }) => {
    console.log(key);
  }, []);

  return (
    <div>
      <Menu onClick={onMenuClick} mode="inline" theme="light" items={items} />
    </div>
  );
}

Categories.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:8080/api/waikiki/get-categories`);
//   const data = await res.json();

//   return { props: { data } };
// }

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8080/api/waikiki/get-categories`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 10,
  };
}
