import { MainListItem } from "@/components/PlaylistItem";
import img1 from "@/images/img5.jpg";
import img2 from "@/images/img6.jpeg";
import img3 from "@/images/img3.jpg";
import img4 from "@/images/img4.jpg";

const MainPlaylist = () => {
  return (
    <div className="grid gap-4 grid-rows-2 grid-cols-2 mx-8 my-8 ">
      <MainListItem title="Multiverse" image={img1} />
      <MainListItem title="Rise up | Fat Rat" image={img2} />
      <MainListItem title="Smile" image={img3} />
      <MainListItem title="Alan Walker" image={img4} />
    </div>
  );
};

export default MainPlaylist;
