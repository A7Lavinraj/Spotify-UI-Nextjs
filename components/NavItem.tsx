interface navItemProps {
  title: string;
  Icon: any;
  background?: string;
  color?: string;
  setstate?: any;
}

export const Primary: React.FC<navItemProps> = ({ title, Icon, setstate }) => {
  return (
    <div className="flex items-end justify-start gap-4 my-4 text-gray-400 transition ease-in-out duration-300 hover:text-white focus:text-white">
      <Icon size={25} />
      <span
        className="text-sm font-semibold focus:text-white"
        onClick={(event: any) => {
          setstate(String(event.target.innerText));
        }}
      >
        {title}
      </span>
    </div>
  );
};
