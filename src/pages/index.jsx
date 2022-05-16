import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl">test</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
