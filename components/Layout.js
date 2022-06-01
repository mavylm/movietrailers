import Head from 'next/head';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Movie Trailers</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Created with Nextjs' />
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />

      <style jsx global>
        {`
          @font-face {
            font-family: 'SourceSansPro';
            src: url('fonts/SourceSansPro-Regular.otf') format('opentype');
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0px;
            padding: 0px;
            font-family: 'SourceSansPro';
          }

          h1,
          h2 {
            margin: 22px;
          }

          h1 {
            font-size: 48px;
            line-height: 48px;
            color: #fff;
          }

          h2 {
            font-size: 36px;
            line-height: 36px;
            color: #4c4c51;
          }

          p {
            font-size: 22px;
            line-height: 28px;
            color: #4c4c51;
          }

          a,
          a:active,
          a:visited {
            font-size: 22px;
            line-height: 28px;
            color: #88939e;
          }

          a:hover {
            font-size: 22px;
            line-height: 28px;
            color: #4c4c51;
          }

          hr {
            border: 1px solid #e8e8e8;
            margin: 0px 100px;
          }

          .contentContainer {
            margin: 0px 100px;
          }

          .redButton {
            background-color: #ee2d1c;
            min-height: 55px;
            font-size: 22px;
            align-text: center;
            color: #fff;
            border: none;
            border-radius: 50px;
            padding: 0px 50px;
            margin: 22px;
          }

          .redButton:hover {
            opacity: 0.7;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
