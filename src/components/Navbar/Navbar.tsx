/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React from "react";
import defaultUserImage from "../../../public/asstes/user.png";
import LogoImage from "../../../public/asstes/logo.png";
import Image from "next/image";
import { getUserInfo } from "@/services/auth.service";

import dynamic from "next/dynamic";
import { useLoadUserQuery } from "@/redux/slices/user/userApi";
const Navbar = () => {
  const user = getUserInfo() as any;
  const id = user?.userId;

  const { data, error } = useLoadUserQuery(id);
  console.log(data);
  return (
    <div
      className=" z-40 w-full border-b  mb-2"
      style={{
        backgroundColor: "#010313",
      }}
    >
      <div className="container m-auto px-2 md:px-12 lg:px-7">
        <div className="flex px-6 md:px-0 z-20 flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <input
            type="checkbox"
            name=""
            id="toggleNav"
            className="peer hidden"
          />
          <label
            htmlFor="toggleNav"
            role="overlaynav"
            className="fixed left-0 top-0 transition-all
                        md:peer-checked:hidden md:hidden opacity-0 hidden peer-checked:z-0
                        peer-checked:opacity-75 peer-checked:block w-full h-screen
                        bg-gray-200 bg-opacity-75 dark:bg-darker dark:opacity-80"
          ></label>
          <div className="relative z-40">
            <Link className="flex items-center" href="/" aria-label="logo">
              <Image
                src={
                  "https://res.cloudinary.com/arafatleo/image/upload/v1699089796/avatars/blank-bird-logo-design-idea-png-15_tjp0jh.png"
                }
                className="w-20 sm:w-20 rounded-full "
                alt="User logo"
                width="144"
                height="68"
              />
              <p className="text-lg text-gray-300 font-semibold font-sans ml-2">
                <span className="text-[40px]">T</span>-Manager
              </p>
            </Link>
          </div>

          <div className="bg-[#150F2D] fixed h-full w-4/5 max-w-sm top-0 -left-full peer-checked:-left-0 md:relative md:top-0 md:left-0 transition-all z-30 md:flex items-center p-8 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent md:w-max">
            <div className="z-20 flex gap-8 md:gap-0 flex-col md:flex-row md:items-center w-full">
              <ul className="pt-28 lg:pt-0 gap-8 tracking-wide font-medium flex-col flex md:flex-row md:gap-0 t">
                <Link href="/">
                  {" "}
                  <li className="max-w-max">
                    <span className="block md:px-3 group">
                      <div
                        className="relative text-white
                                                        before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">
                          Home
                        </span>
                      </div>
                    </span>
                  </li>
                </Link>

                <Link href={"/board"}>
                  {" "}
                  <li className="max-w-max">
                    <span className="block md:px-3 group">
                      <div
                        className="relative text-white
                                                        before:absolute before:-bottom-2 md:before:-bottom-7 before:origin-left before:w-full before:h-0.5 before:mx-auto before:mt-auto before:rounded-full before:bg-cyan-800 dark:before:bg-cyan-400 before:transition before:scale-x-0 group-hover:before:scale-x-100"
                      >
                        <span className="transition group-hover:text-cyan-700 dark:group-hover:text-cyan-400">
                          Create Issue
                        </span>
                      </div>
                    </span>
                  </li>
                </Link>
              </ul>
              {user?.role ? (
                <div className="flex sm:hidden pt-4 w-full">
                  <Link href={"/board"}>
                    {" "}
                    <button
                      type="button"
                      title={data?.data?.name}
                      className="flex justify-center items-center w-full py-3 px-6 text-center rounded-full transition bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800"
                    >
                      <span className="block text-white text-sm">
                        {data?.data?.name}
                      </span>
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="flex sm:hidden pt-4 w-full">
                  <Link href={"/login"}>
                    {" "}
                    <button
                      type="button"
                      title="Login"
                      className="flex justify-center items-center w-full py-3 px-6 text-center rounded-full transition bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800"
                    >
                      <span className="block text-white text-sm">Login</span>
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          {user?.role ? (
            <Link href={"/board"}>
              {" "}
              <div className="block-endnav w-max flex items-center gap-4">
                {" "}
                <Image
                  width={45}
                  height={45}
                  className="w-[45px] h-[45px] rounded-full cursor-pointer"
                  src={data?.avatar ? data?.avatar?.url : defaultUserImage}
                  alt=""
                />
                <div className="flex items-center md:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggleNav"
                    aria-label="hamburger"
                    id="hamburger"
                    className="relative p-6 -mr-6"
                  >
                    <div
                      role="hidden"
                      id="line"
                      className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300"
                    ></div>
                    <div
                      role="hidden"
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
            </Link>
          ) : (
            <div className="block-endnav w-max flex items-center gap-4">
              <Link href={"/login"}>
                {" "}
                <button
                  type="button"
                  title="Start buying"
                  className="hidden sm:block w-full py-3 px-6 text-center rounded-full transition bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max"
                >
                  <span className="block text-white text-sm">Login</span>
                </button>
              </Link>

              <div className="flex items-center md:hidden max-h-10">
                <label
                  role="button"
                  htmlFor="toggleNav"
                  aria-label="hamburger"
                  id="hamburger"
                  className="relative p-6 -mr-6"
                >
                  <div
                    role="hidden"
                    id="line"
                    className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300"
                  ></div>
                  <div
                    role="hidden"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-200 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// export default Navbar;
export default dynamic(() => Promise.resolve(Navbar), {
  ssr: false,
});
