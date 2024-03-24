import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isOpne , setIsOpen] = useState(false)
  const ToggleChange=()=>{
    isOpne===false?setIsOpen(true):setIsOpen(false)
  }
  return (
    <>
      <div>
        <header className="relative bg-white border-b border-gray-200">
          <div className="container mx-auto flex justify-between p-5 items-center">
            <div className="font-bold text-2xl">
              <Link to="/">
                <h3>
                  Dugu<span className="text-red-500">Shop</span>
                </h3>
              </Link>
            </div>

            <div className="hidden md:block">
              <ul className="flex items-center text-lg justify-center font-semibold">
                <Link to="/">
                  <li className="mr-5 hover:text-gray-900 cursor-pointer">Home</li>
                </Link>
                <Link to="/allproducts">
                <li className="mr-5 hover:text-gray-900 cursor-pointer">
                  All Products
                </li>
                </Link>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">Mens</li>
                <li className="mr-5 hover:text-gray-900 cursor-pointer">Kids</li>
              </ul>
            </div>

            {
              isOpne? <div className="">
              <ul className="flex flex-col gap-10 text-2xl top-[73px] left-0 h-screen w-full z-10 bg-red-500 absolute text-white items-center justify-center font-semibold">
                <Link to="/">
                  <li className="mt-5 hover:text-gray-900 cursor-pointer">Home</li>
                </Link>
                <li className="mt-5 hover:text-gray-900 cursor-pointer">
                  All Products
                </li>
                <li className="mt-5 hover:text-gray-900 cursor-pointer">Mens</li>
                <li className="mt-5 hover:text-gray-900 cursor-pointer">Kids</li>
              </ul>
              <button className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer" onClick={ToggleChange}>
                <RxCross2 size={30} />
              </button>
            </div>:""
            }

           

            <div className="flex justify-center items-center gap-3">
              <Link to="/login">
              <button className="bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold">
                Login
              </button>
              </Link>
              <Link to="/cart">
                <button>
                  <FaCartShopping size={25} />
                </button>
              </Link>
              {
                isOpne?"":<button className="md:hidden" onClick={ToggleChange}>
                <GiHamburgerMenu size={25} />
              </button>
              }
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
