// components/sections/Aside.jsx

'use client';

import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlineContacts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";
import { signOut } from "next-auth/react";
// import { useRouter } from "next/router";

export default function Aside({ asideOpen }) {

  // const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const handleClick = () => {
    setClicked(!clicked);
  }
  const handleLinkClick = (link) => {
    setActiveLink(preActive => (preActive === link ? null : link));
    setClicked(false);
  }

  // useEffect(() => {
  //   //  update active link state when the page is reloaded
  //   setActiveLink(router.pathname);

  // }, [router.pathname])


  return <>
    <aside className={asideOpen ? 'asideleft active' : 'asideleft'}>
      <ul className="text-black">
        <Link href='/'>
          <li className="navactive">
            <IoHome />
            <span>Dashboard</span>
          </li>
        </Link>
        <Link href='/admin/post'>
          <li className={activeLink === '/admin/post' ? 'navactive' : ''} onClick={() => handleLinkClick('/contacts')}>
            <GoProjectSymlink />
            <span>Create</span>
          </li>
        </Link>
        <Link href='/contacts'>
          <li className={activeLink === '/contacts' ? 'navactive' : ''} onClick={() => handleLinkClick('/contacts')}>
            <MdOutlineContacts />
            <span>Contacts</span>
          </li>
        </Link>
      </ul>
      <button onClick={() => signOut()} className="logoutbtn">Logout</button>
    </aside>
  </>
}