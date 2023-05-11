import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { Primary } from "@/components/NavItem";

interface navbarProps {
  state?: any;
  setstate?: any;
}

const Navbar: React.FC<navbarProps> = ({ setstate }) => {
  return (
    <nav
      className="
      bg-secondary
      flex
      flex-col
      items-start
      justify-start
      fixed
      gap-4
      min-w-[18rem]
      min-h-screen
    "
    >
      <div className="bg-primary rounded-md w-[17rem] mx-auto pl-1">
        <Primary
          title="Home"
          Icon={AiFillHome}
          color="white"
          setstate={setstate}
        />
        <Primary
          title="Search"
          Icon={AiOutlineSearch}
          color="white"
          setstate={setstate}
        />
      </div>

      <div className="bg-primary rounded-md w-[17rem] mx-auto pl-1 h-screen">
        <div className="flex items-end justify-start gap-4 my-4 text-gray-400 transition ease-in-out duration-300 hover:text-white focus:text-white">
          <BiLibrary size={25} />
          <span className="text-sm font-semibold focus:text-white">
            Your Library
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
