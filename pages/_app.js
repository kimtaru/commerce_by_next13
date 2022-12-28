import "../styles/globals.css";
import "antd/dist/antd.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <SessionProvider session={session}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"
          />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
