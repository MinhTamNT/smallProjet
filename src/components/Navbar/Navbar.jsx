import { useEffect, useRef, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineDropbox,
  AiOutlineHome,
  AiOutlineClose,
} from "react-icons/ai";
import { useSelector } from "react-redux";
const Navbar = () => {
  const user = useSelector((state) => state.auth?.login.currentuser);
  const [isMenu, SetMenu] = useState(false);
  const [isSearch, SetSearch] = useState(false);
  const [isProfile, SetProfile] = useState(false);
  const handleisProfile = () => {
    SetProfile(!isProfile);
  };
  const searchRef = useRef(null);
  const handlerMenu = () => {
    SetMenu(!isMenu);
  };
  const handlerSearch = () => {
    SetSearch(!isSearch);
  };
  const handleOutsideClick = (e) => {
    if (e.target.className === "backdrop") {
      SetSearch(false);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        SetSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="p-[16px] bg-[#f6f8fa] relative">
      <div className="flex flex-row items-center">
        <button className=" border-default" onClick={handlerMenu}>
          <AiOutlineMenu size={"16px"} className="text-black" />
        </button>
        <div className="flex items-center gap-2 ">
          <svg
            widths="32px"
            height="32"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="32"
            color="#FOF6FC"
            data-view-component="true"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
          <p>Dasboard</p>
        </div>
        <div className="ml-auto flex">
          <button className="border-default">
            <AiOutlineSearch
              size={"16px"}
              className="text-black,cursor-pointer"
              onClick={handlerSearch}
            />
          </button>
          <button className="border-default">
            <AiOutlineDropbox
              size={"16px"}
              className="text-black cursor-pointer"
            />
          </button>
          <div className="w-[32px] h-[32px]">
            <img
              src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/384777261_1368113600455198_4596360537438109469_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N_OMKt3Qm2kAX80786p&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfBn_EoOe_fggFFWSBKTh30StGhr9NPKGQ7OvhicYZqAiw&oe=6532EE47"
              className=" rounded-full object-cover cursor-pointer"
              onClick={handleisProfile}
            />
          </div>
        </div>
      </div>
      {isMenu && (
        <div
          className={`top-0 left-0 absolute h-screen w-[80%] md:w-[20%] bg-[#f6f8fa] z-10 transition-all duration-300 ${
            isMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <div className="header-hambugermeu flex items-center justify-between mt-3 mx-3">
            <svg
              widths="32"
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              color="#FOF6FC"
              data-view-component="true"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            <button className="w-[16px] h-[16px] rounded grid auto-cols-max  border-solid border-[1px] border-[#0000] justify-center items-center mr-2">
              <AiOutlineClose
                size={"12px"}
                className="text-gray-icons"
                onClick={handlerMenu}
              />
            </button>
          </div>
          <nav className="p-8">
            <ul className="list-none ">
              <li className="flex gap-2 mb-3 ">
                <AiOutlineHome
                  size={"20px"}
                  className="cursor-pointer text-gray-icons"
                />
                <span className="text-gray-icons">Home</span>
              </li>
              <li className="flex gap-2 mb-3">
                <AiOutlineHome
                  size={"20px"}
                  className="cursor-pointer text-gray-icons"
                />
                <span className="text-gray-icons">Home</span>
              </li>
              <li className="flex gap-2 mb-3">
                <AiOutlineHome
                  size={"20px"}
                  className="cursor-pointer text-gray-icons"
                />
                <span className="text-gray-icons">Home</span>
              </li>
            </ul>
          </nav>
        </div>
      )}
      {isSearch && (
        <div className=" z-10 top-0 left-0 absolute bg-[#f6f8fa] w-full h-3/4">
          <div className="relative w-[95%]" ref={searchRef}>
            <input className="pl-8 w-full h-10 rounded-lg border-2 border-rose-600 mt-[10px] ml-2 " />
            <span className="absolute left-0 top-[20px] ml-2">
              <AiOutlineSearch size={"22px"} className="ml-2" />
            </span>
          </div>
        </div>
      )}
      {isProfile && (
        <div className="absolute right-0 top-0 w-[90%] h-screen bg-[#f6f8fa]">
          <div className="p-8">
            <div>
              <div className=" flex gap-2 ">
                <img
                  src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/384777261_1368113600455198_4596360537438109469_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N_OMKt3Qm2kAX80786p&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfBn_EoOe_fggFFWSBKTh30StGhr9NPKGQ7OvhicYZqAiw&oe=6532EE47"
                  className=" w-[32px] h-[px] rounded-full object-cover cursor-pointer"
                />
                <span className="name_user text-28">minhtam789</span>
              </div>
              <span className="nickname_user text-[12px] ml-10">Minh Tam</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
