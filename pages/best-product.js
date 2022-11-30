import Layout from "../components/layout/layout";

export default function BestProduct() {
  return (
    <div className="tw-text-center tw-p-12 tw-bg-slate-400">
      베스트상품리스트
    </div>
  );
}

BestProduct.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
