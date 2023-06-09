import Usermenu from "@/components/Usermenu";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { useState } from "react";

interface topnavProps {
  name: string;
  searchbar?: boolean;
}

const Topnav: React.FC<topnavProps> = ({ name, searchbar }) => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  const onclickHandler = () => {
    setisOpen(!isOpen);
  };

  if (typeof window == "object") {
    document.addEventListener("click", (event: any) => {
      if (event.target !== null) {
        if (event.target.id !== "usermenu") {
          setisOpen(false);
        }
      }
    });
  }

  return (
    <nav className="flex items-center justify-between p-4 mx-4 h-20">
      <div className="flex items-center justify-center gap-2">
        <IoIosArrowBack
          color="gray"
          className="bg-secondary rounded-full text-3xl p-1"
        />
        <IoIosArrowForward
          color="gray"
          className="bg-secondary rounded-full text-3xl p-1"
        />

        {searchbar && (
          <div className="relative">
            <AiOutlineSearch className="absolute top-2 right-6 text-2xl text-gray-600 placeholder:left-2" />
            <input
              placeholder="What do you want to listen to?"
              className="border-0 rounded-3xl mx-2 pl-4 h-10 w-80 outline-0"
              type="text"
            />
          </div>
        )}
      </div>
      <div className="flex items-center justify-center gap-4 text-white">
        <button
          className="
            px-4
            py-1
            rounded-3xl
            text-sm
            text-black
            transparent
            bg-white
            transition
            duration-100
            hover:scale-105
          "
        >
          Upgrade
        </button>
        <div
          onClick={onclickHandler}
          id="usermenu"
          className="
            flex
            items-center
            gap-3
            bg-secondary
            rounded-3xl
            px-1
            transition
            duration-300
            relative
            z-10
            scale-110
            cursor-pointer
          "
        >
          <AiOutlineUser
            id="usermenu"
            className="bg-minor text-2xl rounded-full p-1"
          />
          <span id="usermenu" className="text-md py-1">
            {name}
          </span>

          {isOpen ? (
            <IoMdArrowDropup id="usermenu" className="text-2xl rounded-full" />
          ) : (
            <IoMdArrowDropdown
              id="usermenu"
              className="text-2xl rounded-full"
            />
          )}

          {isOpen && <Usermenu />}
        </div>
      </div>
    </nav>
  );
};

export default Topnav;
