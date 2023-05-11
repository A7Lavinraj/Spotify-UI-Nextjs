import Image from "next/image";
import spotify from "@/images/spotify.svg";
import { AiFillHome, AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import { Primary, Secondary } from "./NavItem";

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
      gap-6
      min-w-[15rem]
      min-h-screen
      p-6
    "
    >
      <div>
        <Image src={spotify} width={130} height={130} alt="logo" />
      </div>
      <div>
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
      <div>
        <Secondary
          title="Your Library"
          Icon={BiLibrary}
          background="bg-white rounded-sm p-1"
        />
        <hr className="w-full h-px border-none bg-minor" />
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
    </nav>
  );
};

export default Navbar;
