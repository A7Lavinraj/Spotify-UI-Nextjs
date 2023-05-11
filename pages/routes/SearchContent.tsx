import SearchRouteItem from "@/components/SearchRouteItem";
import Topnav from "@/components/navbar/Topnav";

const SearchContent = () => {
  return (
    <div>
      <Topnav name="__Levo" searchbar />
      <div className="flex items-center gap-8 ml-4 mt-4">
        <SearchRouteItem title="podcasts" color="bg-rose-400" />
        <SearchRouteItem title="stories" color="bg-gray-400" />
        <SearchRouteItem title="live events" color="bg-red-400" />
        <SearchRouteItem title="indie" color="bg-pink-400" />
        <SearchRouteItem title="pop" color="bg-blue-400" />
        <SearchRouteItem title="chart" color="bg-green-400" />
        <SearchRouteItem title="telegu" color="bg-cyan-400" />
      </div>
    </div>
  );
};

export default SearchContent;
