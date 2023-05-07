import Image from "next/image";

interface feeditemProps {
  title: string;
  discription: string;
  image?: any;
}

const FeedItem: React.FC<feeditemProps> = ({ title, discription, image }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-2 p-4 hover:bg-gray-800 rounded-md transition ease-in-out duration-500">
      <div>
        <Image src={image} alt="feed" width={150} height={150} priority />
      </div>
      <h2 className="text-white">{title}</h2>
      <p className="text-gray-400">{discription}</p>
    </div>
  );
};

export default FeedItem;
