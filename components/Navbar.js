import Image from 'next/dist/client/image';
import Logo from '../public/assets/logo.png';
import ProfilePic from '../public/assets/profilepic.png';

const Navbar = () => {
  return (
    <>
      <nav>
        <a href='#'>
          <Image src={Logo} alt='Logo' />
        </a>
        <div className='navlinks'>
          <a href='#'>Account</a>
          <a href='#'>Help</a>
          <a href='#'>
            <span className='profilePic'>
              <Image src={ProfilePic} alt='Profile' />
            </span>
          </a>
        </div>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          top: 0px;
          padding: 0px 100px;
          z-index: 99;
          color: #fff;
          width: 100%;
          height: 100px;
        }

        nav a:hover {
          color: #4c4c51;
        }

        .navlinks {
          display: flex;
          align-items: center;
        }

        .navlinks a {
          color: #fff;
          margin-left: 60px;
          text-decoration: none;
        }

        .profilePic {
          display: flex;
          align-items: center;
          border-radius: 50%;
          border: 3px solid #fff;
          width: 50px;
          height: 50px;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Navbar;
