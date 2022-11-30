import Layout from "../components/layout/layout";

export default function Home() {
  return <div className="text-center p-12 bg-slate-400">추천상품리스트!!</div>;
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
