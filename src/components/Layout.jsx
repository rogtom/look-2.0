import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <div className="container mx-auto">
        navbar
        <main>{children}</main>
      </div>
    </>
  );
}
