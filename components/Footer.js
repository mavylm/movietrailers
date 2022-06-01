import Image from 'next/dist/client/image';
import Logo from '../public/assets/logo.png';

const Footer = () => {
  return (
    <>
      <div className='info'>
        <div className='infoLinks'>
          <span className='infoLinksHeader'>Fakesite</span>
          <br />
          <a href='#'>About Us</a>
          <a href='#'>Press</a>
          <a href='#'>Policies</a>
          <a href='#'>Help</a>
        </div>
        <div className='infoLinks'>
          <span className='infoLinksHeader'>Account</span>
          <br />
          <a href='#'>Edit Profile</a>
          <a href='#'>Friends</a>
          <a href='#'>Social</a>
          <a href='#'>Delete Profile</a>
        </div>
      </div>
      <hr />
      <footer>
        <a href='#'>
          <Image src={Logo} alt='Logo' />
        </a>
        <div className='footerLinks'>
          <a href='#'>Terms</a>
          <a href='#'>Privacy</a>
          <a href='#'>Site Map</a>
        </div>
      </footer>

      <style jsx>{`
        footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          bottom: 0px;
          padding: 0px 100px;
          z-index: 99;
          color: #fff;
          width: 100%;
          height: 100px;
        }

        .footerLinks {
          display: flex;
          align-items: center;
        }

        .footerLinks a {
          margin-left: 60px;
          text-decoration: none;
        }

        .info {
          display: flex;
          margin: 100px 100px;
        }

        .infoLinks {
          display: flex;
          flex-direction: column;
          margin-right: 120px;
        }

        .infoLinksHeader {
          color: #ee2d1c;
          font-size: 22px;
          font-weight: bold;
        }

        .infoLinks a {
          text-decoration: none;
          font-weight: 400;
        }
      `}</style>
    </>
  );
};

export default Footer;
