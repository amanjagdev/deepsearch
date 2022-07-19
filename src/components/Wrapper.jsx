import { useEffect, useContext, Fragment } from 'react';
import { ThemeContext } from '../context/theme-context';
import Head from 'next/head';

const Wrapper = ({ Component, pageProps }) => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.querySelector('body').className = theme;
  }, [theme]);

  return (
    <Fragment>
      <Head>
        {/* BASIC SITE INFO  */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />

        {/* SITE ICONS */}
        <link rel="icon" type="image/png" sizes="32x32" href="/vercel.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/vercel.svg" />
        <link rel="mask-icon" href="/vercel.svg" color="#4A91FF" />
        <meta name="theme-color" content="#ffffff" />

        {/* MAIN META TAGS  */}
        <title>Moonglight - Improved Search for your platform</title>
        <meta
          name="description"
          content="Moonglight - Improved Search for your platform"
        />
        <meta name="theme-color" content="#4285f4" />

        {/* SOCIAL META TAGS  */}
        <meta property="og:site_name" content="Samāvartana" />
        <meta
          property="og:title"
          content="Moonlight - Improved Search for your platform"
        />
        <meta
          property="og:description"
          content="Moonlight - Improved Search for your platform"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://pbs.twimg.com/profile_images/976683214201765888/Wy4LUm8Q_400x400.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Identify" />

        {/* TWITTER META TAGS  */}
        <meta
          name="twitter:title"
          content="Moonglight - Improved Search for your platform"
        />
        <meta
          name="twitter:description"
          content="Moonglight - Improved Search for your platform"
        />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_images/976683214201765888/Wy4LUm8Q_400x400.jpg"
        />
        <meta name="twitter:creator" content="@amankumarjagdev" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default Wrapper;
