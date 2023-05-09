import MainPlaylist from "@/components/Playlist/MainPlaylist";
import Feed from "@/components/feeds/Feed";
import Navbar from "@/components/navbar/Navbar";
import Topnav from "@/components/navbar/Topnav";
import { useState } from "react";

const Main = () => {
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
    <>
      <Topnav name="__Levo" />
      <MainPlaylist />
      <Feed feedtitle="New to you" />
    </>
  );
};

export default Main;
