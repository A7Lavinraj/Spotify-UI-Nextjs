import Topnav from "@/components/main/Topnav";
import MainPlaylist from "@/components/Playlist/MainPlaylist";
import Feed from "@/components/feeds/Feed";
import { useState } from "react";

const Home = () => {
  const [message, setmessage] = useState<string>("");

  const date = new Date();
  let current_hour;

  const greet = () => {
    current_hour = date.getHours();

    if (current_hour < 12 && message != "Good morning") {
      setmessage("Good morning");
    } else if (
      current_hour >= 12 &&
      current_hour < 16 &&
      message != "Good afternoon"
    ) {
      setmessage("Good afternoon");
    } else if (
      current_hour >= 16 &&
      current_hour < 20 &&
      message != "Good evening"
    ) {
      setmessage("Good evening");
    } else if (
      current_hour >= 20 &&
      current_hour < 24 &&
      message != "Good night"
    ) {
      setmessage("Good night");
    }
  };

  greet();

  return (
    <div>
      <Topnav name="__Levo" />
      <h2 className="text-white text-3xl font-bold mx-8 my-4">{message}</h2>
      <MainPlaylist />
      <Feed feedtitle="New to you" />
    </div>
  );
};

export default Home;
