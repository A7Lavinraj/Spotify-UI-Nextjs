interface searchProps {
  title: string;
  color: string;
}

const SearchRouteItem: React.FC<searchProps> = ({ title, color }) => {
  return (
    <div className={`${color} w-52 h-52 rounded-md p-2`}>
      <span className="text-white text-2xl font-bold">{title}</span>
    </div>
  );
};

export default SearchRouteItem;
