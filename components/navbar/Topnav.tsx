import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

interface topnavProps {
  name: string;
}
const Topnav: React.FC<topnavProps> = ({ name = "user" }) => {
  return (
    <nav className="flex items-center justify-between p-4 mx-4">
      <div className="flex items-center justify-center gap-2">
        <IoIosArrowBack
          color="gray"
          className="bg-secondary rounded-full text-3xl p-1"
        />
        <IoIosArrowForward
          color="gray"
          className="bg-secondary rounded-full text-3xl p-1"
        />
      </div>
      <div className="flex items-center justify-center gap-4 text-white">
        <button className="px-2 py-1 rounded-3xl text-sm bg-secondary border-2 border-gray-400">
          Upgrade
        </button>
        <div className="flex items-center gap-3 bg-secondary rounded-3xl p-1">
          <AiOutlineUser className="bg-minor text-2xl rounded-full p-1" />
          <span className="text-xl">{name}</span>
          <IoMdArrowDropdown className="text-2xl rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default Topnav;
