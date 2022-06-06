import Image from 'next/dist/client/image';
import Logo from '../public/assets/logo.png';

const Footer = () => {
  return (
    <>
      <footer>
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
        <div className='bottomInfo'>
          <p>&copy; Movie Trailers 2022</p>
          <div className='footerLinks'>
            <a href='#'>Terms</a>
            <a href='#'>Privacy</a>
            <a href='#'>Site Map</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        footer {
          display: flex;
          flex-direction: column;
          position: relative;
          bottom: 0px;
          width: 100%;
          padding: 40px 100px;
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
          margin: 40px 0px 80px 0px;
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
        }

        .bottomInfo {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};

export default Footer;
