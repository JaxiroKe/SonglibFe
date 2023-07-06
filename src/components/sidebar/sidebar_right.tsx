import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button, Modal as AntModal } from "antd";
import { useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext";
import { FaSearch, FaHome } from 'react-icons/fa'

import { Menu } from "./menu";
import SuggestedList from "./suggested";

function SidebarRight() {
  const { currentUser } = useAuth()

  return (
    <div className="mr-16">
      <div className="flex flex-col justify-center">

        <div className="flex px-4 py-2 m-4 text-sm bg-slate-800 rounded items-center">
          <FaSearch className="m-2" /> Explore HayaSasa
        </div>

        <hr className="m-4" />

        <nav className="">
          <Menu Icon={FaHome}> Home </Menu>
          <Menu Icon={FaHome}> Proposals </Menu>
          <Menu Icon={FaHome}> Orders </Menu>
          <Menu Icon={FaHome}> Reports </Menu>
        </nav>

      </div>
    </div>
  );
}

export default SidebarRight;
