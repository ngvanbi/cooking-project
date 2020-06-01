import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../store/store';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Head>
        <title>Cooking</title>
      </Head>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default App;
