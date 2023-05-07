import Usermenu from "@/components/main/Usermenu";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";

interface topnavProps {
  name: string;
}

const Topnav: React.FC<topnavProps> = ({ name }) => {
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
    <nav
      className="
        flex
        items-center
        justify-between
        p-4
        mx-4
      "
    >
      <div
        className="
          flex
          items-center
          justify-center
          gap-2
        "
      >
        <IoIosArrowBack
          color="gray"
          className="
            bg-secondary
            rounded-full
            text-3xl
            p-1
          "
        />
        <IoIosArrowForward
          color="gray"
          className="
            bg-secondary
            rounded-full
            text-3xl
            p-1
          "
        />
      </div>
      <div
        className="
          flex
          items-center
          justify-center
          gap-4
          text-white
        "
      >
        <button
          className="
            px-4
            py-1
            rounded-3xl
            text-sm
            transparent
            bg-secondary
            border
            border-gray-400
            transition
            duration-100
            hover:border-white
            hover:border-2
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
            hover:bg-minor
            relative
            z-10
            scale-110
            cursor-pointer
            group
          "
        >
          <AiOutlineUser
            id="usermenu"
            className="
              bg-minor
              text-2xl
              rounded-full
              group-hover:bg-black
              p-1
            "
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
