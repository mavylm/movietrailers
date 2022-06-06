import Link from 'next/link';
import Image from 'next/dist/client/image';
import React, { useState } from 'react';
import Logo from '../public/assets/logo.png';
import ProfilePic from '../public/assets/profilepic.png';
import NavItem from './NavItem';

const MENU_LIST = [
  { text: 'Popular', href: '/popular' },
  { text: 'Recent', href: '/recent' },
  { text: 'Upcoming', href: '/upcoming' },
  { text: 'Favorite', href: '/favorite' },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <>
      <nav
        className={`nav ${navActive ? 'active' : ''}
        `}
      >
        <Link href={'/'}>
          <a onClick={() => setActiveIdx(-1)}>
            <Image src={Logo} alt='Logo' />
          </a>
        </Link>
        <div
          className={`menu__icon ${navActive ? 'active' : 'inactive'}`}
          onClick={() => setNavActive(!navActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`nav__menu ${navActive ? 'active' : ''}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.href}
            >
              <NavItem {...menu} active={idx === activeIdx} />
            </div>
          ))}
        </div>
      </nav>

      <style jsx>{`
        /* nav {
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
        } */

        .navbarHeader {
          position: sticky;
          z-index: 99;
          top: 0;
          color: #fff;
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

        .menu__icon {
          width: 40px;
          display: flex;
          flex-direction: column;
        }
        .menu__icon div {
          border-radius: 2px;
          height: 6px;
          background-color: black;
        }
        .menu__icon div:nth-child(2) {
          margin: 6px 0;
        }

        .menu__icon.active div:nth-child(1) {
          animation: menuAnim1 0.3s ease-in-out forwards;
        }
        .menu__icon.active div:nth-child(2) {
          animation: menuAnim2 0.3s ease-in-out forwards;
        }
        .menu__icon.active div:nth-child(3) {
          animation: menuAnim3 0.3s ease-in-out forwards;
        }
        .menu__icon.inactive div:nth-child(1) {
          animation: revmenuAnim1 0.3s ease-in-out;
        }
        .menu__icon.inactive div:nth-child(2) {
          animation: revmenuAnim2 0.3s ease-in-out;
        }
        .menu__icon.inactive div:nth-child(3) {
          animation: revmenuAnim3 0.3s ease-in-out;
        }

        @keyframes menuAnim1 {
          0% {
            transform: translateY(0);
          }

          70% {
            transform: translateY(12px);
          }
          100% {
            transform: translateY(12px) rotateZ(45deg);
          }
        }
        @keyframes menuAnim2 {
          0% {
            transform: scale(1);
            opacity: 1;
          }

          100% {
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes menuAnim3 {
          0% {
            transform: translateY(0);
          }

          70% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(-12px) rotateZ(135deg);
          }
        }

        @keyframes revmenuAnim1 {
          0% {
            transform: translateY(12px) rotateZ(45deg);
          }

          70% {
            transform: translateY(12px);
          }
          100% {
            transform: translateY(0px) rotateZ(0deg);
          }
        }
        @keyframes revmenuAnim2 {
          0% {
            transform: scale(0);
            opacity: 1;
          }

          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        @keyframes revmenuAnim3 {
          0% {
            transform: translateY(-12px) rotateZ(135deg);
          }

          70% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0) rotateZ(0);
          }
        }

        .menu {
          display: flex;
          flex-direction: column;
          position: fixed;
          width: 288px;
          height: calc(100vh - 100px);
          right: -288px;
          top: 76px;
          padding: 24px 16px;
          row-gap: 16px;
          background-color: #ffffff;
          transition: all 0.3s;
        }

        .menu.active {
          right: 0;
        }

        @media screen and (min-width: 768px) {
          .menu {
            flex-direction: row;
            column-gap: 24px;
            position: unset;
            width: fit-content;
            height: fit-content;
          }
          .nav__item::after {
            position: absolute;
            content: '';
            bottom: -26px;
            width: 0%;
            left: 0;
            height: 6px;
            background-color: black;
            transition: all 0.2s;
          }

          .nav__item:hover::after,
          .nav__item.active::after {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
