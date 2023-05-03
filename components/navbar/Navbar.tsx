import Image from "next/image";
import spotify from "@/assets/spotify.svg";
import { AiFillHome, AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import search from "@/assets/search-icon.svg";
import library from "@/assets/library.svg";
import add from "@/assets/add.svg";
import heart from "@/assets/heart.svg";
import { Primary, Secondary } from "./NavItem";

const Navbar = () => {
  return (
    <nav className="bg-secondary flex flex-col items-start justify-start gap-6 max-w-[15rem] min-h-screen p-6">
      <div>
        <Image src={spotify} width={130} height={130} alt="logo" />
      </div>
      <div>
        <Primary title="Home" Icon={AiFillHome} color="white" />
        <Primary title="Search" Icon={AiOutlineSearch} color="white" />
        <Primary title="Your Library" Icon={BiLibrary} color="white" />
      </div>
      <div>
        <Secondary
          title="Create Playlist"
          Icon={GrAdd}
          background="bg-white rounded-sm p-1"
        />
        <Secondary
          title="Liked Songs"
          Icon={AiFillHeart}
          color="white"
          background="bg-gradient-to-br from-violet-500 to-white p-1 rounded-sm"
        />
      </div>
      <hr className="w-full h-px border-none bg-minor" />
    </nav>
  );
};

export default Navbar;
