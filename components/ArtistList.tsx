import Artist from "@/components/Artist";
import alanWalker from "@/images/img4.jpg";
import justinBeiber from "@/images/justinBeiber.jpeg";
import blackpink from "@/images/blackpink.jpeg";
import salenaGomez from "@/images/salenaGomez.jpeg";

const ArtistList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 text-white absolute z-10 top-20">
      <Artist cover={alanWalker} name="Alan " tag="Artist" />
      <Artist cover={salenaGomez} name="Salena Gomez" tag="Artist" />
      <Artist cover={justinBeiber} name="Justin Beiber" tag="Artist" />
      <Artist cover={blackpink} name="BLACKPINK" tag="Artist" />
    </div>
  );
};

export default ArtistList;
