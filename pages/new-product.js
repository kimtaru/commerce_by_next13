import Layout from "../components/layout/layout";

export default function NewProduct() {
  return (
    <div className="tw-text-center tw-p-12 tw-bg-slate-400">새상품리스트</div>
  );
}

NewProduct.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
