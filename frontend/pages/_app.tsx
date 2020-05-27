import App from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import Head from 'next/head';

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Head>
          <title>Cooking</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
