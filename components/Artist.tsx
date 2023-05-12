import Image from "next/image";

interface artistProps {
  name: string;
  tag: string;
  cover?: any;
}

const Artist: React.FC<artistProps> = ({ name, tag, cover }) => {
  return (
    <div className="flex items-center justify-start gap-4 w-full">
      <div className="w-14 h-14 bg-white rounded-full relative overflow-hidden">
        <Image src={cover} layout="fill" objectFit="cover" alt="" />
      </div>
      <div>
        <span>{name}</span>
        <p className="text-gray-400 text-sm">{tag}</p>
      </div>
    </div>
  );
};

export default Artist;
