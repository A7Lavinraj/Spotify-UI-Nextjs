import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";

interface listitemProps {
  title: string;
  image?: any;
}

export const MainListItem: React.FC<listitemProps> = ({ image, title }) => {
  return (
    <div className="flex items-center relative z-0 h-[5rem] bg-minor text-white rounded-md shadow-gray-600 shadow-sm transition duration-500 hover:bg-gray-600 group">
      <Image
        src={image}
        width={100}
        alt="anything"
        objectFit="cover"
        priority
        className="max-w-[8rem] h-full rounded-tl-md rounded-bl-md"
      />
      <p className="text-start w-full ml-4">{title}</p>
      <button className="hidden group-hover:block absolute right-0">
        <AiFillPlayCircle className="text-6xl mr-4" color="palegreen" />
      </button>
    </div>
  );
};

export const NavListItem: React.FC<listitemProps> = ({ title }) => {
  return (
    <div className="flex items-start justify-center text-gray-400 text-sm">
      <h1>{title}</h1>
    </div>
  );
};
