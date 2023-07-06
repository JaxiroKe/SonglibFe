import React, { useState } from 'react'
import Link from "next/link";
import { useSelector } from 'react-redux'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { IoNotifications } from 'react-icons/io5'
import { FaHome, FaInbox, FaUser } from 'react-icons/fa'

export default function NavBar({ }) {
  const IconContainer = ({ children }: any) => (
    <div className="rounded-full border-2 border-gray-500 p-2 mr-2 flex items-center">
      {children}
    </div>
  );

  return (
    <nav className="fixed top-0 z-10 w-full bg-black">
      <div className="justify-between">
        <div className="flex">
          <div className="flex items-center w-full sm:w-1/4 border-r border-gray-500 pl-16">
            <Link href="/">
              <h2 className="text-2xl text-center">
                HayaSasa
              </h2>
            </Link>
          </div>

          <div className="flex items-start md:py-1 w-full sm:w-3/4 border-b border-gray-500 pr-16">
            <div className="flex items-start md:py-2 w-full sm:w-1/2">
              <div className="flex items-center px-4 py-2 cursor-pointer" >
                <FaHome size={25} className="mx-2"/>Home
              </div>

              <div className="px-2 py-1 text-sm bg-gray-500 rounded flex items-center mx-2">
                <div className="px-4 py-2 text-sm bg-black rounded">
                  Explore
                </div>

                <div className="px-4 py-2 text-sm rounded mx-1">
                  Matching Projects
                </div>
              </div>

            </div>

            <div className="flex justify-end py-2 md:py-2 w-full sm:w-1/2">
              <IconContainer>
                <BsFillChatDotsFill size={25} />
              </IconContainer>
              <IconContainer>
                <IoNotifications size={25} />
              </IconContainer>

              <div className="py-1 flex">
                <div className="px-4 py-2 text-sm">
                  <h2>Jack Siro</h2>
                </div>
              </div>
              <IconContainer>
                <FaUser size={25} />
              </IconContainer>

            </div>

          </div>

        </div>
      </div>

    </nav>
  )
}

